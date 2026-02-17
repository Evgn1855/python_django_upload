from django.shortcuts import render
# from django.views.generic import ListView
# from django.http import HttpResponse
from .models import FilePdf, OnlyPdf, BuiltInPdf
from django.http import FileResponse, Http404, HttpResponse
# from django.core.files.storage import FileSystemStorage
# class HomePageView(ListView):
#     model = FilePdf
#     template_name = 'home.html'


def index(request):
    pdf_files = FilePdf.objects.all()
    return render(request, 'home.html', {'pdf_files': pdf_files})
# Create your views here.


def test(request):
    example_pdf = BuiltInPdf.objects.all()
    return render(request, 'pdf_view.html', {'example_pdf': example_pdf})

# def pdf_view(request):
#     OnlyPdfs = OnlyPdf.objects.all()
#     return render(request, 'pdf_view.html', {'OnlyPdfs': OnlyPdfs})


def pdf_view1(request, pdf_id):
    try:
        # name = OnlyPdf.objects.get(
        #     file='pdf_files/сертификат_гео5_qUemU5o.pdf')
        name = OnlyPdf.objects.get(id=pdf_id)
        return FileResponse(open(f'.\media\{name.file}', 'rb'), content_type='application/pdf')
        # return HttpResponse(f"{name.file}")
    except FileNotFoundError:
        raise Http404()


# def pdf_view(request):
#     with open('\media\pdf_files\сертификат_гео5.pdf', 'r') as pdf:
#         response = HttpResponse(pdf.read(), mimetype='application/pdf')
#         response['Content-Disposition'] = 'inline;filename=some_file.pdf'
#         return response
