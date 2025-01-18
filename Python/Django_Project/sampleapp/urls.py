from django.urls import path
from . import views

urlpatterns = [
    path('sample/', views.printsample, name='members'),
    path('sample/product1', views.product1, name='prod1'),
    path('sample/product2', views.product2, name='prod2')
]