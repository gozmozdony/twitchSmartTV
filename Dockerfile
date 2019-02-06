FROM ubuntu
MAINTAINER Victor Bocharsky <bocharsky.bw@gmail.com>

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN apt-get update
RUN apt-get -y install software-properties-common
RUN add-apt-repository ppa:nilarimogard/webupd8
RUN apt-get update
RUN apt-get -y install nginx php7.2 php7.2-fpm php-intl streamlink
RUN echo "\ndaemon off;" >> /etc/nginx/nginx.conf
RUN sed -i -e "s/;\?daemonize\s*=\s*yes/daemonize = no/g" /etc/php/7.2/fpm/php-fpm.conf

# Nginx config
RUN rm /etc/nginx/sites-enabled/default
ADD ./streamlink/streamlink.conf /etc/nginx/sites-enabled/
ADD ./streamlink/index.php /var/www/

# PHP config
RUN sed -i -e "s/;\?date.timezone\s*=\s*.*/date.timezone = Europe\/Budapest/g" /etc/php/7.2/fpm/php.ini

# Define default command.
CMD service php7.2-fpm start && nginx

# Expose ports.
EXPOSE 80