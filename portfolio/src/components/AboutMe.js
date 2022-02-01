import React from 'react';
import './Commons.css';
import './AboutMe.css';
import ScrollButtons from './ScrollButtons.js';
import profile from '../images/photos/profile.png'
import { MyButton } from './myButtons/MyButtons';



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
                <div className='about-text-container'>
                    <div className='about-text'>
                        <p>My name is Asia and I really enjoy creating pretty and functional websites :&#41; </p>
                        <p>Having completed my studies in Civil Engineering at the Poznań University of Technology and after working in my profession for several years, I decided to change the industry. </p>
                        <p>I have been learning programming since October 2021. At first, I learned from tutorials at 
                            <a href='https://www.w3schools.com/' target='blank'> W3Schools</a>.
                            Then my brother Kuba taught me the basics of using React and Redux. He also created back-end for my first two apps. My current skills are listed in the&nbsp;
                            <MyButton
                                buttonStyle='btn--red-text'
                                // buttonShadow='btn--dark'
                                buttonShape='btn--square'
                                buttonSize='btn--large-onlytext'
                                onClick={() => scrollTo('Skills')}
                            >
                            SKILLS&nbsp;
                            </ MyButton>
                            section 
                        </p>
                        <p>Currently, I learn through practice by creating websites for my own needs. You can find more about them in PROJECTS section.</p>
                    </div>
                </div>
                <div className='about-img'>
                    <img src={profile} alt='profile' className='profile-img' /> 
                </div>
            </div>
            <ScrollButtons previous='navigation' next='projects' />
        </div>
    )
}
export default AboutMe;
