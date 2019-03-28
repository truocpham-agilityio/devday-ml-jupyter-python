from app.views import Predict
from django.conf.urls import url

app_name = 'app'

urlpatterns = [
    url(r'^predict/$', Predict.as_view(), name='predict'),
]
