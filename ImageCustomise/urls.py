from django.urls import path
from ImageCustomise.views import *
from django.conf.urls import url

urlpatterns = [
    path('image_size/<img_name>/<canvas_width>/<canvas_height>', prices, name="image_size"),

    url(r'^rotateL/$', rotateL_view, name='rotateL'),
    url(r'^rotateR/$', rotateR_view, name='rotateR'),
    url(r'^flip/$', flip_view, name='flip'),
    url(r'^imgsrc/$', imgsrc_view, name='imgsrc'),
]