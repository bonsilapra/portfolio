import React, {useState} from 'react';
import './Commons.css';
import { MyButton } from './myButtons/MyButtons.js';


function Skills() {

    const scrollTo = (page) => {
        document.getElementById(page).scrollIntoView({
            behavior: 'smooth'
        })
    }

    return (
        <div className='skills-page-container'>
            <div className='title dark'>
                <h1>Skills</h1>
            </div>
            <div className='skills-page-content'>
                <div>
                    <p>lorem ipsum</p>
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
                    onClick={() => scrollTo('projects')}
                >
                    <i className="fas fa-chevron-up" style={{fontSize:'25px'}}></i>
                </MyButton>
                <MyButton
                    buttonStyle='btn--next'
                    buttonShadow='btn--dark'
                    buttonShape='btn--round'
                    onClick={() => scrollTo('hobbies')}
                >
                    <i className="fas fa-chevron-down" style={{fontSize:'25px'}}></i>
                </MyButton>
            </div>
        </div>
    )
}
export default Skills;
