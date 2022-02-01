import React from 'react';
import './Commons.css';
import './AboutMe.css';
import ScrollButtons from './ScrollButtons.js';



function AboutMe() {

    return (
        <div className='about-page-container'>
            <div className='title dark'>
                <h1>About me</h1>
            </div>
            <div className='about-page-content'>
                <div>
                    <p>lorem ipsumfbvzsxvzs </p>
                </div>
                <div>
                <p>lorem ipsum</p>

                    <img></img>
                </div>
            </div>
            <ScrollButtons previous='navigation' next='projects' />
        </div>
    )
}
export default AboutMe;
