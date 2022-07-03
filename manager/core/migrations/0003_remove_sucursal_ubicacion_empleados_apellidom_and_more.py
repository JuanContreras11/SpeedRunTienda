# Generated by Django 4.0.5 on 2022-07-03 15:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_sucursal'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='sucursal',
            name='ubicacion',
        ),
        migrations.AddField(
            model_name='empleados',
            name='apellidoM',
            field=models.CharField(max_length=60, null=True, verbose_name='Apellido materno'),
        ),
        migrations.AddField(
            model_name='empleados',
            name='apellidoP',
            field=models.CharField(max_length=60, null=True, verbose_name='Apellido paterno'),
        ),
        migrations.AddField(
            model_name='empleados',
            name='comuna',
            field=models.CharField(max_length=50, null=True, verbose_name='Comuna'),
        ),
        migrations.AddField(
            model_name='sucursal',
            name='comuna',
            field=models.CharField(max_length=50, null=True, verbose_name='Comuna'),
        ),
        migrations.AddField(
            model_name='sucursal',
            name='direccion',
            field=models.CharField(max_length=60, null=True, verbose_name='Direccion'),
        ),
        migrations.AlterField(
            model_name='empleados',
            name='direccion',
            field=models.CharField(max_length=50, null=True, verbose_name='Dirección'),
        ),
        migrations.AlterField(
            model_name='empleados',
            name='idEmpleado',
            field=models.IntegerField(primary_key=True, serialize=False, verbose_name='ID Persona'),
        ),
        migrations.AlterField(
            model_name='empleados',
            name='nombre',
            field=models.CharField(max_length=60, verbose_name='Nombres'),
        ),
        migrations.AlterField(
            model_name='empleados',
            name='rut',
            field=models.CharField(max_length=11, unique=True, verbose_name='Rut'),
        ),
        migrations.AlterField(
            model_name='empleados',
            name='telefono',
            field=models.CharField(max_length=50, verbose_name='Telefono'),
        ),
        migrations.AlterField(
            model_name='zapatilla',
            name='color',
            field=models.CharField(max_length=30, verbose_name='Color'),
        ),
        migrations.AlterField(
            model_name='zapatilla',
            name='modelo',
            field=models.CharField(max_length=30, verbose_name='Modelo'),
        ),
        migrations.AlterField(
            model_name='zapatilla',
            name='precio',
            field=models.IntegerField(verbose_name='Precio'),
        ),
        migrations.AlterField(
            model_name='zapatilla',
            name='talla',
            field=models.IntegerField(verbose_name='Talla'),
        ),
    ]