from django.db import models
from django.db.models import CASCADE

# Create your models here.
class ShippingLocations(models.Model):
    Location = models.CharField(max_length=50)
    Price = models.IntegerField(default=0)
    Addtional = models.IntegerField(default=0)
    Status = models.CharField(max_length=50, default='Not Active')

class Shipping(models.Model):
    ShippingLocations = models.ForeignKey(ShippingLocations, related_name='items', on_delete=CASCADE)
    LocationCodes = models.CharField(max_length=50)
