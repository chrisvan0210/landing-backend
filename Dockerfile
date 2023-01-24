# syntax=docker/dockerfile:1
FROM node:18-alpine
WORKDIR /app
COPY package.json /app
RUN yarn install --production
COPY . /app 
EXPOSE 8080
CMD ["node", "server.js"]