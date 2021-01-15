from decimal import Decimal
from django.conf import settings
from Coupons.models import Coupon
from Orders.models import OrderNumber

class Cart(object):

    def __init__(self, request):
        """
        Initialize the cart.
        """
        self.session = request.session
        cart = self.session.get(settings.CART_SESSION_ID)
        if not cart:
            # save an empty cart in the session
            cart = self.session[settings.CART_SESSION_ID] = {}
            print("=============================== CART CREATED Cart.py ===============================")
        else:
            print("=============================== CART EXISTS ===============================")

        # store current applied coupon
        self.coupon_id = self.session.get('coupon_id')
        self.cart = cart

    def add(self, canvas, canvasImg, cost, size, wrap, material, proof, notes, quantity=1, update_quantity=False):
        """
        Add a Canvas to the cart or update its quantity.
        """
        key = self.len()
        key = key + 1
        print (key, " with 1 added")
        key_id = str(key)

        #if update_quantity:
        #    self.cart[key_id]['quantity'] = quantity
        #else:
        #    self.cart[key_id]['quantity'] += quantity

        self.cart[key_id] = {
            'Img': canvasImg,
            'canvas': canvas,
            'cost': cost,
            'size': size,
            'wrap': wrap,
            'material': material,
            'proof': proof,
            'notes': notes,
            'quantity': quantity,
            'linetotal': int(cost) * int(quantity),
            'Key_ID': key_id
        }
        self.save()

    def save(self):
        # update the session cart
        self.session[settings.CART_SESSION_ID] = self.cart

        #mark the session as 'modified' to make sure it is saved
        self.session.modified = True

    def remove(self, Key_ID):
        """
        Remove a product from the cart
        """
        i = self.len()
        if Key_ID in self.cart:
            del self.cart[Key_ID]
            self.save()

    def __iter__(self):
        for item in self.cart.values():
            item['total_price'] = item['cost'] * item['quantity']
            yield item

    def __len__(self):
        val = sum(item['quantity'] for item in self.cart.values())
        return val

    def get_total_price(self):
        return sum(Decimal(item['cost']) * item['quantity'] for item in self.cart.values())

    def clear(self):
        # remove cart from session
        del self.session[settings.CART_SESSION_ID]
        self.session['coupon_id'] = None
        self.session['order_no'] = None
        self.session['coupon_code'] = None
        self.session['coupon_amt'] = None
        self.session.modified = True

    def len(self):
        i = 0
        for item in self.cart.values():
            i = i + 1
        print ("=============================== CART COUNT ===============================")
        print(i, " Current Count")
        return i

    @property
    def coupon(self):
        if self.coupon_id:
            return Coupon.objects.get(id=self.coupon_id)
        return None

    def get_discount(self):
        if self.coupon:
            return (self.coupon.discount / Decimal('100')) \
                   * self.get_total_price()
        return Decimal('0')

    def get_total_price_after_discount(self):
        return self.get_total_price() - self.get_discount()

    def getOrderNo(self):
        OrderNo = OrderNumber.objects.latest('OrderNo')
        OrderNo.OrderNo = OrderNo.OrderNo + 1
        print ('******** Order No ', OrderNo.OrderNo, ' *******')
        return OrderNo.OrderNo


