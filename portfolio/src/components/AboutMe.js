import React from 'react';
import './Commons.css';
import './AboutMe.css';
import { MyButton } from './myButtons/MyButtons.js';


function AboutMe() {

    const scrollTo = (page) => {
        document.getElementById(page).scrollIntoView({
            behavior: 'smooth'
        })
    }
    return (
        <div className='about-page-container'>
            <div className='title dark'>
                <h1>About me</h1>
            </div>
            <div className='about-page-content'>
                <div>
                    <p>lorem ipsumfbvzsxvzs </p>
                </div>
                <div>
                <p>lorem ipsum</p>

                    <img></img>
                </div>
            </div>
            <div className='scroll-container'>
                <MyButton
                    buttonStyle='btn--previous'
                    buttonShadow='btn--dark'
                    buttonShape='btn--round'
                    onClick={() => scrollTo('navigation')}
                >
                    <i className="fas fa-chevron-up" style={{fontSize:'25px'}}></i>
                </MyButton>
                <MyButton
                    buttonStyle='btn--next'
                    buttonShadow='btn--dark'
                    buttonShape='btn--round'
                    onClick={() => scrollTo('projects')}
                >
                    <i className="fas fa-chevron-down" style={{fontSize:'25px'}}></i>
                </MyButton>
            </div>
        </div>
    )
}
export default AboutMe;
