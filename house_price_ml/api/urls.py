from api.views import Predict
from django.conf.urls import url

app_name = 'api'

urlpatterns = [
    url(r'^predict/$', Predict.as_view(), name="predict"),
]
