FROM node:12

ARG label_sha
LABEL "stage"="intermediate-${label_sha}"
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

CMD [ "npm", "run", "start:prod" ]