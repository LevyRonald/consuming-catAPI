FROM node:16-alpine

WORKDIR /usr/cat-api-front/app

COPY . .

EXPOSE 8080