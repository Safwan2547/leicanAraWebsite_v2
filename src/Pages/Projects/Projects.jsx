import React, { useRef,useState, useEffect } from 'react';


import LeicanAraPhoto from "../../Assets/Magazine.webp"
import SvavaPhoto from "../../Assets/Zen.webp"
import leicanAraPortrait from "../../Assets/portrait uw.webp"

//Starfall Imports
import starFallVideo from "../../Assets/StarFall insta reel blue.mp4"
import starFallPhoto from "../../Assets/Container-Mockup.webp"
import starFallImage1 from "../../Assets/Ecostellar v4.webp"
import starFallImage2 from "../../Assets/STARFALL MOBILE WEBSITE MOCKUP v1.webp"
import starFallVideo2 from "../../Assets/Laptop Mockup 1080 v2.mp4"
import starFallVideo3 from "../../Assets/StarFall Colors 6.mp4" 
import starFallImage3 from "../../Assets/Mockup 3.webp"
import starFallImage4 from "../../Assets/StarFall Thumbnail-4.webp"
import starFallImage5 from "../../Assets/Starfall Robots Lab Mockup 2.webp"
import starFallIntroVideo from "../../Assets/StarFall Introducing website2.mp4"
import starFallPrologue from "../../Assets/StarFall Founded Graphic v2.mp4"
import starFallVideo4 from "../../Assets/Logo Construct v1.mp4"
 



const projects = [
    {
      key:"starfall",
      title: 'StarFall',
      mainHeader: 'Humanity\'s future, Revolutionized.',
      
      type: 'image',

      thumbnail: starFallPhoto,
      
      thumbnailAlt:"image description",


      projectLink: '/ProjectPage',
      textColor:"text-MainBeige",
  
      services:"|  Branding  ||  Vision  ||  Art Direction || Web Design |",

      //Mobile Content
      mainHeaderMobile:"Beyond the Stars",
      thumbnailPort:starFallVideo,
      textColorMobile:"text-[#efece3]",
      typeMobile:"video",


      //Project Page Content
      thumbnail2:starFallPhoto,

      prologueHead:"The year is 2051, ",
      prologueDescription:"Starfall is a revolutionary space mining company that aims to get resources from celestial bodies back to Earth. With projects like MoonForge and EcoStellar, it sets a benchmark for responsible resource extraction in the space industry. ",
  
      ambitionHead:"Aim for the Stars",
      ambitionDescription:"StarFall was crafted with the vision of setting a precedent in the space industry. \
      To achieve this goal, we needed to design StarFall in a manner that not only built upon the foundations \
      laid by current space industry leaders but also inspired future generations to continue the \
      mission.",
      
      challengeHead:"To create a revolution",
      challengeDescription:"Crafting an identity for StarFall posed a unique and formidable challenge — to meticulously reflect its audacious vision and resonate with a diverse audience, spanning investors to future astronauts.",
      
      approachHead:"The approach of brilliance",
      approachDescription:"Deeply understanding StarFall's ethos laid the critical groundwork. The design team, drawing inspiration from celestial phenomena and industry giants, embraced a deliberate and thoughtful minimalist approach, resulting in the birth of a unique brand identity named The Triangulum.",
      
      identityHead:"The Triangulum ",
      identityDescription:"At the heart of StarFall's brand identity lies a concept we term \"Triangulum\". Which Contains 3 base ideas: ",
      epilogueHead:"The Legacy ",



      image1:starFallImage1,
      image2:starFallImage2,
      image3:starFallImage3,
      
      introVideo:starFallIntroVideo,

      prologueContent1:starFallPrologue,
      prologueContent2:starFallIntroVideo,

      ambitionContent1:starFallVideo2,
      ambitionContent2:starFallImage1,

      challengeContent1:starFallImage5,
      challengeContent2:"",

      approachContent1:starFallImage2,
      approachContent2:"",

      identityLayout:1,
      identityContent1:starFallVideo3,
      identityContent2:starFallVideo4,
      
      
      epilogueContent1:starFallImage3,
      epilogueContent2:starFallImage4,



      
      video1Alt:"video description",

      video2:starFallVideo,
      video3:starFallVideo3,
      video4:starFallVideo4,


      finalWords:"The End."


    },
    {
      key:"leicanara",
      title: 'LeicanAra',
      mainHeader: 'Stories that Bind us.',
      type: 'image',
      thumbnail: LeicanAraPhoto,
      thumbnail2: LeicanAraPhoto,
      services:"",
      
      projectLink: 'https://www.leicanAra.com',
      textColor:"text-[#21323e]",

      
    

      //mobile Content
      mainHeaderMobile:"Stories that bind us",
      textColorMobile:"text-[#efece3]", 
      typeMobile:"image",
      thumbnailPort:leicanAraPortrait,

      //Project Page Content
      prologueHead:"StoryTellers for the visionaries",
      prologueDescription:"LeicanAra was born out of the belief that shared experiences shape human connections. We realized the power of compelling narratives and visuals and how they bridge businesses and audiences.",
      ambitionHead:"The Journey"
    },
    {
      key:"svava",
      title:'Sväva',
      mainHeader:'Skincare forever changed',
      type:'image',
      thumbnail:SvavaPhoto,
      thumbnailPort:starFallPhoto,
      projectLink: 'https://www.starfallstudios.com/',
      textColor:"text-[#efece3]",
      typeMobile:"image"

    }
    // Add more projects here
  ];
  
  export default projects;
  