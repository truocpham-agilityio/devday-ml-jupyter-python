from app.views import PredictViewSet
from django.conf.urls import url

app_name = 'app'

urlpatterns = [
    url(r'^predict/$', PredictViewSet, name='predict'),
]
