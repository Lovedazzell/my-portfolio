from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Notes(models.Model):
    name = models.CharField(max_length=50, null=True, blank = True)
    body = models.TextField(max_length=500, null=True, blank = True)
    status = models.BooleanField( default = False)
    profile = models.ImageField(null = True , blank = True)


class Subscribe(models.Model):
    email = models.EmailField(max_length=254,null = True,blank = True)
