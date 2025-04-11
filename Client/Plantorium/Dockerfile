FROM node:18-alpine AS builder

WORKDIR /client
COPY .env .env.production

COPY package*.json ./
COPY tsconfig.json ./
COPY vite.config.ts ./

RUN npm install

COPY . . 

ENV NODE_OPTIONS=--max-old-space-size=2048
RUN npm run build -- --mode production

FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /client/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]