FROM node:10.17.0-alpine

RUN npm install -g yarn
RUN npm install -g pm2

RUN mkdir -p app
WORKDIR /app
COPY ./package.json .
RUN yarn install
COPY . .
RUN yarn build

EXPOSE 4000

CMD ["pm2-runtime", "start", "config/ecosystem.config.js"]