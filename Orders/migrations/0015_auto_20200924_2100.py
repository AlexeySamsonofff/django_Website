# Generated by Django 3.1.1 on 2020-09-24 20:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Orders', '0014_auto_20200924_2050'),
    ]

    operations = [
        migrations.RenameField(
            model_name='deliverydetails',
            old_name='dArea',
            new_name='Area',
        ),
        migrations.RenameField(
            model_name='deliverydetails',
            old_name='dFirstName',
            new_name='FirstName',
        ),
        migrations.RenameField(
            model_name='deliverydetails',
            old_name='dHouse',
            new_name='House',
        ),
        migrations.RenameField(
            model_name='deliverydetails',
            old_name='dLastName',
            new_name='LastName',
        ),
        migrations.RenameField(
            model_name='deliverydetails',
            old_name='dPostCode',
            new_name='PostCode',
        ),
        migrations.RenameField(
            model_name='deliverydetails',
            old_name='dStreet',
            new_name='Street',
        ),
        migrations.RenameField(
            model_name='deliverydetails',
            old_name='dTelephone',
            new_name='Telephone',
        ),
        migrations.RenameField(
            model_name='deliverydetails',
            old_name='dTown',
            new_name='Town',
        ),
        migrations.RenameField(
            model_name='paymentdetails',
            old_name='pArea',
            new_name='Area',
        ),
        migrations.RenameField(
            model_name='paymentdetails',
            old_name='pEmail',
            new_name='Email',
        ),
        migrations.RenameField(
            model_name='paymentdetails',
            old_name='pFirstName',
            new_name='FirstName',
        ),
        migrations.RenameField(
            model_name='paymentdetails',
            old_name='pHouse',
            new_name='House',
        ),
        migrations.RenameField(
            model_name='paymentdetails',
            old_name='pLastName',
            new_name='LastName',
        ),
        migrations.RenameField(
            model_name='paymentdetails',
            old_name='pPaymentType',
            new_name='PaymentType',
        ),
        migrations.RenameField(
            model_name='paymentdetails',
            old_name='pPostCode',
            new_name='PostCode',
        ),
        migrations.RenameField(
            model_name='paymentdetails',
            old_name='pStreet',
            new_name='Street',
        ),
        migrations.RenameField(
            model_name='paymentdetails',
            old_name='pTelephone',
            new_name='Telephone',
        ),
        migrations.RenameField(
            model_name='paymentdetails',
            old_name='pTown',
            new_name='Town',
        ),
    ]
