from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def index(request):
    return render(request, 'index.html')

def login(request):
    return render(request, 'login.html')

def contacto(request):
    return render(request, 'contacto.html')

def page01(request):
    return render(request, '1.html')