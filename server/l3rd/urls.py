from django.urls import include, path

from .views import GenericEntityViewSet


urlpatterns = [
    path(
        "api/<str:model>/<slug:slug>/",
        GenericEntityViewSet.as_view({"get": "retrieve"}),
        name="entity-detail",
    ),
]
