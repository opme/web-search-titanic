from django.urls import path, include, re_path
from django.contrib import admin
from django.conf.urls.i18n import i18n_patterns
from django.views.i18n import JavaScriptCatalog

from backend.version import version

urlpatterns = [
    path('', include('frontend.urls')), 
    path('admin', admin.site.urls),
    path('api/auth/', include('backend.users.urls')),
    path('api/search/', include('backend.search.urls')),
    path('api/sources/', include('backend.sources.urls')),
    path('api/version', version),
    path('i18n/', include('django.conf.urls.i18n')),
    re_path(r'^(?:.*)/?', include('frontend.urls')),
]
urlpatterns += i18n_patterns(
    # Put translatable views here
    path('', views.index),
    # Needed for translations in Javascript
    path('jsi18n/', JavaScriptCatalog.as_view(), name='javascript-catalog'),
)
