# Generated by Django 3.1.1 on 2020-09-25 20:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Orders', '0020_auto_20200925_2116'),
    ]

    operations = [
        migrations.AddField(
            model_name='deliverydetails',
            name='Order',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='Orders.orders'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='orderitems',
            name='Order',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='Orders.orders'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='paymentdetails',
            name='Order',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='Orders.orders'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='deliverydetails',
            name='OrderNo',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='orderitems',
            name='OrderNo',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='paymentdetails',
            name='OrderNo',
            field=models.IntegerField(),
        ),
    ]