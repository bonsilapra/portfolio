import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';

ReactDOM.render(

  <React.StrictMode>
    <Navigation />
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
