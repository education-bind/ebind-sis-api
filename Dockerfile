FROM node:14.5.0-alpine as builder
WORKDIR  '/app'
COPY package.json .
RUN npm install
COPY . .

ENV NODE_ENV=production

USER node
WORKDIR /app

COPY --from=builder ./app .

EXPOSE 3000

CMD ["npm","run", "start"]