from django.db import models


class Entity(models.Model):
    slug = models.SlugField(max_length=20)

    class Meta:
        abstract = True

    def __str__(self):
        return self.slug


class Person(Entity):
    primary = models.CharField(max_length=100, verbose_name="name")
    secondary = models.CharField(max_length=100, verbose_name="role")


class Performer(Entity):
    primary = models.CharField(max_length=100, verbose_name="name")
    secondary = models.CharField(max_length=100, verbose_name="university")

    def __str__(self):
        return self.primary


class Judge(Entity):
    primary = models.CharField(max_length=100, verbose_name="name")
    secondary = models.CharField(max_length=100, verbose_name="university")

    def __str__(self):
        return self.secondary


class Title(Entity):
    primary = models.CharField(max_length=100, verbose_name="title")
    secondary = models.CharField(max_length=100, default="", editable=False)


class Song(Entity):
    primary = models.OneToOneField(
        Performer,
        on_delete=models.CASCADE,
        related_name="song",
        verbose_name="performer",
    )
    secondary = models.CharField(max_length=100, verbose_name="name")

    def __str__(self):
        return f"{self.primary} - {self.secondary}"
