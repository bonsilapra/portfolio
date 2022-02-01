import React from 'react';
import '../Commons.css';
import './Projects.css';
import Project from './Project';
import todo from '../../images/todo.png'
import portfolio from '../../images/portfolio.png'
import yourshelfy from '../../images/yourshelfy.png'
import kgp from '../../images/kgp.png'
import ScrollButtons from '../ScrollButtons.js';



function Projects() {


    return (
        <div className='projects-page-container'>
            <div className='title light'>
                <h1>Projects</h1>
            </div>
            <div className='projects-page-content'>
                <Project 
                    appName='Korona Gór Polski i inne góskie wycieczki'
                    appDescription='This website is dedicated to mountain trips. It contains descriptions, routes and photos of my trips in the Polish mountains. You can also find there descriptions of mountain ranges  and interesting attractions in the regions that I have visited so far.'
                    appIcons={["React", "JavaScript", "HTML", "CSS"]}  
                    img={kgp} 
                    linkLive='http://joanna-falkowska.pl/trips/'
                    linkGithub='https://github.com/bonsilapra/mountains' 
                />
                <Project 
                    appName='Yourshelfy'
                    appDescription='An app to keep order. I decided to create this application to keep up-to-date information on the amount of food products in the apartment and the basement. It helps me prevent food waste, but it can also be used for any other purposes. While creating this application, I learned how to use React Redux.'
                    appIcons={["React", "Redux", "JavaScript", "HTML", "CSS"]} 
                    img={yourshelfy} 
                    linkLive='http://joanna-falkowska.pl/yourshelfy/'
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
                    linkLive='http://joanna-falkowska.pl/todo-list/'
                    linkGithub='https://github.com/bonsilapra/todo-list' 
                />
            </div>
            <ScrollButtons previous='aboutMe' next='skills' />
        </div>
    )
}
export default Projects;
