from django.conf.urls import url
from . import views

app_name = 'mailing'
urlpatterns = [
    url(r'^mailing_import/$', views.sendNewsletter_view, name='mailing_import'),
]