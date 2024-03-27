FROM node:20-alpine
LABEL maintainer "Dogkas Chile <contacto@dogkas.cl>"

RUN apk update && \
    apk add mysql-client

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

CMD [ "node", "server.js" ]
