import React, { useRef,useState, useEffect } from 'react';
import starFallVideo from "../../Assets/StarFall insta reel blue.mp4"
import starFallPhoto from "../../Assets/Container-Mockup.jpg"
import starFallImage1 from "../../Assets/Ecostellar v4.jpg"
import starFallImage2 from "../../Assets/STARFALL MOBILE WEBSITE MOCKUP v1.jpg"

import LeicanAraPhoto from "../../Assets/Magazine.png"
import SvavaPhoto from "../../Assets/Zen.jpg"
import leicanAraPortrait from "../../Assets/portrait uw.png"
import starFallVideo2 from "../../Assets/Laptop Mockup 1080 v2.mp4"
import starFallVideo3 from "../../Assets/StarFall Colors 6.mp4" 
import starFallImage3 from "../../Assets/StarFall Logo Showcase Mockup .jpg"
 



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
  
      services:"Branding, Vision, ",

      //Mobile Content
      mainHeaderMobile:"Beyond the Stars",
      thumbnailPort:starFallVideo,
      textColorMobile:"text-[#efece3]",
      typeMobile:"video",


      //Project Page Content
      ambitionHead:"To create a brand that inspires people to look beyond the stars and into the future.",
      challengeHead:"To create a revolution",
      approachHead:"The approach of brilliance",



      image1:starFallImage1,
      image2:starFallImage2,
      image3:starFallImage3,

      video1:starFallVideo2  ,
      video1Alt:"video description",
      video2:starFallVideo,
      video3:starFallVideo3,

    },
    {
      key:"leicanara",
      title: 'LeicanAra',
      mainHeader: 'Stories that Bind us.',
      type: 'image',
      thumbnail: LeicanAraPhoto,
      services:"",
      
      projectLink: 'https://www.leicanAra.com',
      textColor:"text-[#21323e]",

      
    

      //mobile Content
      mainHeaderMobile:"Stories that bind us",
      textColorMobile:"text-[#efece3]", 
      typeMobile:"image",
      thumbnailPort:leicanAraPortrait,
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
  