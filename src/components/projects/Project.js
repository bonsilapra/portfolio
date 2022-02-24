import React from 'react';
import '../Commons.css';
import './Projects.css';
import { MyButton } from '../myButtons/MyButtons.js';


function Project({appName, appDescription,appIcons, img, linkLive, linkGithub}) {


    return (
        <div className='project-container'>
            <div className='project-description'>
                <div className='project-text'>
                    <h2>{appName}</h2>
                    <p>{appDescription}</p>
                    <div className='project-icons'>
                        {appIcons &&
                        appIcons.map((icon) =>
                            <div key={icon} className='project-icon'>
                                <MyButton
                                    buttonStyle='btn--tech'
                                    buttonShape='btn--square'
                                    buttonSize='btn--medium'
                                    disabled={true}
                                    aria-label='project-tech'
                                >
                                    {icon}
                                </ MyButton>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className='project-img-container'>
                <img src={img} alt='project-img' className='project-img'/>
                <div className='project-links'>
                    <div>
                        <a href={linkLive} target='_blank' rel='noreferrer'>
                            <MyButton
                                buttonStyle='btn--red'
                                buttonShadow='btn--light'
                                buttonShape='btn--square'
                                buttonSize='btn--large'
                                aria-label='Live-demo'
                            >
                                LIVE DEMO
                            </ MyButton>
                        </a>
                    </div>
                    <div>
                        <a href={linkGithub} target='_blank' rel='noreferrer'>
                            <MyButton
                                buttonStyle='btn--primary'
                                buttonShadow='btn--light'
                                buttonShape='btn--square'
                                buttonSize='btn--large'
                                aria-label='Github'
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
