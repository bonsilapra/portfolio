import React, {useState} from 'react';
import './Commons.css';
import { MyButton } from './myButtons/MyButtons.js';


function Contact() {

    const scrollTo = (page) => {
        document.getElementById(page).scrollIntoView({
            behavior: 'smooth'
        })
    }

    return (
        <div className='contact-page-container'>
            <div className='title light'>
                <h1>Contact</h1>
            </div>
            <div className='contact-page-content'>
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
                    onClick={() => scrollTo('dogs')}
                >
                    <i className="fas fa-chevron-up" style={{fontSize:'25px'}}></i>
                </MyButton>
            </div>
        </div>
    )
}
export default Contact;
