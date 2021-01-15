"""
Django settings for CanvasStudioWebsite project.

Generated by 'django-admin startproject' using Django 3.0.8.

For more information on this file, see
https://docs.djangoproject.com/en/3.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/3.0/ref/settings/
"""

import os

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '46dpt%*rlt@g1ha=7+^+*peh=mk@k59^7r^wge*z9640uw#_)g'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'import_export',
    'website',
    'SizesAndPrices',
    'Orders',
    'ImageCustomise',
    'Messaging',
    'FAQ',
    'Contact',
    'Registration',
    'ImageUpload',
    'ShoppingCart',
    'paypal.standard.ipn',
    'Coupons',
    'Payment',
    'TermsandConditions',
    'PrivacyPolicy',
    'SocialMedia',
    'Shipping',
    'MailList',
    'Collections',
    'Administration',

    # Third-Party Apps
    'rest_framework',
    'rest_framework.authtoken',
]

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.TokenAuthentication',  # <-- And here
    ],
}

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django_session_timeout.middleware.SessionTimeoutMiddleware',
    'django.middleware.common.CommonMiddleware',
    #'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'CanvasStudioWebsite.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'ShoppingCart.context_processors.cart',
            ],
        },
    },
]

WSGI_APPLICATION = 'CanvasStudioWebsite.wsgi.application'


# Database
# https://docs.djangoproject.com/en/3.0/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    },
    #'default': {
        # MySQL database engine class.
        #'ENGINE': 'django.db.backends.mysql',
        # MySQL database host ip.
        #'HOST': 'database.webteck.co.uk',
        # port number.
        #'PORT': '3306',
        # database name.
        #'NAME': 'canvas_print_studio',
        # user name.
        #'USER': 'benosborne',
        # password
        #'PASSWORD': 'Gu1nne55',
        # connect options
        #'OPTIONS': {'init_command': "SET sql_mode='STRICT_TRANS_TABLES'",},
    #}
}


# Password validation
# https://docs.djangoproject.com/en/3.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/3.0/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.0/howto/static-files/

STATIC_URL = '/static/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'Media')
MEDIA_URL = '/Media/'
IMGP_URL = os.path.join(BASE_DIR, 'Media')

CART_SESSION_ID = 'cart'

# django-paypal settings
PAYPAL_RECEIVER_EMAIL = 'design@thecanvasprintstudio.co.uk'
PAYPAL_TEST = True

SESSION_EXPIRE_SECONDS = 10000

EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.office365.com'
EMAIL_HOST_USER = 'design@thecanvasprintstudio.co.uk'
EMAIL_HOST_PASSWORD = 'Th3C4nv4s'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
DEFAULT_FROM_EMAIL = 'design@thecanvasprintstudio.co.uk'
SERVER_EMAIL  = 'design@thecanvasprintstudio.co.uk'

IMPORT_EXPORT_USE_TRANSACTIONS = True