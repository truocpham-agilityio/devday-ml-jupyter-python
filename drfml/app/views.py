import os
import pickle
import numpy as np
import pandas as pd
from sklearn import datasets
from django.conf import settings
from rest_framework import viewsets
from rest_framework import status
from rest_framework.response import Response
from app.serializers import HouseSerializer
from app.models import House


class PredictViewSet(viewsets.ModelViewSet):

    serializer_class = HouseSerializer
    queryset = House.objects.all()

    def post(self, request):
        predictions = []

        for entry in request.data:
            model_name = entry.pop('model_name')
            path = os.path.join(settings.MODEL_ROOT, model_name)

            with open(path, 'rb') as file:
                model = pickle.load(file)
            try:
                result = model.predict(pd.DataFrame([entry]))
                predictions.append(result[0])

            except Exception as err:
                return Response(str(err), status=status.HTTP_400_BAD_REQUEST)

        return Response(predictions, status=status.HTTP_200_OK)
