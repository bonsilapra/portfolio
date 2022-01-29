import React, {useState} from 'react';
import './Commons.css';
import { MyButton } from './myButtons/MyButtons.js';


function Projects() {

    const scrollTo = (page) => {
        document.getElementById(page).scrollIntoView({
            behavior: 'smooth'
        })
    }

    return (
        <div className='projects-page-container'>
            <div className='title light'>
                <h1>Projects</h1>
            </div>
            <div className='projects-page-content'>
                <div className='project-container'>
                    <div className='project-description'>
                        <div className='project-text'>
                            <h2>Todo app</h2>
                            <p>This is a simple app created to organize daily tasks. App allows to add, edit, check/uncheck and remove tasks. It was created to practice basic skills in React.js</p>
                        <div className='project-icons'>
                            <div>
                                <i className="fab fa-react"></i>
                            </div>
                            <div>
                                <i className="fab fa-js-square"></i>
                            </div>
                            <div>
                                <i className="fab fa-html5"></i>
                            </div>
                            <div>
                                <i className="fab fa-css3-alt"></i>
                            </div>
                        </div>
                        </div>
                        <div className='project-links'>
                            <div>
                                <a href='https://github.com/bonsilapra/todo-list' target='blank'>
                                    <MyButton
                                        buttonStyle='btn--red'
                                        buttonShadow='btn--light'
                                        buttonShape='btn--square'
                                        buttonSize='btn--large'
                                    >
                                        LIVE DEMO
                                    </ MyButton>
                                </a>
                            </div>
                            <div>
                                <a href='https://github.com/bonsilapra/todo-list' target='blank'>
                                    <MyButton
                                        buttonStyle='btn--primary'
                                        buttonShadow='btn--light'
                                        buttonShape='btn--square'
                                        buttonSize='btn--large'
                                    >
                                        GITHUB
                                    </ MyButton>
                                </a>
                            </div>
                        </div>
                        <div className='project-img'>

                        </div>
                    </div>
                </div>
            </div>
            <div className='scroll-container'>
                <MyButton
                    buttonStyle='btn--previous'
                    buttonShadow='btn--light'
                    buttonShape='btn--round'
                    onClick={() => scrollTo('aboutMe')}
                >
                    <i className="fas fa-chevron-up" style={{fontSize:'25px'}}></i>
                </MyButton>
                <MyButton
                    buttonStyle='btn--next'
                    buttonShadow='btn--light'
                    buttonShape='btn--round'
                    onClick={() => scrollTo('skills')}
                >
                    <i className="fas fa-chevron-down" style={{fontSize:'25px'}}></i>
                </MyButton>
            </div>
        </div>
    )
}
export default Projects;
