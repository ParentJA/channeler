# Django imports.
from django.contrib import admin
from django.urls import include, path
from django.views.generic import TemplateView

__author__ = 'Jason Parent'

urlpatterns = [
    path('admin/', admin.site.urls),
    path('notifications/', include(('notifications.urls', 'notifications'))),
    path('tasks/', include(('tasks.urls', 'tasks'))),
    path('', TemplateView.as_view(template_name='index.html')),
]
