FROM node:erbium
WORKDIR /app
COPY src src
WORKDIR /app/src/app-typescript
RUN npm install
RUN npm run build
RUN node .

FROM node:erbium
WORKDIR /app
COPY src src
WORKDIR /app/src/app-javascript-esm
RUN npm install
RUN node .

FROM node:dubnium
WORKDIR /app
COPY src src
WORKDIR /app/src/app-javascript-commonjs
RUN npm install
RUN node .