# Builder
FROM node:20 AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build --prod

# Serve
FROM nginx:alpine
COPY --from=builder /app/dist/<nombre-app> /usr/share/nginx/html

# Custom nginx
# COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
