#aqui es para realizar una plantilla de nuestros formularios
from django import forms
from .models import zapatilla

class zapatillaForm(forms.ModelForm):
    class Meta:
        model = zapatilla
        fields = '__all__'