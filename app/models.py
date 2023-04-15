from django.db import models


# Create your models here.
class Medico(models.Model):
    CodMed = models.CharField(max_length=7,auto_created=True, primary_key=True,)
    NomeMed = models.CharField(max_length=40)
    Genero = models.CharField(max_length=1)
    Telefone = models.CharField(max_length=16)
    Email = models.CharField(max_length=40)
    CodEspec = models.CharField(max_length=7)
