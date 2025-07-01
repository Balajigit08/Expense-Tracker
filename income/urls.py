from django.urls import path
from . import views
from django.views.decorators.csrf import csrf_exempt



urlpatterns = [
    path('', views.index, name="incomes"),
    path('add-income/', views.add_income, name="add-income"),
    path('edit-income/<int:id>/', views.edit_income, name="edit-income"),
    path('delete-income/<int:id>/', views.delete_income, name="delete-income"),
   
    path('income_stats_view/', views.income_stats_view, name="income_stats_view"),
    path('search-incomes/', csrf_exempt(views.search_incomes), name="search-incomes"),
    path('income_chart_image/', views.income_chart_image, name='income_chart_image'),
]
