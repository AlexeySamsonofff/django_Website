# Generated by Django 3.1.1 on 2020-11-24 08:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Collections', '0003_auto_20201124_0807'),
    ]

    operations = [
        migrations.AddField(
            model_name='collections',
            name='ImageLrg',
            field=models.CharField(default=1, max_length=255),
            preserve_default=False,
        ),
    ]