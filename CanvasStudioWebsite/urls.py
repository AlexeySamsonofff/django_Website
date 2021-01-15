"""CanvasStudioWebsite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from website.views import home, canvasprints, canvasquality, trade
from SizesAndPrices.views import *
from TermsandConditions.views import *
from PrivacyPolicy.views import *
from SocialMedia.views import *
from ImageUpload.views import *
from MailList.views import *
from FAQ.views import GetCategories
from django.conf.urls import url
from django.views.static import serve
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home, name="home"),
    path('canvasprints/', canvasprints, name="canvasprints"),
    path('canvasquality/', canvasquality, name="canvasquality"),
    path('trade/', trade, name="trade"),
    path('faq/', GetCategories, name="faq"),
    path('termsandconditions/', TandC_view, name="termsandconditions"),
    path('privacy_policy/', PrivacyPolicy_view, name="privacy_policy"),
    path('social_media/', SocialMedia_view, name="social_media"),


    #Includes ***************************************************
    path('SizesAndPrices', include('SizesAndPrices.urls')),
    path('contact/', include('Contact.urls')),
    path('registration/', include('Registration.urls')),
    path('portfolio/', include('Portfolio.urls')),
    path('image_upload/', include('ImageUpload.urls')),
    path('collections/', include('Collections.urls')),
    path('', include('MailList.urls')),
    url(r'^cart/', include('ShoppingCart.urls', namespace='cart')),
    url(r'^orders/', include('Orders.urls', namespace='orders')),
    url(r'^coupons/', include('Coupons.urls', namespace='coupons')),
    url(r'^payment/', include('Payment.urls', namespace='payment')),
    url(r'^paypal/', include('paypal.standard.ipn.urls')),
    path('', include('ImageCustomise.urls')),
    #path(r'^admin/', include('Administration.urls')),


    #URLs AJAX *******************************************************
    url(r'^getPrices/$', getPrices_view, name='getPrices'),
    url(r'^getCmbDimensions/$', getCmbDimensions_view, name='getCmbDimensions'),
    url(r'^fileUpload/$', file_upload_view, name='fileUpload'),
    url(r'^subscribe/$', subscribe, name='subscribe'),
    url(r'^subscribe_confirmation/', subscribe_confirmation, name='subscribe_confirmation'),
    url(r'^newsletter/$', sendNewsletter_view, name='newsletter'),
]

if settings.DEBUG:
    urlpatterns += [
        url(r'^Media/(?P<path>.*)$', serve,
            {'document_root': settings.MEDIA_ROOT,}),
    ]
