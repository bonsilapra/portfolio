import React from 'react';
import './Commons.css';
import './MyDogs.css';
import { MyButton } from './myButtons/MyButtons.js';


function MyDogs() {

    const scrollTo = (page) => {
        document.getElementById(page).scrollIntoView({
            behavior: 'smooth'
        })
    }

    return (
        <div className='dogs-page-container'>
            <div className='title dark'>
                <h1>My dogs</h1>
            </div>
            <div className='dogs-page-content'>
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
                    onClick={() => scrollTo('hobbies')}
                >
                    <i className="fas fa-chevron-up" style={{fontSize:'25px'}}></i>
                </MyButton>
                <MyButton
                    buttonStyle='btn--next'
                    buttonShadow='btn--dark'
                    buttonShape='btn--round'
                    onClick={() => scrollTo('contact')}
                >
                    <i className="fas fa-chevron-down" style={{fontSize:'25px'}}></i>
                </MyButton>
            </div>
        </div>
    )
}
export default MyDogs;
