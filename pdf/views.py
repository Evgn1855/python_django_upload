from django.shortcuts import render
from django.views.generic import ListView
from django.http import HttpResponse
from .models import FilePdf


# class HomePageView(ListView):
#     model = FilePdf
#     template_name = 'home.html'


def index(request):
    pdf_files = FilePdf.objects.all()
    return render(request, 'home.html', {'pdf_files': pdf_files})
# Create your views here.


# def pdf_view(request):
#     with open('\media\pdf_files\сертификат_гео5.pdf', 'r') as pdf:
#         response = HttpResponse(pdf.read(), mimetype='application/pdf')
#         response['Content-Disposition'] = 'inline;filename=some_file.pdf'
#         return response
