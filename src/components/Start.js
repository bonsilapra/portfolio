import React, {useState} from 'react';
import './Commons.css';
import { MyButton } from './myButtons/MyButtons.js';


function Start() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);



    return (
        <div className='start-page-container'>
            <div className='start-page-content'>
                <h1>Joanna Falkowska</h1>
                <h3>Front-End developer</h3>
            </div>
            <div className='start-page-buttons'>
                    <div className='start-page-button'>
                        <MyButton
                            buttonStyle='btn--primary'
                            buttonSize='btn--large'
                        >
                            Projects
                        </MyButton>
                    </div>
                    <div className='start-page-button'>
                        <MyButton
                            buttonStyle='btn--red'
                            buttonSize='btn--large'
                        >
                            Contact
                        </MyButton>
                    </div>
                </div>
            <div className='start-button-container'>
                <MyButton
                    buttonStyle='btn--primary-rev-start'
                    buttonShape='btn--round'
                    // onClick={scrollToTop}
                >
                    <i className="fas fa-chevron-down" style={{fontSize:'25px'}}></i>
                </MyButton>
            </div>
        </div>
    )
}
export default Start;
