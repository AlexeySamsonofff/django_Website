from django.urls import path
from .views import *
from .models import Collections

urlpatterns = [


    path('', collections_view, name='collections'),
]