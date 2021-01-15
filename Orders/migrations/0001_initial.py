# Generated by Django 3.0.8 on 2020-07-15 12:13

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Orders',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Size', models.CharField(max_length=20)),
                ('OrderNo', models.IntegerField()),
                ('SessionID', models.CharField(max_length=50)),
                ('ImageName', models.CharField(max_length=50)),
                ('ImageEdge', models.CharField(max_length=50)),
                ('ImageStyle', models.CharField(max_length=50)),
                ('Price', models.CharField(max_length=50)),
                ('Qty', models.IntegerField()),
                ('Date', models.DateField()),
                ('Time', models.TimeField()),
                ('Paid', models.CharField(max_length=3)),
                ('OrderData', models.CharField(max_length=2000)),
                ('OrderProof', models.CharField(max_length=100)),
                ('OrderStatus', models.CharField(max_length=100)),
                ('OrderType', models.CharField(max_length=100)),
                ('OrderMaterial', models.CharField(max_length=100)),
                ('Discount', models.FloatField()),
                ('OrderEffect', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Shipping',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Location', models.CharField(max_length=50)),
                ('LocationCodes', models.CharField(max_length=50)),
                ('Price', models.IntegerField()),
                ('Status', models.CharField(default='Not Active', max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='PaymentDetails',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('SessionID', models.CharField(max_length=50)),
                ('FirstName', models.CharField(max_length=50)),
                ('LastName', models.CharField(max_length=50)),
                ('House', models.CharField(max_length=50)),
                ('Street', models.CharField(max_length=50)),
                ('Area', models.CharField(max_length=50)),
                ('Town', models.CharField(max_length=50)),
                ('PostCode', models.CharField(max_length=50)),
                ('Telephone', models.CharField(max_length=50)),
                ('Date', models.DateField()),
                ('PaymentType', models.CharField(max_length=20)),
                ('Email', models.CharField(max_length=50)),
                ('Discount', models.FloatField()),
                ('DiscountCode', models.CharField(max_length=255)),
                ('OrderNo', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Orders.Orders')),
            ],
        ),
        migrations.CreateModel(
            name='DeliveryDetails',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('SessionID', models.CharField(max_length=50)),
                ('FirstName', models.CharField(max_length=50)),
                ('LastName', models.CharField(max_length=50)),
                ('House', models.CharField(max_length=50)),
                ('Street', models.CharField(max_length=50)),
                ('Area', models.CharField(max_length=50)),
                ('Town', models.CharField(max_length=50)),
                ('PostCode', models.CharField(max_length=50)),
                ('Telephone', models.CharField(max_length=50)),
                ('Date', models.DateField()),
                ('OrderNo', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Orders.Orders')),
            ],
        ),
    ]