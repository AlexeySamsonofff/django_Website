from django.contrib import admin

# Register your models here.
from .models import FAQCategories, FAQQuestions

admin.site.register(FAQCategories)
admin.site.register(FAQQuestions)