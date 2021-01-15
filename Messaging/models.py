from django.db import models
from datetime import date, time


# Create your models here.

class Email(models.Model):
    Subject = models.CharField(max_length=255)
    Message = models.CharField(max_length=2000)
    Name = models.CharField(max_length=100)
    Email = models.CharField(max_length=255)
    Telephone = models.CharField(max_length=50)
    Date = models.DateField()
    Time = models.TimeField()