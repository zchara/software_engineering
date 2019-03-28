FROM node:latest

RUN mkdir -p /usr/src/app_frontend
WORKDIR /usr/src/app_frontend
COPY package.json /usr/src/app_frontend/
RUN npm install
COPY . /usr/src/app_frontend

CMD ["node", "app.js"]