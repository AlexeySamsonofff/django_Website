from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse, JsonResponse
from django.views.decorators.http import require_POST
from .cart import Cart
from .forms import CartAddProductForm, CartQuantities
from Coupons.forms import CouponApplyForm
from Orders.models import OrderNumber

@require_POST
def cart_add(request):
    cart = Cart(request)
    form = CartAddProductForm(request.POST)
    if form.is_valid():
        cd = form.cleaned_data
        print('********** FORM DATA ***************')
        print('File: ', request.session['file'])
        print('Session Image Width: ', request.session['w'])
        print('Session Image Height: ', request.session['h'])
        print('Canvas Cost: ', cd['canvasCost'])
        print('Canvas Width: ', cd['canvasWidth'])
        print('Canvas Height: ', cd['canvasHeight'])
        print('Canvas Wrap: ', cd['canvasWrap'])
        print('Canvas Material: ', cd['canvasMaterial'])
        print('Canvas Notes: ', cd['canvasNotes'])
        print('Canvas Proof: ', cd['canvasProof'])
        print('***********************************************')

        id = cd['canvasWidth'] + 'x' + cd['canvasHeight'] + ' - ' + cd['canvasWrap'] + ' - ' + cd['canvasMaterial']
        cart.add(
            canvas=id,
            canvasImg=cd['canvasImg'],
            cost=cd['canvasCost'],
            size=cd['canvasWidth'] + 'x' + cd['canvasHeight'],
            wrap=cd['canvasWrap'],
            material=cd['canvasMaterial'],
            proof=cd['canvasProof'],
            notes=cd['canvasNotes'],
            quantity=cd['quantity'],
            update_quantity=cd['update']
        )

    else:
        print ("Form Invalid")

    return redirect('cart:cart_detail')

def cart_detail(request):
    cart = Cart(request)
    coupon_apply_form = CouponApplyForm()

    #for item in cart:
    #    item['update_quantity_form'] = CartQuantities(
    #        initial={
    #            'quantity': item['quantity'],
    #            'update': True
    #        }
    #    )

    # get next order number available
    if not request.session.get('order_no', None):
        order_no = OrderNumber.objects.get(id__iexact=1)
        #request.session['order_id'] = order_no.id
        #request.session['order_no'] = order_no.OrderNo
        #print('********** CURRENT ORDER NUMBER: ', order_no.OrderNo, ' ***************')
        NewOrderNo = order_no.OrderNo + 1
        order_no.OrderNo = NewOrderNo
        order_no.save()
        request.session['order_no'] = NewOrderNo
        print('********** NEW ORDER NUMBER: ', order_no.OrderNo, ' ***************')

    data = {
        'cart': cart,
        'coupon_apply_form': coupon_apply_form,
        'CartCount': cart.len,
        'order_no': request.session['order_no']
    }

    return render(request, "orders_form_3.html", data)

def cart_remove(request, Key_ID):
    cart = Cart(request)
    cart.remove(Key_ID)
    return redirect('cart:cart_detail')

def cart_empty(request):
    cart = Cart(request)
    cart.clear()
    return redirect('cart:cart_detail')



