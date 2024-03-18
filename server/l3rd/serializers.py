from rest_framework import serializers
from .models import *


class EntitySerializer(serializers.ModelSerializer):
    class Meta:
        abstract = True
        fields = ["pk", "slug", "primary", "secondary"]


class PersonSerializer(EntitySerializer):
    class Meta(EntitySerializer.Meta):
        model = Person


class PerformerSerializer(EntitySerializer):
    class Meta(EntitySerializer.Meta):
        model = Performer


class JudgeSerializer(EntitySerializer):
    class Meta(EntitySerializer.Meta):
        model = Judge


class TitleSerializer(EntitySerializer):
    class Meta(EntitySerializer.Meta):
        model = Title


class SongSerializer(EntitySerializer):
    primary = serializers.CharField(source="primary.primary")

    class Meta(EntitySerializer.Meta):
        model = Song
