FROM node:16-alpine as build
WORKDIR  '/app'
COPY package.json .
RUN npm install
COPY . .

FROM node:12-alpine 
WORKDIR  '/app'
COPY --from=build /app /app
CMD ["npm","run", "start:prod"]