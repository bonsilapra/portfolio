import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';
import Start from './components/Start';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import MyHobbies from './components/MyHobbies';
import MyDogs from './components/MyDogs';
import Contact from './components/Contact';


ReactDOM.render(

  <React.StrictMode>
    <Navigation />
    <Start />
    <AboutMe />
    <Projects />
    <Skills />
    <MyHobbies />
    <MyDogs />
    <Contact />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
