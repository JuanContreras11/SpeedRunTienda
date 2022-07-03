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
