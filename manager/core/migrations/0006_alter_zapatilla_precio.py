# Generated by Django 4.0.5 on 2022-07-03 16:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0005_alter_zapatilla_talla'),
    ]

    operations = [
        migrations.AlterField(
            model_name='zapatilla',
            name='precio',
            field=models.IntegerField(verbose_name='Precio US$'),
        ),
    ]
