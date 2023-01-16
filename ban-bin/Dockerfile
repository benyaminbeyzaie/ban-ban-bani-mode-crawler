FROM node:19.4.0-alpine
RUN mkdir -p /usr/src/ban-bin
WORKDIR /usr/src/ban-bin
COPY package.json /usr/src/ban-bin
RUN npm install
COPY . /usr/src/ban-bin
EXPOSE 7500
CMD ["node", "server.js"]