import React, {useState} from 'react';
import './Commons.css';
import { MyButton } from './myButtons/MyButtons.js';


function Projects() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);



    return (
        <div className='projects-page-container'>

        </div>
    )
}
export default Projects;
