import React from 'react';
import './Commons.css';
import { MyButton } from './myButtons/MyButtons.js';


function Start() {

    const scrollTo = (page) => {
        document.getElementById(page).scrollIntoView({
            behavior: 'smooth'
        })
    }

    return (
        <div className='start-page-container'>
            <div className='start-page-content'>
                <h1>Joanna Falkowska</h1>
                <h3>Front-End developer</h3>
            </div>
            <div className='start-page-buttons'>
                    <div className='start-page-button'>
                        <MyButton
                            buttonStyle='btn--primary'
                            buttonSize='btn--large'
                            onClick={() => scrollTo('projects')}
                        >
                            Projects
                        </MyButton>
                    </div>
                    <div className='start-page-button'>
                        <MyButton
                            buttonStyle='btn--red'
                            buttonSize='btn--large'
                            onClick={() => scrollTo('contact')}
                        >
                            Contact
                        </MyButton>
                    </div>
                </div>
            <div>
                <MyButton
                    buttonStyle='btn--next'
                    buttonShadow='btn--light'
                    buttonShape='btn--round'
                    onClick={() => scrollTo('aboutMe')}
                >
                    <i className="fas fa-chevron-down" style={{fontSize:'25px'}}></i>
                </MyButton>
            </div>
        </div>
    )
}
export default Start;
