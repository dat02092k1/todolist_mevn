FROM node:16 
# Sets the base image to node:16.13.1
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["node", "index.js"]

