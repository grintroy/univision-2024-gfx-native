from django.contrib import admin

from .models import Title, Person, Performer, Judge, Song

admin.site.register(Title)
admin.site.register(Person)
admin.site.register(Performer)
admin.site.register(Judge)
admin.site.register(Song)
