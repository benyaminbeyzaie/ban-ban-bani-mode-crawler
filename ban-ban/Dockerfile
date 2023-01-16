FROM node:19.4.0-alpine
RUN mkdir -p /usr/src/ban-ban
WORKDIR /usr/src/ban-bans
COPY package.json .
RUN npm i
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev"]