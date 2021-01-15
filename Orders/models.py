from django.db import models
from datetime import date, time
from django.db.models import CASCADE

# Create your models here.
class OrderNumber(models.Model):
    OrderNo = models.IntegerField()

class Orders(models.Model):
    OrderNo = models.IntegerField()
    SessionID = models.CharField(max_length=50)
    Date = models.DateField(auto_now_add=True)
    Time = models.TimeField(auto_now_add=True)
    Discount = models.IntegerField()
    DiscountCode = models.CharField(max_length=255, default='')
    PaymentType = models.CharField(max_length=50, default="Direct Bank Transfer")
    Paid = models.CharField(max_length=3)
    OrderStatus = models.CharField(max_length=200)
    AlternateDelivery = models.IntegerField()

    class Meta:
        ordering = ('OrderNo',)

    def __str__(self):
        return 'Order {}'.format(self.id)

    def get_total_cost(self):
        total_cost = sum(item.get_cost() for item in self.items.all())
        return total_cost - total_cost * self.Discount / 100

class OrderItems(models.Model):
    Order = models.ForeignKey(Orders, related_name='items', on_delete=CASCADE)
    Size = models.CharField(max_length=20)                              # 40x80"
    OrderNo =  models.IntegerField()       # 4000
    ImageEdge = models.CharField(max_length=50)                         # Photo, Mirror, Colour
    Price = models.DecimalField(max_digits=10, decimal_places=2)                             # 26.00
    Qty = models.PositiveIntegerField(default=1)
    OrderMaterial = models.CharField(max_length=100)                    # Standard, Premium
    OrderNotes = models.CharField(max_length=2000)
    Proof = models.BooleanField(default=False)
    Image = models.CharField(max_length=255)
    Collection = models.BooleanField(default=False)

    def __str__(self):
        return '{}'.format(self.id)

    def get_cost(self):
        return self.Price * self.Qty

class PaymentDetails(models.Model):
    Order = models.ForeignKey(Orders, on_delete=CASCADE)
    OrderNo =  models.IntegerField()
    SessionID = models.CharField(max_length=50)
    FirstName = models.CharField(max_length=50)
    LastName = models.CharField(max_length=50)
    House = models.CharField(max_length=50)
    Street = models.CharField(max_length=50)
    Area = models.CharField(max_length=50)
    Town = models.CharField(max_length=50)
    PostCode = models.CharField(max_length=50)
    Telephone = models.CharField(max_length=50)
    Email = models.CharField(max_length=50)

class DeliveryDetails(models.Model):
    Order = models.ForeignKey(Orders, on_delete=CASCADE)
    OrderNo =  models.IntegerField()
    SessionID = models.CharField(max_length=50)
    FirstName = models.CharField(max_length=50)
    LastName = models.CharField(max_length=50)
    House = models.CharField(max_length=50)
    Street = models.CharField(max_length=50)
    Area = models.CharField(max_length=50)
    Town = models.CharField(max_length=50)
    PostCode = models.CharField(max_length=50)
    Telephone = models.CharField(max_length=50)

