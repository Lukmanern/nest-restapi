FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./
# COPY ./node_modules ./

RUN npm install

COPY . /usr/src/app

# COPY ./src ./

COPY tsconfig.json ./

RUN npm run build

EXPOSE 3000
CMD [ "node", "dist/main" ]