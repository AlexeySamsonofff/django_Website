# Generated by Django 3.1.1 on 2020-09-26 11:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Orders', '0023_auto_20200925_2149'),
    ]

    operations = [
        migrations.AddField(
            model_name='orderitems',
            name='OrderNotes',
            field=models.CharField(default=1, max_length=2000),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='orders',
            name='Proof',
            field=models.BooleanField(default=False),
        ),
    ]
