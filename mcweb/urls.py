from django.urls import path, include, re_path
from django.contrib import admin
from backend.version import version
from django.views.i18n import JavaScriptCatalog

urlpatterns = [
    path('', include('frontend.urls')), 
    path('i18n/', include('django.conf.urls.i18n')),
    path('admin', admin.site.urls),
    path('api/auth/', include('backend.users.urls')),
    path('api/search/', include('backend.search.urls')),
    path('api/sources/', include('backend.sources.urls')),
    path('api/version', version),
    re_path(r'^(?:.*)/?', include('frontend.urls')),
]
