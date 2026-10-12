# Use an official PHP image
FROM php:8.0-apache

# Set working directory
WORKDIR /var/www/html

# Copy project files to the container
COPY . .

# Install dependencies
RUN apt-get update && apt-get install -y \
    libpng-dev \
    zlib1g-dev \
    libjpeg-dev \
    libfreetype6-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) gd

# Expose port 80
EXPOSE 80

# Start Apache
CMD ["apache2-foreground"]
