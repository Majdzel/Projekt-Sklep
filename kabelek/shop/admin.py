from django.contrib import admin
from .models import *

admin.site.register(items)
admin.site.register(Customer)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(ShippingAddress)