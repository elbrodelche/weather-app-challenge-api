FROM node:10.15.3-alpine

WORKDIR /home/node/app
ADD . ./
RUN npm i

USER node
