from django.db import models
from django.contrib.auth import get_user_model

"""
    Django already provide us with a model which stores information about
    the user like Username, First Name, LastName,
    Email Address
    We shall Use those information here
"""
User = get_user_model()

class Profile(models.Model):
    ccupation       = models.CharField(max_length=20)
    nationality     = models.CharField(max_length=20)
    work_place      = models.CharField(max_length=20)


class Identification(models.Model):
    id_type   = models.CharField(max_length=20)
    id_number = models.CharField(max_length=30)
    address   = models.TextField()

