# express-es6-mongo-docker
Project CRUD with express(ES6), mongo and docker.

## Prerequisites
- [Node](https://nodejs.org/es/) (>= 8.9.0)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Pre Run
You have to build the docker images:
```
docker-compose build
```
* If you update: `Dockerfile`or `docker-compose.yml`yo have to rebuild.

## Run
```
npm run start
```

With [postman](https://www.getpostman.com/) view: `http://localhost:3000/users`
