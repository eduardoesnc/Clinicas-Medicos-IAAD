from django.shortcuts import render, redirect
from app.forms import MedicoForm
from app.models import Medico
from django.core.paginator import Paginator

# Create your views here.
def home(request):
    data = {}
    data['db'] = Medico.objects.all()
    return render(request, 'index.html', data)

def form(request):
    data = {}
    data['form'] = MedicoForm()
    return render(request, 'form.html',data)


def create(request):
    form = MedicoForm(request.POST or None)
    if form.is_valid():
        form.save()
        return redirect('home')


def view(request, pk):
    data = {}
    data['db'] = Medico.objects.get(pk=pk)
    return render(request, 'view.html', data)


def edit(request, pk):
    data = {}
    data['db'] = Medico.objects.get(pk=pk)
    data['form'] = MedicoForm(instance=data['db'])
    return render(request, 'form.html', data)


def update(request, pk):
    data = {}
    data['db'] = Medico.objects.get(pk=pk)
    form = MedicoForm(request.POST or None, instance=data['db'])
    if form.is_valid():
        form.save()
        return redirect('home')


def delete(request, pk):
    db = Medico.objects.get(pk=pk)
    db.delete()
    return redirect('home')
