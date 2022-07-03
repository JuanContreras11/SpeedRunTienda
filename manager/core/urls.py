from django.urls import path
from .views import index, login, contacto, page01

urlpatterns =[
    path('', index, name='index'),
    path('login/', login, name='login'),
    path('contacto/', contacto, name='contacto'),
    path('zapatillas/', page01, name='page01'),

]