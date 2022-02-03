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
                        <p>My name is Asia and I really enjoy creating pretty and functional websites :&#41; I am looking for my first job as Front-End developer.</p>
                        <p>Having completed my studies in Civil Engineering at the Poznań University of Technology and after working in my profession for couple of years, I decided to change the industry. </p>
                        <p>I have been learning programming since October 2021. At first, I learned HTML, CSS and JavaScript from tutorials at 
                            <a href='https://www.w3schools.com/' target='blank'> W3Schools</a>.
                            Then my brother Kuba (who graduated from Computer Science) taught me the basics of using React and Redux. He also created back-end for my first two apps. My skills are listed in the&nbsp;
                            <MyButton
                                buttonStyle='btn--primary-text'
                                buttonShape='btn--square'
                                buttonSize='btn--large-onlytext'
                                onClick={() => scrollTo('skills')}
                            >
                                SKILLS&nbsp;
                            </ MyButton>
                            section 
                        </p>
                        <p>Currently, I learn through practice by creating websites for my own needs. You can find more about them in&nbsp; 
                            <MyButton
                                buttonStyle='btn--primary-text'
                                buttonShape='btn--square'
                                buttonSize='btn--large-onlytext'
                                onClick={() => scrollTo('projects')}
                            >
                                PROJECTS&nbsp;
                            </ MyButton>
                            section.</p>
                        <p>If you want to know more about me, feel free to&nbsp;
                            <MyButton
                                buttonStyle='btn--red-text'
                                buttonShape='btn--square'
                                buttonSize='btn--large-onlytext'
                                onClick={() => scrollTo('contact')}
                            >
                                CONTACT&nbsp;
                            </ MyButton>
                            me and browse the&nbsp; 
                            <MyButton
                                buttonStyle='btn--primary-text'
                                buttonShape='btn--square'
                                buttonSize='btn--large-onlytext'
                                onClick={() => scrollTo('hobbies')}
                            >
                                HOBBIES&nbsp;
                            </ MyButton>
                                and&nbsp;
                            <MyButton
                                buttonStyle='btn--primary-text'
                                buttonShape='btn--square'
                                buttonSize='btn--large-onlytext'
                                onClick={() => scrollTo('dogs')}
                            >
                                DOGS&nbsp;
                            </ MyButton>
                            section.</p>
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
