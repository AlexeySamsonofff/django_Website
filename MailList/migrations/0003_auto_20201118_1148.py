# Generated by Django 3.1.1 on 2020-11-18 11:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MailList', '0002_remove_mailinglist_orderno'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mailinglist',
            name='Email',
            field=models.CharField(max_length=400),
        ),
    ]