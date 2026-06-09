from django.db.models.signals import pre_save, post_delete
from django.dispatch import receiver

from .models import User


@receiver(pre_save, sender=User)
def delete_old_profile_image(sender, instance, **kwargs):
    if not instance.pk:
        return

    try:
        old_user = User.objects.get(pk=instance.pk)
    except User.DoesNotExist:
        return

    if old_user.profile_image and old_user.profile_image != instance.profile_image:
        old_user.profile_image.delete(save=False)


@receiver(post_delete, sender=User)
def delete_profile_image(sender, instance, **kwargs):
    if instance.profile_image:
        instance.profile_image.delete(save=False)
