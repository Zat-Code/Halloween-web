# étape de build
FROM node:16-alpine3.11 as build-stage
RUN echo "bonjour"
WORKDIR /app
COPY package*.json ./
RUN apk add --no-cache git
RUN yarn install
COPY . .
RUN yarn build

# étape de production
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
