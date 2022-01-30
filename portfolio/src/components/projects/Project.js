import React from 'react';
import '../Commons.css';
import './Projects.css';
import { MyButton } from '../myButtons/MyButtons.js';


function Project(appName, appDescription,appIcons, img, linkLive, linkGithub) {


    return (
        <div className='project-container'>
            <div className='project-description'>
                <div className='project-text'>
                    <h2>{appName}Todo app</h2>
                    <p>{appDescription}This is a simple app created to organize daily tasks. App allows to add, edit, check/uncheck and remove tasks. It was created to practice basic skills in React.js</p>
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
            </div>
            <div className='project-img-container'>
                <img src={img} alt="todo" className='project-img'/>
                <div className='project-links'>
                    <div>
                        <a href={linkLive} target='blank'>
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
                        <a href={linkGithub} target='blank'>
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
            </div>
        </div>
    )
}
export default Project;
