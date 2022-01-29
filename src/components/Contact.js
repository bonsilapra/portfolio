import React, {useState} from 'react';
import './Commons.css';
import { MyButton } from './myButtons/MyButtons.js';


function Contact() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);



    return (
        <div className='contact-page-container'>

        </div>
    )
}
export default Contact;
