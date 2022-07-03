from django.urls import path
from .views import index, login, contacto

urlpatterns =[
    path('', index, name='index'),
    path('', login, name='login'),
    path('', contacto, name='login'),

]