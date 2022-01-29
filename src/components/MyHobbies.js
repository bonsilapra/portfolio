import React, {useState} from 'react';
import './Commons.css';
import { MyButton } from './myButtons/MyButtons.js';


function MyHobbies() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);



    return (
        <div className='hobbies-page-container'>

        </div>
    )
}
export default MyHobbies;
