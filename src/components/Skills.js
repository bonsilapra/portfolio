import React from 'react';
import './Commons.css';
import './Skills.css';
import ScrollButtons from './ScrollButtons.js';
import reactLogo from '../images/logos/reactLogo.webp'
import reduxLogo from '../images/logos/reduxLogo.webp'
import jsLogo from '../images/logos/jsLogo2.webp'
import htmlLogo from '../images/logos/htmlLogo.webp'
import cssLogo from '../images/logos/cssLogo.webp'
import sassLogo from '../images/logos/sassLogo.webp'
import githubLogo from '../images/logos/githubLogo.webp'
import vscLogo from '../images/logos/vscLogo.webp'
import trelloLogo from '../images/logos/trelloLogo.webp'
import autocadLogo from '../images/logos/autocadLogo.webp'



function Skills() {

    const skillLogos = [{logo:reactLogo, name:"React"}, {logo:reduxLogo, name:"React Redux"}, {logo:jsLogo, name:"JavaScript"}, {logo:htmlLogo, name:"HTML"}, {logo:cssLogo, name:"CSS"}, {logo:sassLogo, name:"SASS"}]
    const toolsLogos = [{logo:githubLogo, name:"GitHub"}, {logo:vscLogo, name:"Visual Studio Code"}, {logo:trelloLogo, name:"Trello"}, {logo:autocadLogo, name:"AutoCad"}]

    return (
        <div className='skills-page-container'>
            <div className='title dark'>
                <h1>Skills</h1>
            </div>
            <div className='skills-page-content'>
                <div className='skills-text'>
                    <h2>Main skills:</h2>
                    <div className='skills-logos'>
                        {skillLogos.map((logo) =>
                            <div key={logo.name} className='skills-logo'>
                                <div className='skills-logo-img-container'>
                                    <img src={logo.logo} alt="react-logo" className='skills-logo-img'/>
                                </div>
                                <h4>{logo.name}</h4>
                            </div>
                        )}
                    </div>
                </div>
                <div className='skills-text'>
                    <h2>Tools:</h2>
                    <div className='skills-logos'>
                        {toolsLogos.map((logo) =>
                            <div key={logo.name} className='skills-logo'>
                                <div className='skills-logo-img-container'>
                                    <img src={logo.logo} alt="react-logo" className='skills-logo-img'/>
                                </div>
                                <h4>{logo.name}</h4>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <ScrollButtons previous='projects' next='hobbies' />
        </div>
    )
}
export default Skills;
