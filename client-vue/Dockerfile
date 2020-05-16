FROM node:14.2.0-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json /usr/src/app/package.json

COPY package-lock.json /usr/src/app/package-lock.json

RUN npm install

RUN npm install -g @vue/cli@4.2.3

COPY . /usr/src/app