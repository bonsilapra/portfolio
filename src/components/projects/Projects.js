import React from 'react';
import '../Commons.css';
import './Projects.css';
import Project from './Project';
import todo from '../../images/todo.png'
import todopl from '../../images/todopl.png'
import portfolio from '../../images/portfolio.png'
import yourshelfy from '../../images/yourshelfy.png'
import kgp from '../../images/kgp.png'
import ScrollButtons from '../ScrollButtons.js';



function Projects() {

    const projects = [
        {
            name: 'Korona Gór Polski i inne góskie wycieczki', 
            description: 'This website is dedicated to mountain trips. It contains descriptions, routes and photos of my trips in Polish mountains. You can also find there descriptions of mountain ranges  and interesting attractions in the regions that I have visited so far.',
            icons: ["React", "JavaScript", "HTML", "CSS"],
            image: kgp,
            linkLive: 'http://joanna-falkowska.pl/mountains/',
            linkGithub: 'https://github.com/bonsilapra/mountains'
        },
        {
            name: 'Yourshelfy', 
            description: 'An app to keep order. I decided to create this application to keep up-to-date information on the amount of food products in the apartment and the basement. It helps me prevent food waste, but it can also be used for any other purposes. While creating this application, I learned how to use React Redux.',
            icons: ["React", "Redux", "JavaScript", "HTML", "CSS"],
            image: yourshelfy,
            linkLive: 'http://joanna-falkowska.pl/yourshelfy/',
            linkGithub: 'https://github.com/bonsilapra/yourshelfy'
        },
        {
            name: 'Meal ideas', 
            description: 'This app was created to list and organize meal ideas. It allows you to create a database of different types of meals and sort it according to selected criteria.',
            icons: ["React", "JavaScript", "HTML", "CSS", "SASS"],
            image: portfolio,
            linkLive: 'http://joanna-falkowska.pl/meal-ideas/',
            linkGithub: 'https://github.com/bonsilapra/meal-ideas'
        },
        {
            name: 'Portfolio', 
            description: 'It is my personal website. Here you can find my portfolio and information about me. While creating this website, I mainly practiced using CSS.',
            icons: ["React", "JavaScript", "HTML", "CSS"],
            image: portfolio,
            linkLive: 'http://joanna-falkowska.pl/',
            linkGithub: 'https://github.com/bonsilapra/portfolio'
        },
        {
            name: 'Todo App', 
            description: 'This is a simple app created to organize daily tasks. App allows to add, edit, check/uncheck and remove tasks. It was created to practice basic skills in React.js',
            icons: ["React", "JavaScript", "HTML", "CSS"],
            image: todo,
            linkLive: 'http://joanna-falkowska.pl/todo-list/',
            linkGithub: 'https://github.com/bonsilapra/todo-list'
        },
        {
            name: 'Todo App - polish', 
            description: "The second version of Todo App. It was created at my mother's request. Now she uses it at work. There are some changes like polish language, color and different buttons functionality.",
            icons: ["React", "JavaScript", "HTML", "CSS"],
            image: todopl,
            linkLive: 'http://joanna-falkowska.pl/todo-pl/',
            linkGithub: 'https://github.com/bonsilapra/todo-pl'
        },
    ]

    return (
        <div className='projects-page-container'>
            <div className='title light'>
                <h1>Projects</h1>
            </div>
            <div className='projects-page-content'>
                {projects.map((proj) => 
                    <Project 
                        key={proj.name}
                        appName={proj.name}
                        appDescription={proj.description}
                        appIcons={proj.icons}
                        img={proj.image}
                        linkLive={proj.linkLive}
                        linkGithub={proj.linkGithub}
                    />
                )}
            </div>
            <ScrollButtons previous='aboutMe' next='skills' />
        </div>
    )
}
export default Projects;
