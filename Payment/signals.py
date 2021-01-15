from django.shortcuts import get_object_or_404
from paypal.standard.models import ST_PP_COMPLETED
from paypal.standard.ipn.signals import valid_ipn_received
from Orders.models import Orders

def payment_notification(sender, **kwargs):
    ipn_obj = sender
    if ipn_obj.payment_status == ST_PP_COMPLETED:
        # payment was successful
        order = get_object_or_404(Orders, id=ipn_obj.invoice)
        # mark the order as paid
        order.OrderStatus = "Paid"
        order.save()

        print ('############################################################')
        print('#')
        print('#')
        print('#')
        print('#')
        print('Over updated to Paid with PayPal')
        print('#')
        print('#')
        print('#')
        print('#')
        print('############################################################')

valid_ipn_received.connect(payment_notification)