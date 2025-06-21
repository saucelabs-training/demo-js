FROM node:22
WORKDIR /demo-js
COPY . /demo-js
RUN npm install
EXPOSE 8081