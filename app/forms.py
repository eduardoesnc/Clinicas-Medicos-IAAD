from django.forms import ModelForm
from app.models import Medico

# Create the form class.
class MedicoForm(ModelForm):
    class Meta:
        model = Medico
        fields = ['CodMed', 'NomeMed', 'Genero','Telefone', 'Email', 'CodEspec']