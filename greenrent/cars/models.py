from django.db import models

class Car(models.Model):
    """
    Модель автомобиля для аренды
    """
    name = models.CharField("Название", max_length=100)
    image = models.ImageField("Фото", upload_to="cars/")
    engine = models.CharField("Двигатель", max_length=50)
    power = models.CharField("Мощность", max_length=50)
    transmission = models.CharField("Коробка передач", max_length=50)
    drive = models.CharField("Привод", max_length=50)
    fuel_consumption = models.CharField("Расход топлива", max_length=50)
    deposit = models.PositiveIntegerField("Залог")
    price_per_day = models.PositiveIntegerField("Цена за сутки")

    def __str__(self):
        return self.name
