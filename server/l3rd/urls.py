from django.urls import include, path

from .views import EntityViewSet


urlpatterns = [
    path(
        "api/<str:type>/<slug:slug>/",
        EntityViewSet.as_view({"get": "retrieve"}),
        name="entity-detail",
    ),
]
