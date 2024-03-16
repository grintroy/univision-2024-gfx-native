from rest_framework import serializers
from .models import *


SERIALIZER_FIELDS = ["pk", "slug", "primary", "secondary"]


class EmptySecondaryMixin(serializers.ModelSerializer):
    secondary = serializers.SerializerMethodField()

    def get_secondary(self, obj):
        return None


class TitleSerializer(EmptySecondaryMixin, serializers.ModelSerializer):
    primary = serializers.CharField(source="contents")

    class Meta:
        fields = SERIALIZER_FIELDS
        model = Title


class PersonSerializer(serializers.ModelSerializer):
    primary = serializers.CharField(source="display_name")

    class Meta:
        abstract = True


class GenericPersonSerializer(PersonSerializer):
    secondary = serializers.CharField(source="role")

    class Meta:
        fields = SERIALIZER_FIELDS
        model = GenericPerson


class UniPersonSerializer(GenericPersonSerializer):
    secondary = serializers.CharField(source="university")

    class Meta:
        fields = SERIALIZER_FIELDS
        model = UniPerson


class PerformerSerializer(UniPersonSerializer):
    class Meta:
        fields = SERIALIZER_FIELDS
        model = Performer


class JudgeSerializer(UniPersonSerializer):
    class Meta:
        fields = SERIALIZER_FIELDS
        model = Judge


class SongSerializer(EmptySecondaryMixin, serializers.ModelSerializer):
    primary = serializers.CharField(source="performer.display_name")
    secondary = serializers.CharField(source="name")

    class Meta:
        fields = SERIALIZER_FIELDS
        model = Song
