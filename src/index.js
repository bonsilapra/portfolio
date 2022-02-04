import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';
import Start from './components/Start';
import AboutMe from './components/AboutMe';
import Projects from './components/projects/Projects';
import Skills from './components/Skills';
import MyHobbies from './components/MyHobbies';
import MyDogs from './components/MyDogs';
import Contact from './components/Contact';
import { MyButton } from './components/myButtons/MyButtons.js';
import './components/Commons.css';


const scrollToTop = () =>{
  window.scrollTo({
      top: 0, 
      behavior: 'smooth'
  });
};

ReactDOM.render(


  <React.StrictMode>
    <div id='navigation'>
      <Navigation />
    </div>
    <div id='start'>
      <Start />
    </div>
    <div className='back-to-top'>
      <MyButton
          buttonStyle='btn--primary-rev-arrow'
          buttonShadow='btn--dark'
          buttonShape='btn--round'
          onClick={() => scrollToTop()}
          title='Back to top'
      >
          <i className="fas fa-angle-double-up" style={{fontSize:'25px'}}></i>
      </MyButton>
    </div>
    <div id="aboutMe">
      <AboutMe />
    </div>
    <div id="projects">
      <Projects />
    </div>
    <div id='skills'>
      <Skills />
    </div>
    <div id='hobbies'>
      <MyHobbies />
    </div>
    <div id='dogs'>
      <MyDogs />
    </div>
    <div id="contact">
      <Contact />
    </div>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
