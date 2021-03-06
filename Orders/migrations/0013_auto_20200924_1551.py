# Generated by Django 3.1.1 on 2020-09-24 14:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Orders', '0012_auto_20200924_1546'),
    ]

    operations = [
        migrations.RenameField(
            model_name='deliverydetails',
            old_name='delArea',
            new_name='Area',
        ),
        migrations.RenameField(
            model_name='deliverydetails',
            old_name='delDate',
            new_name='Date',
        ),
        migrations.RenameField(
            model_name='deliverydetails',
            old_name='delFirstName',
            new_name='FirstName',
        ),
        migrations.RenameField(
            model_name='deliverydetails',
            old_name='delHouse',
            new_name='House',
        ),
        migrations.RenameField(
            model_name='deliverydetails',
            old_name='delLastName',
            new_name='LastName',
        ),
        migrations.RenameField(
            model_name='deliverydetails',
            old_name='delPostCode',
            new_name='PostCode',
        ),
        migrations.RenameField(
            model_name='deliverydetails',
            old_name='delSessionID',
            new_name='SessionID',
        ),
        migrations.RenameField(
            model_name='deliverydetails',
            old_name='delStreet',
            new_name='Street',
        ),
        migrations.RenameField(
            model_name='deliverydetails',
            old_name='delTelephone',
            new_name='Telephone',
        ),
        migrations.RenameField(
            model_name='deliverydetails',
            old_name='delTown',
            new_name='Town',
        ),
        migrations.RemoveField(
            model_name='paymentdetails',
            name='Discount',
        ),
        migrations.RemoveField(
            model_name='paymentdetails',
            name='DiscountCode',
        ),
        migrations.AddField(
            model_name='orders',
            name='DiscountCode',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AlterField(
            model_name='orders',
            name='PaymentType',
            field=models.CharField(default='Direct Bank Transfer', max_length=50),
        ),
    ]
