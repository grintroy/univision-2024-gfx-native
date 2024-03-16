from django.db import models
from django.contrib.contenttypes.models import ContentType


class Entity(models.Model):
    class Meta:
        abstract = True

    slug = models.SlugField(max_length=20)

    def __str__(self):
        return self.slug


class Title(Entity):
    contents = models.CharField(max_length=100)


class Person(Entity):
    class Meta:
        abstract = True

    display_name = models.CharField(max_length=100)


class GenericPerson(Person):
    role = models.CharField(max_length=100, blank=True, null=True)


class UniPerson(Person):
    class Meta:
        abstract = True

    university = models.CharField(max_length=100)


class Performer(UniPerson):
    pass


class Judge(UniPerson):
    pass


class Song(Entity):
    name = models.CharField(max_length=100)
    performer = models.OneToOneField(
        Performer, on_delete=models.CASCADE, related_name="song"
    )
