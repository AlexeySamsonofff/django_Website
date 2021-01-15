from django.db import models

# Create your models here.

class FAQCategories(models.Model):
    Category = models.CharField(max_length=200)

    def __str__(self):
        return self.Category

class FAQQuestions(models.Model):
    Category = models.ForeignKey(FAQCategories, on_delete=models.CASCADE)
    Question = models.CharField(max_length=200)
    Answer = models.TextField(max_length=4000)
