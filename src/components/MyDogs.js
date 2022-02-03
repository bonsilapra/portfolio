import React, {useState} from 'react';
import './Commons.css';
import './MyDogs.css';
import ScrollButtons from './ScrollButtons.js';
import rico from '../images/photos/rico.jpg';
import luna from '../images/photos/luna.jpg';

function MyDogs() {

    const [showingBark, setShowBark] = useState(false);
    const [barkRico, setRico] = useState('');
    const [barkLuna, setLuna] = useState('');

    const handleShowBark = () => {
        setShowBark(true);
        if (barkRico.length != 0) {
            setTimeout(() => {
                setShowBark(false);
            }, 500);
            setTimeout(() => {
                setRico('')
            },1000)
        } else {
            setTimeout(() => {
                setShowBark(false);
            }, 500);
            setTimeout(() => {
                setLuna('')
            },1000)
        }
    }

    return (
        <div className='dogs-page-container'>
            <div className='title dark'>
                <h1>My dogs</h1>
            </div>
            <div className='dogs-page-content'>
                <div className={ showingBark ? 'bark-shown' : 'bark-hidden'}>
                    <h1>{barkRico}</h1> 
                    <h1>{barkLuna}</h1> 
                </div>
                <div className='dogs-img-container'>
                    <button
                        onClick={()=> {setRico('Hau!'); handleShowBark() }}>
                        <img src={rico} alt='Rico' className='dogs-img' /> 
                    </button>
                    <button
                        onClick={()=> {setLuna('Woof!'); handleShowBark() }}>
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
