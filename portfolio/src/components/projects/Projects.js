import React from 'react';
import '../Commons.css';
import './Projects.css';
import Project from './Project';
import todo from '../../images/todo.png'
import portfolio from '../../images/portfolio.png'
import yourshelfy from '../../images/yourshelfy.png'
import kgp from '../../images/kgp.png'
import { MyButton } from '../myButtons/MyButtons.js';


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
                <Project 
                    appName='Mountains'
                    appDescription='App about mountain trips'
                    appIcons={["React", "JavaScript", "HTML", "CSS"]}  
                    img={kgp} 
                    linkLive='http://joanna-falkowska.pl/trips/'
                    linkGithub='https://github.com/bonsilapra/mountains' 
                />
                <Project 
                    appName='Yourshelfy'
                    appDescription='App to keep order'
                    appIcons={["React", "Redux", "JavaScript", "HTML", "CSS"]} 
                    img={yourshelfy} 
                    linkLive=''
                    linkGithub='https://github.com/bonsilapra/yourshelfy' 
                />
                <Project 
                    appName='Portfolio'
                    appDescription='It is my personal website. Here you can find my portfolio and information about me. While creating this website, I mainly practiced using CSS.'
                    appIcons={["React", "JavaScript", "HTML", "CSS"]}  
                    img={portfolio} 
                    linkLive=''
                    linkGithub='https://github.com/bonsilapra/portfolio' 
                />
                <Project 
                    appName='Todo App'
                    appDescription='This is a simple app created to organize daily tasks. App allows to add, edit, check/uncheck and remove tasks. It was created to practice basic skills in React.js'
                    appIcons={["React", "JavaScript", "HTML", "CSS"]}  
                    img={todo} 
                    linkLive=''
                    linkGithub='https://github.com/bonsilapra/todo-list' 
                />
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
