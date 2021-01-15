# Generated by Django 3.0.8 on 2020-07-22 19:48

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Name', models.CharField(max_length=100)),
                ('Email', models.CharField(max_length=100)),
                ('Phone', models.CharField(max_length=100)),
                ('Subject', models.CharField(max_length=100)),
                ('Mesage', models.TextField()),
                ('Date', models.DateField()),
                ('Time', models.TimeField()),
            ],
        ),
    ]