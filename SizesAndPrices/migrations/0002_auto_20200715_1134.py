# Generated by Django 3.0.8 on 2020-07-15 10:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('SizesAndPrices', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sizesandstock',
            name='CM',
            field=models.FloatField(),
        ),
    ]