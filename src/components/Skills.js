import React, {useState} from 'react';
import './Commons.css';
import { MyButton } from './myButtons/MyButtons.js';


function Skills() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);



    return (
        <div className='skills-page-container'>

        </div>
    )
}
export default Skills;
