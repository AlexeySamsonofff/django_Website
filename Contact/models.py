from django.db import models

# Create your models here.

class Contact(models.Model):
    Name = models.CharField(max_length=100)
    Email = models.CharField(max_length=100)
    Phone = models.CharField(max_length=100)
    Subject = models.CharField(max_length=100)
    Message = models.TextField()
    Date = models.DateField(auto_now_add=True)
    Time = models.TimeField(auto_now_add=True)
