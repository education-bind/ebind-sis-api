FROM node:16-alpine as build
WORKDIR  '/app'
COPY package.json .
RUN npm install
COPY . .

FROM alpine:3.12
WORKDIR  '/app'
COPY --from=build /app /app
CMD ["npm","run", "start"]