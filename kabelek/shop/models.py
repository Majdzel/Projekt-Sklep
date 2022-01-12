from django.db import models
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