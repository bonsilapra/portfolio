import React from 'react';
import './Commons.css';
import { MyButton } from './myButtons/MyButtons.js';


function ScrollButtons({previous, next}) {

    const scrollTo = (page) => {
        document.getElementById(page).scrollIntoView({
            behavior: 'smooth'
        })
    }
    return (
            
        <div className='scroll-container'>
            <MyButton
                buttonStyle='btn--previous'
                buttonShadow='btn--dark'
                buttonShape='btn--round'
                onClick={() => scrollTo(previous)}
            >
                <i className="fas fa-chevron-up" style={{fontSize:'25px'}}></i>
            </MyButton>
            <MyButton
                buttonStyle='btn--next'
                buttonShadow='btn--dark'
                buttonShape='btn--round'
                onClick={() => scrollTo(next)}
            >
                <i className="fas fa-chevron-down" style={{fontSize:'25px'}}></i>
            </MyButton>
        </div>
    )
}
export default ScrollButtons;