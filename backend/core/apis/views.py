from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view , permission_classes
from rest_framework.permissions import IsAuthenticated
from django.contrib import messages
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django.views.decorators.csrf import csrf_exempt

from .serializers import SerializersNotes
from core.models import Notes, Subscribe
from django.core.files.storage import FileSystemStorage
from django.shortcuts import render

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username  
        # ...

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token',
        '/api/token/refresh'
    ]
    return Response(routes)


@api_view(['POST'])
def reviews(request):
    
    print(request.user)

    notes = Notes.objects.all()
    print(notes)
    serializer = SerializersNotes(notes, many = True)
    # print(serializer)
    # print(serializer.data)
    return Response(serializer.data)

@api_view(['POST'])
def subscribe(request):
    email  = request.data['email']
    if not Subscribe.objects.filter(email = email).exists():
        data = Subscribe(email= email)
        data.save()

    return Response({'status':200})



@csrf_exempt
def giveReview(request):
    if request.method == 'POST':

        data = request.FILES.get('profile')
        name = request.POST.get('name')
        review = request.POST.get('review')
        
        if data == None:
            initiate_save = Notes(name = name , body= review )
        else:
            fss = FileSystemStorage()
            profile = fss.save(data.name,data)
            profile = fss.url(profile)
            initiate_save = Notes(name = name , body= review ,profile = data)
        initiate_save.save()
        messages.success    (request,'Feedback Update Successfully')

    
    return render(request,'core/index.html')
