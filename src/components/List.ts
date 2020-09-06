import html from '../img/logos/html.png';
import css from '../img/logos/css.png';
import js from '../img/logos/js.png';
import react from '../img/logos/react.png';
import redux from '../img/logos/redux.png';
// import gimp from '../img/logos/gimp.png';
import sass from '../img/logos/sass.png';
import python from '../img/logos/python.png';
import sql from '../img/logos/sql.png';
import git from '../img/logos/git.png';
import java from '../img/logos/java.png';
import nodejs from '../img/logos/nodejs.png';
import ts from '../img/logos/ts.jpg';

import Hike from '../img/projects/TheHike.png';
import ImageApp from '../img/projects/images.png';
import Form from '../img/projects/form.png';
import Infinite from '../img/projects/demo.gif';
import Shop from '../img/projects/shop.gif';
import Leon from '../img/projects/leon2.png';

export const logos = [
  { name: 'HTML', pic: html },
  { name: 'CSS', pic: css },
  { name: 'SASS', pic: sass },
  { name: 'JS', pic: js },
  { name: 'TS', pic: ts },
  { name: 'REACT', pic: react },
  { name: 'REDUX', pic: redux },
  { name: 'NODEJS', pic: nodejs },
  { name: 'PYTHON', pic: python },
  { name: 'JAVA', pic: java },
  { name: 'SQL', pic: sql },
  { name: 'GIT', pic: git },
  // { name: 'GIMP', pic: gimp },
];

export const list = [
  {
    id: 12,
    name: 'LeOn',
    description:
      '"LeOn - Learning Online" is an educational platform for students and teachers to make learning and teaching processes online easier. Functionalities include video calls, chat rooms, lesson descriptions, live schedule... To explore an application login with username: eglgus and password: password.',
    tech: 'ReactJS, TS, Java',
    img: Leon,
    link: 'https://java-menuo-su-it.northeurope.cloudapp.azure.com/',
    github: '',
  },
  {
    id: 10,
    name: 'Shop',
    description:
      'E-shop has a minimalistic design which ensures that shopping is quick and easy. In case you want to sell your own items - create an account, fill the form to describe your item for sale.',
    tech: 'ReactJS, Redux, NodeJS, SQL',
    img: Shop,
    link: '',
    github: 'https://github.com/Zmagis/shop',
  },

  // {
  //   id: 8,
  //   name: 'Investing App',
  //   description:
  //     'App to train investing skills. Please contact for live demonstration (eglegustaite@gmail.com).',
  //   tech: 'Flask, ReactJs, SQL',
  //   img: Invest,
  //   link: '',
  //   github: 'https://github.com/Zmagis/stocks',
  // },
  {
    id: 7,
    name: 'Form App',
    description:
      'One of those random websites with a strange purpose. Fill the form with you random question or thought and it will be displayed along with the others.',
    tech: 'ReactJS, firebase',
    img: Form,
    link: 'https://zmagis.github.io/form',
    github: 'https://github.com/Zmagis/form',
  },
  {
    id: 11,
    name: 'Infinite Scroll',
    description:
      'A responsive single-page Image App that provides an infinite scroll experience.',
    tech: 'ReactJS, Node, Flickr API',
    img: Infinite,
    link: 'https://sleepy-nightingale-a8cec9.netlify.app',
    github: 'https://github.com/Zmagis/Infinite-scroll',
  },
  {
    id: 6,
    name: 'Image App',
    description:
      'Website to search images by keywords with added functionality to save keywords in order to go back to those results faster afterward.',
    tech: 'ReactJS, Redux, Unsplash API',
    img: ImageApp,
    link: 'https://zmagis.github.io/image-app/',
    github: 'https://github.com/Zmagis/image-app',
  },
  {
    id: 5,
    name: 'The Hike',
    description:
      'Website for the upcoming fake event to hike in beautiful forests - in Švenčionėliai.',
    tech: 'ReactJS',
    img: Hike,
    link: 'https://optimistic-bhabha-7ca5a0.netlify.com/',
    github: 'https://github.com/Zmagis/The-Hike',
  },
];
