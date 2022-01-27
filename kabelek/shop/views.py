from django.shortcuts import render
from django.http import JsonResponse
from django.core import serializers

import json
from .models import *


def itemsList(request):

    allItems = items.objects.all()
    context = {'allItems': allItems}

    return render(request, 'shop/itemsList.html', context)


def shop(request):
    allItems = items.objects.all()

    serializers.serialize('json',allItems);
    context = {'allItems': allItems}
    return render(request, 'shop/shop.html', context)


def cart(request):
    if request.user.is_authenticated:
        customer = request.user.customer
        order, created = Order.objects.get_or_create(customer=customer, complete=False)
        items = order.orderitem_set.all()
    else:
        items = []
        order = {'get_cart_total': 0, 'get_cart_items': 0}

    context = {'items': items, 'order': order}
    return render(request, 'shop/cart.html', context)


def ordering(request):
    if request.user.is_authenticated:
        customer = request.user.customer
        order, created = Order.objects.get_or_create(customer=customer, complete=False)
        items = order.orderitem_set.all()
    else:
        items = []
        order = {'get_cart_total': 0, 'get_cart_items': 0}

    context = {'items': items, 'order': order}
    return render(request, 'shop/ordering.html', context)


def updateItem(request):
    data =json.loads(request.body)
    itemId = data['itemId']
    action = data['action']
    print(action)
    print(itemId)
    return JsonResponse('Przedmiot zostal dodany', safe=False)
