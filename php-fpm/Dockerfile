
FROM php:7.4-fpm

WORKDIR "/app"

RUN apt-get update && apt-get upgrade -y \
    && apt-get install -y libcurl4-openssl-dev pkg-config libssl-dev zlib1g-dev \
    libzip-dev libpng-dev libonig-dev libgmp-dev libmagickwand-dev libmemcached-dev;

RUN docker-php-ext-install zip gd calendar mbstring curl gmp;

RUN pecl install imagick && docker-php-ext-enable imagick \
    && pecl install apcu && docker-php-ext-enable apcu \
    && pecl install memcached && docker-php-ext-enable memcached \
    && pecl install mongodb \
    && echo "extension=mongodb.so" > /usr/local/etc/php/conf.d/mongodb.ini \
    && pecl install -f xdebug \
    && echo "zend_extension=$(find /usr/local/lib/php/extensions/ -name xdebug.so)" \
        > /usr/local/etc/php/conf.d/xdebug.ini;

RUN echo "xdebug.default_enable=1" >> /usr/local/etc/php/conf.d/xdebug.ini \
    && echo "xdebug.remote_enable=1" >> /usr/local/etc/php/conf.d/xdebug.ini \
    && echo "xdebug.remote_autostart=1" >> /usr/local/etc/php/conf.d/xdebug.ini \
    && echo "xdebug.remote_port=9001" >> /usr/local/etc/php/conf.d/xdebug.ini \
    && echo "xdebug.remote_host=10.5.0.1" >> /usr/local/etc/php/conf.d/xdebug.ini \
    && echo "xdebug.remote_connect_back=1" >> /usr/local/etc/php/conf.d/xdebug.ini;