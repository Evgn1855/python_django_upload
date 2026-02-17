from django.urls import path
# from django.urls import re_path as url
from . import views
from django.conf.urls.static import static  # new
from django.conf import settings  # new
app_name = 'pdf'
urlpatterns = [
    path('', views.index, name='index'),
    # path("name/<int:pdf_id>",
    #      views.pdf_view1, name='pdf'),

    # http://127.0.0.1:8001/pdf/test
    path('pdf_view', views.test, name='pdf_view'),
    path('pdf_view1/<int:pdf_id>', views.pdf_view1, name='pdf'),
    #     path('', views.pdf_view1, name='pdf'), url(
    #         r'^pdf', views.pdf_view1, name='pdf'),
]

if settings.DEBUG:  # new
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
