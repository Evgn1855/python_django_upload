from django.urls import path
from . import views
from django.conf.urls.static import static  # new
from django.conf import settings  # new
app_name = 'pdf'
urlpatterns = [
    path('', views.index, name='index'),
    path('onlypdfs', views.pdf_view, name='pdf'),
    # path('', views.pdf_view, name='pdf_view'),
    # path('', views.HomePageView.as_view(), name='home'),
]

if settings.DEBUG:  # new
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
