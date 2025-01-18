from django.shortcuts import render
from django.http import HttpResponse

def printsample(request):
    return HttpResponse("Hello world!")

def product1(request):
    return HttpResponse("Product 1")

def product2(request):
    return HttpResponse("Product 2")