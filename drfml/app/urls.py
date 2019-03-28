from rest_framework import routers
from app.views import PredictViewSet

app_name = 'app'

df_router = routers.DefaultRouter()
df_router.register(prefix='predict', viewset=PredictViewSet)
urlpatterns = df_router.urls
