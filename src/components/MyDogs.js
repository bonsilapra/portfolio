import React, {useState} from 'react';
import './Commons.css';
import './MyDogs.css';
import ScrollButtons from './ScrollButtons.js';
import rico from '../images/photos/rico.jpg';
import luna from '../images/photos/luna.jpg';

function MyDogs() {

    const [showingBarkRico, setShowBarkRico] = useState(false);
    const [showingBarkLuna, setShowBarkLuna] = useState(false);
    let ricoTimeout;
    let lunaTimeout;

    const handleShowBarkRico = () => {
        if (ricoTimeout) {
            clearTimeout(ricoTimeout)
        }
        setShowBarkRico(true);
        ricoTimeout = setTimeout(() => {
            setShowBarkRico(false);
        }, 500);
    }

    const handleShowBarkLuna = () => {
        if (lunaTimeout) {
            clearTimeout(lunaTimeout)
        }
        setShowBarkLuna(true);
        lunaTimeout = setTimeout(() => {
            setShowBarkLuna(false);
        }, 500);
    }

    return (
        <div className='dogs-page-container'>
            <div className='title dark'>
                <h1>My dogs</h1>
            </div>
            <div className='dogs-page-content'>
                <div className='dogs-img-container'>
                        <button className='dogs-button'
                            onClick={handleShowBarkRico}
                            title='Rico'
                        >
                            <img src={rico} alt='Rico' className='dogs-img' /> 
                            <div className={ showingBarkRico ? 'bark-shown' : 'bark-hidden'}>
                                <h1>Hau!</h1> 
                            </div>
                        </button>
                    <button className='dogs-button'
                        onClick={handleShowBarkLuna}
                        title='Luna'
                    >
                        <div className={ showingBarkLuna ? 'bark-shown' : 'bark-hidden'}>
                            <h1>Woof!</h1> 
                        </div>
                        <img src={luna} alt='Luna' className='dogs-img' /> 
                    </button>
                </div>
                <div className='dogs-text-container'>
                    <p>I would like to introduce you my two dogs - <b>Rico</b> (also known as <b>Rysiu</b>) and <b>Luna</b> (usually called <b>Lusia</b>) </p>
                    <p>They are mongrels that bring a lot of joy to life. Currently they live with my parents in Konin.</p>
                </div>
            </div>
            <ScrollButtons previous='hobbies' next='contact' />
        </div>
    )
}
export default MyDogs;
