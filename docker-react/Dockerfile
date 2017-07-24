FROM bayesimpact/react-base

COPY . /var/www/html
EXPOSE 80

WORKDIR /var/www/html
ADD package.json /var/www/html
RUN npm install
