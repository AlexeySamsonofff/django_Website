from django.db import models

# Create your models here.

class SizesAndStock(models.Model):
    Inch = models.IntegerField()
    CM = models.FloatField()
    Stock = models.IntegerField(default=0)
