FROM node:24 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build-prod


FROM nginx:alpine
EXPOSE 80
COPY --from=builder /app/dist/teslo-shop/browser /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
CMD [ "nginx","-g","daemon off;"]
