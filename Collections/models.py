from django.db import models
from django.db.models import CASCADE

# Create your models here.
from django.views import generic


class CollectionCategory(models.Model):
    Category = models.CharField(max_length=200, default='Image')

    def __str__(self):
        return 'Category: ' + self.Category

class Collections(models.Model):
    Category = models.ForeignKey(CollectionCategory, related_name='items', on_delete=CASCADE)
    Price = models.DecimalField(max_digits=10, decimal_places=2)  # 26.00
    Image = models.CharField(max_length=255)
    Date = models.DateField(auto_now_add=True)
    Name = models.CharField(max_length=200, default='Image')
    ImageLrg = models.CharField(max_length=255)

    def __str__(self):
        return 'Name: ' + self.Name