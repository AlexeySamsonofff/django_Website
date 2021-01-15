# Generated by Django 3.1.1 on 2020-09-24 19:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Orders', '0013_auto_20200924_1551'),
    ]

    operations = [
        migrations.RenameField(
            model_name='deliverydetails',
            old_name='Area',
            new_name='dArea',
        ),
        migrations.RenameField(
            model_name='deliverydetails',
            old_name='FirstName',
            new_name='dFirstName',
        ),
        migrations.RenameField(
            model_name='deliverydetails',
            old_name='House',
            new_name='dHouse',
        ),
        migrations.RenameField(
            model_name='deliverydetails',
            old_name='LastName',
            new_name='dLastName',
        ),
        migrations.RenameField(
            model_name='deliverydetails',
            old_name='PostCode',
            new_name='dPostCode',
        ),
        migrations.RenameField(
            model_name='deliverydetails',
            old_name='Street',
            new_name='dStreet',
        ),
        migrations.RenameField(
            model_name='deliverydetails',
            old_name='Telephone',
            new_name='dTelephone',
        ),
        migrations.RenameField(
            model_name='deliverydetails',
            old_name='Town',
            new_name='dTown',
        ),
        migrations.RenameField(
            model_name='paymentdetails',
            old_name='Area',
            new_name='pArea',
        ),
        migrations.RenameField(
            model_name='paymentdetails',
            old_name='Email',
            new_name='pEmail',
        ),
        migrations.RenameField(
            model_name='paymentdetails',
            old_name='FirstName',
            new_name='pFirstName',
        ),
        migrations.RenameField(
            model_name='paymentdetails',
            old_name='House',
            new_name='pHouse',
        ),
        migrations.RenameField(
            model_name='paymentdetails',
            old_name='LastName',
            new_name='pLastName',
        ),
        migrations.RenameField(
            model_name='paymentdetails',
            old_name='PaymentType',
            new_name='pPaymentType',
        ),
        migrations.RenameField(
            model_name='paymentdetails',
            old_name='PostCode',
            new_name='pPostCode',
        ),
        migrations.RenameField(
            model_name='paymentdetails',
            old_name='Street',
            new_name='pStreet',
        ),
        migrations.RenameField(
            model_name='paymentdetails',
            old_name='Telephone',
            new_name='pTelephone',
        ),
        migrations.RenameField(
            model_name='paymentdetails',
            old_name='Town',
            new_name='pTown',
        ),
        migrations.RemoveField(
            model_name='deliverydetails',
            name='Date',
        ),
        migrations.RemoveField(
            model_name='paymentdetails',
            name='Date',
        ),
    ]
