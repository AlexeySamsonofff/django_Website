from decimal import Decimal
from django.conf import settings
from django.urls import reverse
from django.shortcuts import render, get_object_or_404
from django.views.decorators.csrf import csrf_exempt
from paypal.standard.forms import PayPalPaymentsForm
from Orders.models import Orders

def payment_process(request):
    order_id = request.session.get('order_id')
    order = get_object_or_404(Orders, id=order_id)
    print('********* Order id: ', order_id)
    host = request.get_host()
    paypal_dict = {
        'business': settings.PAYPAL_RECEIVER_EMAIL,
        'amount': '%.2f' % order.get_total_cost().quantize(Decimal('.01')),
        'item_name': 'Order {}'.format(order.id),
        'invoice': str(order.id),
        'currency_code': 'GBP',
        'notify_url': 'http://{}{}'.format(host, reverse('paypal-ipn')),
        'return_url': 'http://{}{}'.format(host, reverse('payment:done')),
        'return': 'http://{}{}'.format(host, reverse('payment:done')),
        'rm': '2',
        'cancel_return': 'http://{}{}'.format(host,
        reverse('payment:canceled')),
    }

    form = PayPalPaymentsForm(initial=paypal_dict)
    return render(request, 'process.html', {'order': order, 'form': form})

@csrf_exempt
def payment_done(request):
    return render(request, 'orders_form_5.html')

@csrf_exempt
def payment_canceled(request):
    return render(request, 'orders_form_4.html', {'cancel': True, 'order_no': request.session['order_no']})