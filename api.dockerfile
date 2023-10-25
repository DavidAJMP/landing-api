FROM node:18-alpine as packages

WORKDIR /api
COPY package*.json ./

FROM packages as development
RUN apk add \
	curl \
	g++ \
	make \
	python3

COPY . .

RUN npm install

RUN rm -rf built && npx tsc 

EXPOSE 7070

CMD [ "node", "./built/server.js" ]