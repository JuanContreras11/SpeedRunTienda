from django.urls import path
from . import views  #importa todas las vistas en views.py
from .views import index, login, contacto

#importamos las vistas e indicamos como se visualizaran en el sitio
urlpatterns =[
    path('', index, name='index'),
    path('login/', login, name='login'),
    path('contacto/', contacto, name='contacto'),
    path('inventario/', views.inventario, name='inventario'),
    path('inventario/agregar', views.agregarInventario, name='agregarInventario'),
    path('inventario/editar', views.editarInventario, name='editarInventario'),
    path('eliminarinventario/<int:id>', views.eliminarInventario, name='eliminarinventario'),
    path('inventario/editar/<int:id>', views.editarInventario, name='editarinventario'),
    path('rrhh/', views.personal, name='personal'),
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
    path('zapatillas/', views.page01, name='page12')
]