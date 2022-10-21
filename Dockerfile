FROM node:16
WORKDIR /opt/app
COPY . .
RUN chown -R node:node /opt/app
USER node
COPY --chown=node:node package*.json ./
RUN npm ci
RUN npx prisma generate
RUN npm run build
CMD [ "npm", "run", "start" ]
EXPOSE 3000