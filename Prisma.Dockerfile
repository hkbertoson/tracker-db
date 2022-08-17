FROM node:16-slim

RUN apt-get update
RUN apt-get install -y openssl

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/
# COPY *.lock ./
COPY .env ./
# COPY tsconfig.json ./
COPY . . 


RUN npm install
RUN npm run build
RUN npx prisma generate

EXPOSE 8080

CMD ["npm", "start"]