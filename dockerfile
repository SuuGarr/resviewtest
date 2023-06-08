FROM node:16.13.2
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm update
RUN npm install 
COPY . /usr/src/app
RUN npm run build
WORKDIR /usr/src/app
ENV PORT 8080
EXPOSE 8080
CMD node app.js

