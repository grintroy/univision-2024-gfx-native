from rest_framework import permissions, viewsets
from django.contrib.contenttypes.models import ContentType
from rest_framework import permissions, viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import status


from .serializers import *
from .models import *


class EntityViewSet(viewsets.ViewSet):
    def list(self, request):
        return Response(
            {"detail": "Method not allowed."}, status=status.HTTP_405_METHOD_NOT_ALLOWED
        )

    def retrieve(self, request, slug=None, type=None):
        slug = slug.lower()
        type = type

        model = globals()[type]
        print(slug, type, model)

        try:
            instance = model.objects.get(slug=slug)
        except model.DoesNotExist:
            return Response({"detail": "Not found."}, status=status.HTTP_404_NOT_FOUND)

        model = instance.__class__
        serializer_class = globals()[f"{model.__name__}Serializer"]

        serializer = serializer_class(instance)
        return Response(serializer.data)
