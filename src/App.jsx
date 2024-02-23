import React,{useEffect} from 'react';
import './tailwind.css';
import './index.css';
import 'tailwindcss/tailwind.css'
import { BrowserRouter as Router, Route, Routes,Link,useLocation } from 'react-router-dom';
import Cursor from './Modules/cursor';
import Navbar from './Modules/nav';
import ContactPage from './Pages/ContactPage';
import HomePage from './Pages/HomePage';
import FAQPage from './Pages/FAQPage';
import ProjectPage from './Pages/ProjectPage';
import AboutPage from './Pages/AboutPage';
import Footer from './Modules/Footer';

import MouseParallax from './Modules/mouseParallax';



function App() {
  useEffect(() => {

  
  });
  return (
    
    <Router >
    <div className=" snap-y snap-mandatory sm:m-0 bg-white appearance-none  ">
      
      {/* <Intro/> */}
      <Cursor />
      <Navbar />
      <MouseParallax/>
      
      
      <Routes >
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/AboutPage" element={<AboutPage />} />
        <Route exact path="/FAQPage" element={<FAQPage />} />
        <Route exact path="/:projectKey" element={<ProjectPage />} />



      </Routes>
      
      </div>
      <Footer />


      

    </Router>
    
);
}
export default App;
