#aqui es para realizar una plantilla de nuestros formularios
from django import forms
from .models import zapatilla, Personal

class zapatillaForm(forms.ModelForm):
    class Meta:
        model = zapatilla
        fields = '__all__'

class PersonaForm(forms.ModelForm):
    class Meta:
        model = Personal
        fields = '__all__'