import React, {useState} from 'react';
import './Commons.css';
import { MyButton } from './myButtons/MyButtons.js';


function MyHobbies() {

    const scrollTo = (page) => {
        document.getElementById(page).scrollIntoView({
            behavior: 'smooth'
        })
    }

    return (
        <div className='hobbies-page-container'>
            <div className='title light'>
                <h1>My hobbies</h1>
            </div>
            <div className='hobbies-page-content'>
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
                    buttonShadow='btn--light'
                    buttonShape='btn--round'
                    onClick={() => scrollTo('skills')}
                >
                    <i className="fas fa-chevron-up" style={{fontSize:'25px'}}></i>
                </MyButton>
                <MyButton
                    buttonStyle='btn--next'
                    buttonShadow='btn--light'
                    buttonShape='btn--round'
                    onClick={() => scrollTo('dogs')}
                >
                    <i className="fas fa-chevron-down" style={{fontSize:'25px'}}></i>
                </MyButton>
            </div>
        </div>
    )
}
export default MyHobbies;
