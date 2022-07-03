from django.shortcuts import render, redirect
from django.http import HttpResponse

#indicamos desde que modelos recibiremos la informacion
from .models import zapatilla
from .forms import zapatillaForm

# Definimos las vistas y su ubicacion

def index(request):
    return render(request, 'index.html')

def login(request):
    return render(request, 'login.html')

def contacto(request):
    return render(request, 'contacto.html')

def inventario(request):
    zapatillas = zapatilla.objects.all() #recibo en un objeto todos los atributos del modelo zapatilla
    return render(request, 'administracion/inventario.html', {'zapatillas': zapatillas}) # se le pasa el objeto a la variable en la vista

def agregarInventario(request):
    formulario = zapatillaForm(request.POST or None, request.FILES or None)
    if formulario.is_valid():
        formulario.save()
        return redirect('inventario')
    return render(request, 'administracion/agregarinventario.html', {'formulario': formulario})

def editarInventario(request, id):
    zapatillas = zapatilla.objects.get(idZapatilla=id) #consulta de la zapatilla por get
    formulario = zapatillaForm(request.POST or None, request.FILES or None, instance=zapatillas) #le damos el id al formulario
    if formulario.is_valid() and request.POST: 
        formulario.save()
        return redirect('inventario')
    return render(request, 'administracion/editarinventario.html', {'formulario': formulario})

def eliminarInventario(request, id): #se debe solicitar el id
    zapatillas = zapatilla.objects.get(idZapatilla=id)
    zapatillas.delete()
    return redirect('inventario')
        
def personal(request):
    return render(request, 'administracion/personal.html')

def page01(request):
    return render(request, 'html/1.html')

def page02(request):
    return render(request, 'html/2.html')

def page03(request):
    return render(request, 'html/3.html')

def page04(request):
    return render(request, 'html/4.html')

def page05(request):
    return render(request, 'html/5.html')

def page06(request):
    return render(request, 'html/6.html')

def page07(request):
    return render(request, 'html/7.html')

def page08(request):
    return render(request, 'html/8.html')

def page09(request):
    return render(request, 'html/9.html')

def page10(request):
    return render(request, 'html/10.html')

def page11(request):
    return render(request, 'html/11.html')

def page12(request):
    return render(request, 'html/12.html')