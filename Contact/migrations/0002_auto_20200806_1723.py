# Generated by Django 3.0.8 on 2020-08-06 16:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Contact', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='contact',
            old_name='Mesage',
            new_name='Message',
        ),
    ]
