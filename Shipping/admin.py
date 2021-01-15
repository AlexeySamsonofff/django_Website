from django.contrib import admin
from .models import ShippingLocations, Shipping
# Register your models here.

admin.site.register(ShippingLocations)
admin.site.register(Shipping)
