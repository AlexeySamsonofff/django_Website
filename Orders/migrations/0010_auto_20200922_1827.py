# Generated by Django 3.1.1 on 2020-09-22 17:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Orders', '0009_auto_20200921_1832'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='orderitems',
            name='OrderEffect',
        ),
        migrations.RemoveField(
            model_name='orderitems',
            name='OrderProof',
        ),
        migrations.RemoveField(
            model_name='orderitems',
            name='OrderType',
        ),
    ]
