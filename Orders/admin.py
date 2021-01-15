from django.contrib import admin
from .models import Orders, OrderItems, PaymentDetails, DeliveryDetails

class OrderItemInLine(admin.TabularInline):
    model = OrderItems
    raw_id_fields = ['Order']

class PaymentItemInLine(admin.TabularInline):
    model = PaymentDetails
    raw_id_fields = ['Order']

class DeliveryItemInLine(admin.TabularInline):
    model = DeliveryDetails
    raw_id_fields = ['Order']

class OrderAdmin(admin.ModelAdmin):
    list_display = ['OrderNo', 'Date', 'PaymentType', 'Paid', 'OrderStatus', 'AlternateDelivery']
    list_filter = ['id']
    inlines = [OrderItemInLine, PaymentItemInLine, DeliveryItemInLine]

admin.site.register(Orders, OrderAdmin)