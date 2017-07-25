
FROM node
RUN npm install webpack -g

WORKDIR /var/www/html
COPY package.json /var/www/html
RUN npm config set registry http://registry.npmjs.org/ && npm install

COPY . /var/www/html

ENV NODE_ENV=production 
ENV PORT=8080

CMD [ "/usr/local/bin/node", "./main.js" ]

EXPOSE 8080

CMD npm start




