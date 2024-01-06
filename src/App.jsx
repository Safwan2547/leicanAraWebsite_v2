import React,{useEffect} from 'react';
import './tailwind.css';
import './index.css';
import 'tailwindcss/tailwind.css'
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import Cursor from './Modules/cursor';
import Navbar from './Modules/nav';
import ContactPage from './Pages/ContactPage';
import StarfallPage from './Pages/StarFallPage';
import HomePage from './Pages/HomePage';
import FAQPage from './Pages/FAQPage';
import ProjectPage from './Pages/ProjectPage';
import {Scrollbar} from 'smooth-scrollbar-react';
import Footer from './Modules/Footer';

function App() {
  function addClassNameToElements() {
    const h1Elements = document.getElementsByTagName('h1');
    const h1 = "textC";
    const pElements = document.getElementsByTagName("p");
    const p = "textP";
  
    for (let i = 0; i < h1Elements.length; i++) {
      const currentClassName = h1Elements[i].className;
      h1Elements[i].className = `${currentClassName} ${h1}`;
    }
    for (let i = 0; i < pElements.length; i++) {
      const currentClassName = pElements[i].className;
      pElements[i].className = `${currentClassName} ${p}`;
    }

  }
  useEffect(() => {
    addClassNameToElements();
    console.log("Mounted Cursor");

  });
  return (
    
    <Router >
    <div className=" snap-y snap-mandatory sm:m-0 bg-white appearance-none  ">
      
      {/* <Intro/> */}
      <Cursor />
      <Navbar />
      
      
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/ContactPage" element={<ContactPage />} />
        <Route exact path="/FAQPage" element={<FAQPage />} />
        <Route exact path="/StarFallPage" element={<StarfallPage />} />
        <Route exact path="/:projectKey" element={<ProjectPage />} />



      </Routes>
      
      </div>
      <Footer />
    </Router>
);
}
export default App;
