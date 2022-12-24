FROM node:14

EXPOSE 8085

WORKDIR /src

RUN nom install i npm@latest -g

COPY package.json package-lock*.json ./

RUN npm install

COPY . .

CMD [ "node","app/index.js" ]

