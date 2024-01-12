from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    
    TokenRefreshView,
)

urlpatterns = [
    path('',views.getRoutes),
    path('reviews/',views.reviews),
    path('subscribe/',views.subscribe),
    path('giveReview/',views.giveReview),
    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

]
