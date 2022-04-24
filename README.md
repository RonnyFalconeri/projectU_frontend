# projectU - Yet Another To Do App

## Introduction
Welcome to projectU - a(nother) project managing tool. Never forget about your side projects again! Create and maintain projects with different complexities and sub tasks while having a great overview.

This is the frontend part of this application which is developed with Angular.
The backend part is a RESTful API developed with spring boot on a [separate repository](https://github.com/RonnyFalconeri/projectU_backend).

## Demo
GIF of screen using application

## About projectU
what problem does it solve

### What can I do with it

### What are projects
describe colors of state
describe complexity

### What are Tasks

## Demo
GIF of screen using application

## About projectU
what problem does it solve

### What can I do with it

### What are projects
describe colors of state
describe complexity

### What are Tasks

## Technology Stack
Angular / TypeScript
diagramm


## Getting Started

### Requirements
Angular

### Build Frontend
Instructions to build this frontend

### Build Backend
Instruction to build backend, link to backend repo

### Start application
ng serve

If you just want to run the application without having to deal with both separate repositories start the application using docker.

## Docker
This application can also be run in a docker container.
You will need to have _docker_ and _docker-compose_ installed on your system.
To start the entire application, do the following steps:

1. Create a `docker-compose.yml` file
2. Copy the following code into the `docker-compose.yml` file:

``` yml
version: '3.7'

services:

  app-frontend:
    container_name: app-frontend
    build:
      context: .
    ports:
      - "8081:80"
    restart: always
    networks:
      - frontend

networks:
  frontend:
```

3. Run the command 
```
docker-compose up
```
Both the frontend and backend have their own `Dockerfile`. The `docker-compose.yml` will pick these up and create docker images.
The two repositories get downloaded and copied into the docker images and automatically started as containers.

You should now be able to open the application in your browser with http://localhost:8081.


