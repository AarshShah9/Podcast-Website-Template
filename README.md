<a href="">![React](https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black)</a>
<a href="">![HTML](https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white)</a>
<a href="">![CSS](https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white)</a>
<a href="">![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)</a>
<a href="">![MongoDB](https://img.shields.io/badge/MongoDB-47A248.svg?style=for-the-badge&logo=MongoDB&logoColor=white)</a>
<a href="">![Express](https://img.shields.io/badge/Express-000000.svg?style=for-the-badge&logo=Express&logoColor=white)</a>
<a href="">![NodeJS](https://img.shields.io/badge/Node.js-339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white)</a>
<a href="">![Nodemon](https://img.shields.io/badge/Nodemon-76D04B.svg?style=for-the-badge&logo=Nodemon&logoColor=white)</a>
<a href="">![Axios](https://img.shields.io/badge/Axios-5A29E4.svg?style=for-the-badge&logo=Axios&logoColor=white)</a>
<a href="">![Spotify](https://img.shields.io/badge/Spotify-1DB954.svg?style=for-the-badge&logo=Spotify&logoColor=white)</a>
<a href="">![Windows](https://img.shields.io/badge/Windows-0078D6.svg?style=for-the-badge&logo=Windows&logoColor=white)</a>


This repo is a project meant to allow podcast hosts to create their on websites for their podcasts using this React Project as a template/ starting point. Follow the the instruction to get it setup.

## Properties/ Features


### MERN STACK

#### React
- Function based components
- React Routing
- Spotify API Calls for episode cards using Axios
- React Context

#### MongoDB Atlas
- Database

#### Express & NodeJS
- Backend API
- MVC Architectural Pattern

## Intial Setup

1. Fork this repo to the Github account you want to host the website from
2. Go into src\components\values.js and src\components\credentials.js and and replace all the links, Spotify API keys, etc. As well as replace all credentials in .env files for both the backend and frontend. (You can get the spotify keys, etc by going to https://developer.spotify.com/dashboard/login and following the steps to sign up and create an app. This will generate you the required information (ClientId, ClientSecret) and for the showID simply go to the spotify page for your podcast and get the alphanumeric id at the end of the URL).
3. Make sure you you run "npm install" in both folders to get the relevant libraries.

## Custom Styling

- Custom styling will require some knowledge of css and html.
- You will need to go into the designated styling sheet and replace any colors with the desired color of your choice.

## Adding Pages

1. Go into src\components\pages\values.js and add any page links that you intend on adding this will automatically add it to the navbar. (Note that if you add too many pages you may have to adjust sizing for it to fit on the navbar)
2. Go into App.js and add the component you created for that page as a < Route /> with the correct correct link.

## Hosting
Follow this tutorial to host for free:
https://niruhan.medium.com/deploying-mern-fullstack-application-on-the-web-for-free-with-netlify-and-heroku-87d888012635

## Sample Website

<img src="frontend\public\sample_sc.png"/>

## Information About React: Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
