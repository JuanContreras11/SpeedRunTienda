from django.db import models

# Modelo para zapatillas
class zapatilla(models.Model):
    idZapatilla = models.IntegerField(primary_key=True, verbose_name='ID zapatilla')
    modelo = models.CharField(max_length=30)
    talla = models.IntegerField()
    precio = models.IntegerField()
    color = models.CharField(max_length=30)

    def _str_(self):
        return self.modelo

#Modelo para empleados
class empleados(models.Model):
    idEmpleado = models.IntegerField(primary_key=True, verbose_name='ID Empleado')
    rut = models.CharField(max_length=11, unique=True)
    nombre = models.CharField(max_length=60)
    fechaNacimiento = models.DateField(verbose_name='Fecha de nacimiento')
    direccion = models.CharField(max_length=50)
    telefono = models.CharField(max_length=50)

class sucursal(models.Model):
    idEmpleado = models.IntegerField(primary_key=True, verbose_name='ID Sucursal')
    ubicacion = models.CharField(max_length=60)