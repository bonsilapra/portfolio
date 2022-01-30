import React from 'react';
import './Commons.css';
import './Skills.css';
import reactLogo from '../images/logos/reactLogo.png'
import reduxLogo from '../images/logos/reduxLogo.png'
import jsLogo from '../images/logos/jsLogo.png'
import htmlLogo from '../images/logos/htmlLogo.png'
import cssLogo from '../images/logos/cssLogo.png'
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
                <div className='skills-logos'>
                    <div>
                        <img src={reactLogo} alt="react-logo" className='skills-logo'/>
                    </div>
                    <div>
                        <img src={reduxLogo} alt="react-logo" className='skills-logo'/>
                    </div>
                    <div>
                        <img src={jsLogo} alt="css-logo" className='skills-logo'/>
                    </div>
                    <div>
                        <img src={htmlLogo} alt="css-logo" className='skills-logo'/>
                    </div>
                    <div>
                        <img src={cssLogo} alt="css-logo" className='skills-logo'/>
                    </div>
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
