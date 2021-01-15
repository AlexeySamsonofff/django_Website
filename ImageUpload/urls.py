from django.contrib import admin
from django.urls import path
from ImageUpload.views import *

urlpatterns = [
    path('', upload_form_view, name='image_upload'),
    path('success', success, name='success'),
]
