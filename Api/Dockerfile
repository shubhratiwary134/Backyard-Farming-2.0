
FROM node:18

WORKDIR /api

COPY package*.json ./

RUN npm install

COPY . .

# converting the typescript code to js  
RUN npm run build

# running PORT for our backend 
EXPOSE 3000

CMD ["node", "dist/index.js"]