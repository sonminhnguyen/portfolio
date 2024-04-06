import React from "react";
import svg from "./assets/next.svg";
import diplom from './assets/appImages/diplom.png';
import chatapp from './assets/appImages/chatapp.png';
import stockapp from './assets/appImages/stockapp.png';
import noteapp from './assets/appImages/noteapp.png';
import expensifyapp from './assets/appImages/expensifyapp.png';


interface Project {
  id: number,
  image?: any,
  name: string,
  description: string,
  href?: string,
}

const data : Project[] = [
  {
    id: 1,
    image: diplom,
    name: "UNIVERSITY MANAGEMENT APP",
    description: "Backend App",
    href: "https://nminhson-diplom.up.railway.app/",
  },
  {
    id: 2,
    image: stockapp,
    name: "STOCK APP",
    description: "App for finding good stocks",
    href: "https://nminhson.up.railway.app/apps/stockApp",
  },
  {
    id: 3,
    image: expensifyapp,
    name: "EXPENSIFY APP",
    description: "App for managing expensify",
    href: "https://nminhson.up.railway.app/apps/expensifyApp/",
  },
  {
    id: 4,
    image: noteapp,
    name: "NOTE APP",
    description: "App for noting",
    href: "https://nminhson.up.railway.app/apps/noteApp/",
  },
  // {
  //   id: 5,
  //   image: chatapp,
  //   name: "CHAT APP",
  //   description: "App for chating",
  //   href: "https://nminhson.up.railway.app/apps/chatApp",
  // },
];

export default data;
