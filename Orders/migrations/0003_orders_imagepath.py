# Generated by Django 3.0.8 on 2020-08-06 16:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Orders', '0002_ordernumber'),
    ]

    operations = [
        migrations.AddField(
            model_name='orders',
            name='ImagePath',
            field=models.ImageField(default='media/default.png', upload_to='images'),
        ),
    ]