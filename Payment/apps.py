from django.apps import AppConfig


class PaymentConfig(AppConfig):
    name = 'Payment'
    verbose_name = 'Payment'

    def ready(self):
        # import signal handlers
        import Payment.signals