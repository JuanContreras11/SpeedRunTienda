from django.urls import path
from . import views  #importa todas las vistas en views.py
from .views import index, login, contacto, gestion, error

#importamos las vistas e indicamos como se visualizaran en el sitio
urlpatterns =[
    #vistas principales
    path('', index, name='index'),
    path('login/', login, name='login'),
    path('contacto/', contacto, name='contacto'),
    path('gestion/', gestion, name='gestion'),
    path('error/', error, name='error'),

    #vistas CRUD  inventario
    path('inventario/', views.inventario, name='inventario'),
    path('inventario/agregar', views.agregarInventario, name='agregarInventario'),
    path('inventario/editar', views.editarInventario, name='editarInventario'),
    path('inventario/eliminar/<int:id>', views.eliminarInventario, name='eliminarinventario'),
    path('inventario/editar/<int:id>', views.editarInventario, name='editarinventario'),

    #vistas CRUD  Personal
    path('personal/', views.personal, name='personal'),
    path('personal/agregar', views.agregarPersonal, name='agregarPersonal'),
    path('personal/editar', views.editarPersonal, name='editarPersonal'),
    path('personal/remover/<int:id>', views.removerPersonal, name='removerPersonal'),
    path('personal/editar/<int:id>', views.editarPersonal, name='editarPersonal'),

    #vistas páginas del catálogo
    path('estilo/page01', views.page01, name='page01'),
    path('estilo/page02', views.page02, name='page02'),
    path('estilo/page03', views.page03, name='page03'),
    path('estilo/page04', views.page04, name='page04'),
    path('estilo/page05', views.page05, name='page05'),
    path('estilo/page06', views.page06, name='page06'),
    path('estilo/page07', views.page07, name='page07'),
    path('estilo/page08', views.page08, name='page08'),
    path('estilo/page09', views.page09, name='page09'),
    path('estilo/page10', views.page10, name='page10'),
    path('estilo/page11', views.page11, name='page11'),
    path('estilo/page12', views.page12, name='page12'),
    path('estilo/page13', views.page13, name='page13'),

]