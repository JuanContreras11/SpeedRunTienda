from django.urls import path
from . import views
from .views import index, login, contacto, page01

urlpatterns =[
    path('', index, name='index'),
    path('login/', login, name='login'),
    path('contacto/', contacto, name='contacto'),
    path('zapatillas/', views.page01, name='page01'),
    path('zapatillas/', views.page01, name='page02'),
    path('zapatillas/', views.page01, name='page03'),
    path('zapatillas/', views.page01, name='page04'),
    path('zapatillas/', views.page01, name='page05'),
    path('zapatillas/', views.page01, name='page06'),
    path('zapatillas/', views.page01, name='page07'),
    path('zapatillas/', views.page01, name='page08'),
    path('zapatillas/', views.page01, name='page09'),
    path('zapatillas/', views.page01, name='page10'),
    path('zapatillas/', views.page01, name='page11'),
    path('zapatillas/', views.page01, name='page12'),
]