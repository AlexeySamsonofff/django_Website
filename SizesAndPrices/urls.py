from django.urls import path
from .views import *
from django.conf.urls import url

urlpatterns = [
    path('', prices, name="prices"),
    #url(r'^getPrices/$', getPrices, name='getPrices'),
]