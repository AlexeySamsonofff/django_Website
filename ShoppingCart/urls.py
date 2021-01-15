from django.urls import path
from . import views
from django.conf.urls import url

app_name = 'cart'
urlpatterns = [
    url(r'^$', views.cart_detail, name='cart_detail'),
    url(r'^add/$', views.cart_add, name='cart_add'),
    url(r'^remove/(?P<Key_ID>\d+)/$', views.cart_remove, name='cart_remove'),
    url(r'^empty/$', views.cart_empty, name='cart_empty'),
]