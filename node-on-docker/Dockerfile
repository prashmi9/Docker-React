FROM node:6.3.1

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
ENV PORT=8080

RUN node web-server.js

EXPOSE 8080