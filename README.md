# projectU - Yet Another To Do App

## Introduction
Welcome to projectU - a(nother) project managing tool. Never forget about your side projects again! Create and maintain projects with different complexities and sub tasks while having a great overview.

This is the frontend part of this application which is developed with Angular.
The backend part is a RESTful API developed with spring boot on a [separate repository](https://github.com/RonnyFalconeri/projectU_backend).


## About projectU
Did you ever had a good idea for a project? Only to forget about it a few days later? Of course you had. Well, its your lucky day because you just found _projectU_ - perhabs the best project managing application in the market, and it's free!

With projectU you can:

  - Create new projects with various attributes e.g. description, complexity, time estimation and many more
  - Create sub tasks for a project in order to split up the process
  - Keep track of a projects current state and progress
  - Have an overview of every project and its current state

Projects and Tasks are the main objects of projectU. Read the following chapters to understand them more properly.


### What is a Project
A project is the main object of this application. With it you can store your ideas about a cool future (or current) project. 

A project has the following attributes:

  - Title
  - Description
  - State - possible values:
    - initiated
    - in progress
    - halted
    - finished
  - Complexity - possible values:
    - easy
    - medium
    - difficult
  - Estimated duration (in hours)
  - Expected Result / Goal
  - Actual Result
  - Time when the project was created
  - Time when the project was first started
  - Time when the project was finished
  - Tasks (zero or many)


### What is a Task
A task is kind of a "small project" - a project can have zero or many tasks. They split up the projects process into smaller and maintainable chunks. Tasks resemble a to do list for a project in order to reach its goal.

A task has the following attributes:

  - Title
  - Description
  - Done - possible values:
    - true
    - false
  - Estimated duration (in hours)
  - Expected Result / Goal

## Demo
GIF of screen using application


## Technology Stack
Angular / TypeScript
diagramm
open api


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


## License
license details
