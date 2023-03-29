import { ProjectInterface } from "../../interface/Project";
import Chicken from '../video/hatchio-chicken.gif';
import Dino from '../video/dino.gif';
import Photo from '../video/photo.gif';
import Weather from '../video/weather.gif';
import Donut from '../video/donut.gif';
import Recipe from '../video/recipe.gif';

const projects: ProjectInterface[] = [
  {
    id: 0,
    title: "Donut Music",
    description: "A full-stack web application built with TypeScript, React + Redux, Node.js, p5.js, tone.js, socket.io, and sqlite3. It features a violin, guitar, drums, and flute as instruments and four unique visualizers. Our visualizers react to the amps, hertz, and/or speed of the song or key playing.",
    image: Donut,
    url: "https://github.com/Hilarioo/Donut-Music",
  },
  {
    id: 1,
    title: "The Weather",
    description: "A responsive web app that allows users to see the current & future weather. It obtains a user's IP address to showcase nearby weather. This project was created using React, Typescript, Context API, Axios, Date-fns, NodeJS, and MaterialUI. Also integrated unit tests using Jest.",
    image: Weather,
    url: "https://github.com/Hilarioo/Weather",
  },
  {
    id: 2,
    title: "Soda Chat Messaging",
    description: "Full-stack app which allows group messaging. Created using Javascript, ReactJS, NodeJS, Express, Java, and MongoDB.",
    image: Dino,
    url: "https://github.com/Hilarioo/Soda-Chat",
  },
  {
    id: 3,
    title: "Hatchio Job Search",
    description: "A full-stack app which allows students to create their resume and apply to jobs. It also allows companies to post jobs and recruit students. Created using Javascript, ReactJS, Bootstrap, Express, and MySQL for DB.",
    image: Chicken,
    url: "https://github.com/Hilarioo/Hatchio",
  },
  {
    id: 4,
    title: "Photo Management",
    description: "A web app which allows users to post, search, and view images. Created using Javascript, HTML5, CSS NodeJs, Express, and MySQL",
    image: Photo,
    url: "https://github.com/Hilarioo/Pixel-Box",
  },
  {
    id: 5,
    title: "Recipe IOS",
    description: "My Recipe App was a solo project created with Firebase Auth, Swift, Xcode, and SpoonacularAPI. Through the app, you will be able to create an account (login | logout), search recipes by category, and select a random recipe to cook.",
    image: Recipe,
    url: "https://github.com/Hilarioo/Recipe-App",
  },
  
];

export default projects;