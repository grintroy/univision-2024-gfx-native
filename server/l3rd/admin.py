from django.contrib import admin

from .models import Title, GenericPerson, Performer, Judge, Song

admin.site.register(Title)
admin.site.register(GenericPerson)
admin.site.register(Performer)
admin.site.register(Judge)
admin.site.register(Song)
