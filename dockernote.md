# These are all commands line for docker

## httpd(Apache) config
docker run --rm -v /<pathHost>/:/<pathCotainer>/ <image> cat /usr/local/apache2/conf/httpd.conf > /<pathHost>/my-httpd.conf

- Example : docker run --rm -v /php/:/home/ httpd cat /usr/local/apache2/conf/httpd.conf > my-httpd.conf

## MySQL config
docker run --rm -v /<pathHost>/:/<pathCotainer>/ mysql cat /etc/my.cnf > ./<pathHost>/my.cnf

- Example : docker run --rm -v /db/:/home/ mysql cat /etc/my.cnf > ./dockers/my.cnf