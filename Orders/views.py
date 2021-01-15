from django.core.mail import EmailMessage
from django.template.loader import get_template
from django.shortcuts import render
from .models import OrderNumber, Orders, OrderItems, PaymentDetails, DeliveryDetails
from SizesAndPrices.models import SizesAndStock
from ShoppingCart.cart import Cart
from TermsandConditions.models import TandC
from django.shortcuts import render, redirect
from django.urls import reverse
from django.http import HttpResponse, JsonResponse

def order_create(request):
    cart = Cart(request)

    if cart.len() > 0:
        if request.method == 'POST':

            print('********** POST: ', request.POST)

            # Add Order
            AltDelivery = 0
            if request.POST['txtShipping'] == 'YES':
                AltDelivery = 1

            if not request.session.get('coupon_amt', None):
                dis = 0
                code = ''
            else:
                dis = request.session.get('coupon_amt')
                code = request.session.get('coupon_code')

            # Add Order
            order = Orders.objects.create(
                OrderNo=request.session['order_no'],
                OrderStatus='Unpaid',
                Discount=dis,
                AlternateDelivery=AltDelivery,
                PaymentType=request.POST['radPayment'],
                DiscountCode=code,
            )

            if request.POST['txtShipping'] == 'YES':
                print ("Add Alternative Delivery Address")
                DeliveryDetails.objects.create(
                    OrderNo=request.session['order_no'],
                    FirstName=request.POST['d-0'],
                    LastName=request.POST['d-1'],
                    House=request.POST['d-2'],
                    Street=request.POST['d-3'],
                    Area=request.POST['d-4'],
                    Town=request.POST['d-5'],
                    PostCode=request.POST['d-6'],
                    Telephone=request.POST['d-7'],
                    Order_id = order.id,
                )
                AltDelivery = 1

            #Add Billing Payment Address
            PaymentDetails.objects.create(
                OrderNo=request.session['order_no'],
                FirstName=request.POST['p-0'],
                LastName=request.POST['p-1'],
                House=request.POST['p-2'],
                Street=request.POST['p-3'],
                Area=request.POST['p-4'],
                Town=request.POST['p-5'],
                PostCode=request.POST['p-6'],
                Telephone=request.POST['p-7'],
                Email=request.POST['p-8'],
                Order_id=order.id,
            )

            # Add cart items
            for item in cart:
                OrderItems.objects.create(
                    Size=item['size'],
                    ImageEdge=item['wrap'],
                    Price=item['cost'],
                    Qty=item['quantity'],
                    OrderMaterial=item['material'],
                    OrderNo=request.session['order_no'],
                    Order_id=order.id,
                    OrderNotes=item['notes'],
                    Proof=item['proof'],
                    Image=item['Img'],
                )

                # Update Stock - reduce stretcher bars by 2 for each Inch
                dim = item['size'].split('x')

                i = 0
                while True:
                    if( i == 2):
                        break;
                    else:
                        data = SizesAndStock.objects.get(Inch = dim[i])
                        data.Stock = data.Stock - (2 * item['quantity']) #Enable muliple quanties i.e if 2 deduct 8 bars
                        data.save()
                        i = i + 1

            # Prepare Customer Address and get Invoice Template
            ctx = {
                'cart': cart,
                'name': request.POST['p-0'] + ' ' + request.POST['p-1'],
                'address1': request.POST['p-2'] + ', ' + request.POST['p-3'],
                'address2': request.POST['p-4'] + ', ' + request.POST['p-5'],
                'address3': request.POST['p-6'], 'order_no': request.session['order_no'],
                'payment_method': request.POST['radPayment']
            }

            if AltDelivery == 1:
                ctx = {**ctx,
                       'delivery1': request.POST['d-2'] + ', ' + request.POST['d-3'],
                       'delivery2': request.POST['d-4'] + ', ' + request.POST['d-5'],
                       'delivery3': request.POST['d-6']
                       }
            else:
                ctx = {**ctx,
                       'delivery1': request.POST['p-2'] + ', ' + request.POST['p-3'],
                       'delivery2': request.POST['p-4'] + ', ' + request.POST['p-5'],
                       'delivery3': request.POST['p-6']
                       }

            # Order summary email
            template = get_template('email_order_summary.html')
            SendMessage(template, 'Canvas Order Summary #' + str(request.session['order_no']), request.POST['p-8'], ctx)

            # Order Invoice Template
            template = get_template('email_invoice.html')

            if request.POST['radPayment'] == 'Bank Transfer':
                data = {
                    'cart': cart,
                    'order_no': request.session['order_no'],
                    'payment': request.POST['radPayment']
                }

                # Send Invoice to the customer and Design@thecanvas....
                ctx = { **ctx,
                    'instructions': 'Please can you pay by Bank Transfer to the following account:' +
                             'Santander Bank PLC' +
                             'Ben Osborne/The Canvas Print Studio' +
                             'Reference: 4140' +
                             'Account No: 3086152' +
                             'Sort Code: 09-01-29'
                }

                SendMessage(template, 'Canvas Order #' + str(request.session['order_no']), request.POST['p-8'], ctx)

                cart.clear()
                return render(request, 'orders_form_5.html', data)
            else:

                SendMessage(template, 'Canvas Order #' + str(request.session['order_no']), request.POST['p-8'], ctx)

                request.session['order_id'] = order.id
                print('**************', order.id)
                return redirect(reverse('payment:process'))

        else:

            c = TandC.objects.all()

            data = {
                'cart': cart,
                'order_no': request.session['order_no'],
                "tandc": c
            }
            return render (request, 'orders_form_4.html', data)

    else:
        return render(request, 'orders_form_3.html')

def SendMessage(template, Subject, ToEmail, ctx):
    content = template.render(ctx)
    msg = EmailMessage(Subject, content, 'orders@thecanvasprintstudio.co.uk', to=[ToEmail, 'orders@thecanvasprintstudio.co.uk' ])
    msg.content_subtype = 'html'
    msg.send()