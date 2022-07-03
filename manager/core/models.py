from django.db import models

# Modelo para zapatillas
class zapatilla(models.Model):
    idZapatilla = models.IntegerField(primary_key=True, verbose_name='ID zapatilla')
    modelo = models.CharField(max_length=30, verbose_name='Modelo')
    talla = models.CharField(max_length=30, verbose_name='Tallas')
    precio = models.IntegerField(verbose_name='Precio US$')
    color = models.CharField(max_length=30,verbose_name='Color')
    genero = models.CharField(max_length=30,verbose_name='Genero', null=True)

    #descripcion personalizada
    def __str__(self):
        fila = "Modelo: " + self.modelo+ " / " + "Talla: " + self.talla +" / " + " Color: " + self.color + " / " + "Genero: " + self.genero 
        return fila

#Modelo para empleados
class empleados(models.Model):
    idEmpleado = models.IntegerField(primary_key=True, verbose_name='ID Persona')
    rut = models.CharField(max_length=11, unique=True, verbose_name='Rut')
    nombre = models.CharField(max_length=60, verbose_name='Nombres')
    apellidoP = models.CharField(max_length=60, verbose_name='Apellido paterno', null=True)
    apellidoM = models.CharField(max_length=60, verbose_name='Apellido materno', null=True)
    fechaNacimiento = models.DateField(verbose_name='Fecha de nacimiento')
    direccion = models.CharField(max_length=50, verbose_name='Dirección', null=True)
    comuna = models.CharField(max_length=50, verbose_name='Comuna', null=True)
    telefono = models.CharField(max_length=50, verbose_name='Telefono')

#Modelo sucural
class sucursal(models.Model):
    idEmpleado = models.IntegerField(primary_key=True, verbose_name='ID Sucursal')
    direccion = models.CharField(max_length=60, verbose_name='Direccion', null=True)
    comuna = models.CharField(max_length=50, verbose_name='Comuna', null=True)