# Generated by Django 4.0.5 on 2022-07-03 16:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0004_zapatilla_genero'),
    ]

    operations = [
        migrations.AlterField(
            model_name='zapatilla',
            name='talla',
            field=models.CharField(max_length=30, verbose_name='Tallas'),
        ),
    ]
