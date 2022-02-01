import React from 'react';
import './Commons.css';
import './Skills.css';
import ScrollButtons from './ScrollButtons.js';
import reactLogo from '../images/logos/reactLogo.png'
import reduxLogo from '../images/logos/reduxLogo.png'
import jsLogo from '../images/logos/jsLogo2.png'
import htmlLogo from '../images/logos/htmlLogo.png'
import cssLogo from '../images/logos/cssLogo.png'
import githubLogo from '../images/logos/githubLogo.png'
import vscLogo from '../images/logos/vscLogo.png'
import trelloLogo from '../images/logos/trelloLogo.png'
import autocadLogo from '../images/logos/autocadLogo.png'



function Skills() {

    const skillLogos = [{logo:reactLogo, name:"React"}, {logo:reduxLogo, name:"Redux"}, {logo:jsLogo, name:"JavaScript"}, {logo:htmlLogo, name:"HTML"}, {logo:cssLogo, name:"CSS"}]
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
