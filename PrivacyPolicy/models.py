from django.db import models

# Create your models here.
class PrivacyPolicy(models.Model):
    Header = models.CharField(max_length=200)
    Detail = models.TextField(max_length=4000)

    def __str__(self):
        return self.Header

