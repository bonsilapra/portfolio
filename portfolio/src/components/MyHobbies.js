import React from 'react';
import './Commons.css';
import './MyHobbies.css';
import ScrollButtons from './ScrollButtons.js';


function MyHobbies() {

    return (
        <div className='hobbies-page-container'>
            <div className='title light'>
                <h1>My hobbies</h1>
            </div>
            <div className='hobbies-page-content'>
                <div>
                    <p>lorem ipsum</p>
                </div>
                <div>
                <p>lorem ipsum</p>

                    <img></img>
                </div>
            </div>
            <ScrollButtons previous='skills' next='dogs' />
        </div>
    )
}
export default MyHobbies;
