# Generated by Django 3.0.8 on 2020-07-15 13:14

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Email',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Subject', models.CharField(max_length=255)),
                ('Message', models.CharField(max_length=2000)),
                ('Name', models.CharField(max_length=100)),
                ('Email', models.CharField(max_length=255)),
                ('Telephone', models.CharField(max_length=50)),
                ('Date', models.DateField()),
                ('Time', models.TimeField()),
            ],
        ),
        migrations.CreateModel(
            name='Mailing',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Email', models.CharField(max_length=255)),
                ('Subscribe', models.IntegerField()),
                ('Date', models.DateField()),
                ('Time', models.TimeField()),
            ],
        ),
    ]
