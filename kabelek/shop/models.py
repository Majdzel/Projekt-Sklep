from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from datetime import datetime
from django.urls import reverse

class items(models.Model):

    #GROSZE!!
    price = models.IntegerField(default=0)
    name = models.CharField(max_length=30)
    quantity = models.IntegerField(default=0)


    def __str__(self):
        return str(self.name)

    def convertGRtoZL(self):
        return self.price/100

class Customer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True)
    name = models.CharField(max_length=200, null=True)
    email= models.CharField(max_length=200, null=True)

    def __str__(self):
        return self.name