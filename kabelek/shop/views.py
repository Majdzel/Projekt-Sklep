from django.shortcuts import render
from .models import *

def itemsList(request):

    allItems = items.objects.all()
    context = {'allItems': allItems}

    return render(request, 'shop/itemsList.html', context)

def shop(request):
    allItems = items.objects.all()
    context = {'allItems': allItems}
    return render(request, 'shop/shop.html', context)

def cart(request):
    context = {}
    return render(request, 'shop/cart.html', context)

def ordering(request):
    context = {}
    return render(request, 'shop/ordering.html', context)
# Create your views here.
