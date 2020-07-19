
<h1 align="center">
  <br>
  <a href="http://github.com/elbrodelche">
  <img src="https://i.imgur.com/1A2H47l.png" alt="Weather App" width="250">
  </a>
  <br>
  Weather App
  <br>
</h1>
<div align="center">
  :computer:
</div>
<div align="center">
  Simple app for see the forecast
</div>

<br />

<div align="center">
  <sub>This demo is shared by
  <a href="https://github.com/elbrodelche">
  Juan Carlos Migliavacca
  </a>
</div>

## Table of Contents
- [Intro](#Intro)
- [Project](#Project)
- [Features](#Features)
- [Installation](#Installation)
- [License](#license)

## Intro
Demo Weather backend using NodeJS and TypeScript with extensible dependency injection implementation and multi router architecture.

### Architecture
Root structure:
```bash
├── README.md               // Main docs
├── apidoc.json             // ApiDocs configuration
├── coverage                // Testing coverage report
├── dist                    // Production build
├── jest.config.js          // Jest testing library config file
├── node_modules            
├── package-lock.json       
├── package.json
├── public                  // ApiDocs staic files
├── src                     // API source code
└── tsconfig.json           // Typescript config file
```
API source code:
```bash
├── __tests__               // Test files
├── app.ts                  // Main app file
├── models                  // Typescript models and types
├── repositories            // Data implementations 
├── routes                  // Main router
├── server.ts               // App entrypoint
└── services                // Services (Controllers)
```

### Endpoints

| Verb | Endpoint | Description |
|:----|:-------------|:-----|
| GET | /ping | Health information on the server |
| GET | /location | Location of the server from Ip Api service |
| GET | /current | Current location of the server with weather data |
| GET | /current/:city | Weather data from specified city |
| GET | /forecast | Current location of the server with 5 day forecast |
| GET | /forecast/:city | Forecast data from specified city |

## Project

Project analysis and feature structure can be found on **https://github.com/elbrodelche/weather-app-challenge-api/projects/1**

## Installation

### Requierements
- [Node v12.18.0](https://nodejs.org/en/)
- [TSC CLI Version 3.9.6](https://www.npmjs.com/package/typescript)
- [ApiDoc CLi Latest](https://apidocjs.com)
- [Docker](https://www.docker.com)

### First steps
Clone repo
 ```bash
git clone git@github.com:elbrodelche/weather-app-challenge-api.git
```
 
 Important: you must rename **.env.example** to **.env** file and set proper environment variables.
  ```bash
cp .env.example .env
 ```  
 
 | Variable |  Description | Example Value |
 |:----|:-------------|:-----|
 | NODE_PORT | aplication port | 3000|
 | NODE_ENV | environment setting | development |
 | OPEN_WEATHER_API | openweathermap api secret key | 0bae29a1800d12a8fe1fb62f02fd538a |
 | OPEN_WEATHER_URL | openweathermap api url | http://api.openweathermap.org/data/2.5/ |
 
 
### Docker installation (OSX only)

 Open terminal and paste
 ```bash
docker-compose up -d
```

### Computer installation
 
 Install dependencies
  ```bash
npm i
 ```

 Run project (dev)
  ```bash
 npm run watch-server
 ```
 
 Build production
  ```bash
 npm run build
 ```
### Documentation

You will find complete API documentation on **localhost:3000/**

## Features

- Node JS
- Prettier
- Typescript
- ApiDoc documentation 
- Multi router architecture
- Dependency injection service structure
- Docker deployment

## Coverage
```bash
npm t
```
<img src="https://i.imgur.com/vSTClbP.png" alt="Weather App" width="600">

## License
[ICS](https://tldrlegal.com/license/mit-license)









