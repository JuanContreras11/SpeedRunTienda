# Generated by Django 4.0.5 on 2022-07-03 23:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0006_alter_zapatilla_precio'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='empleados',
            new_name='Personal',
        ),
        migrations.RenameField(
            model_name='personal',
            old_name='idEmpleado',
            new_name='idPersona',
        ),
    ]