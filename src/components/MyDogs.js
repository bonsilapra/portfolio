import React from 'react';
import './Commons.css';
import './MyDogs.css';
import ScrollButtons from './ScrollButtons.js';

function MyDogs() {


    return (
        <div className='dogs-page-container'>
            <div className='title dark'>
                <h1>My dogs</h1>
            </div>
            <div className='dogs-page-content'>
                <div>
                    <p>lorem ipsum</p>
                </div>
                <div>
                <p>lorem ipsum</p>

                    <img></img>
                </div>
            </div>
            <ScrollButtons previous='hobbies' next='contact' />
        </div>
    )
}
export default MyDogs;
