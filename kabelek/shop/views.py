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
    if request.user.is_authenticated:
        customer = request.user.customer
        order, created = Order.objects.get_or_create(customer=customer, complete=False)
        product = order.orderitem_set.all()
    else:
        product = []
        order = {'get_cart_total': 0, 'get_cart_items': 0}

    context = {'items': product, 'order': order}
    return render(request, 'shop/cart.html', context)

def ordering(request):
    context = {}
    return render(request, 'shop/ordering.html', context)
# Create your views here.
