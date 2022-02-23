import React, { useState } from 'react';
import './Commons.css';
import './Contact.css';
import { MyButton } from './myButtons/MyButtons.js';
import { send } from 'emailjs-com';
import CV from '../pdf/CV.pdf'


function Contact() {

    const scrollTo = (page) => {
        document.getElementById(page).scrollIntoView({
            behavior: 'smooth'
        })
    }

    const [toSend, setToSend] = useState({
        from_name: '',
        from_email: '',
        message: '',
    });

    const [showingAlert, setShowAlert] = useState(false);

    const handleShowAlert = () => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false)
        }, 1500);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_dmage1f',
            'template_mecquqb',
            toSend,
            'user_OWibJ7ElqnKPHwDpMvDqe'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setToSend({
                    from_name: '',
                    from_email: '',
                    message: '',
                });
                handleShowAlert()
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    };
    

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    const links = [
        {link: CV, name: 'CV', icon: 'far fa-address-card'},
        {link: 'https://github.com/bonsilapra', name: 'GitHub', icon: 'fab fa-github'},
        {link: 'https://www.linkedin.com/in/joanna-falkowska-8a30b3150/', name: 'LinkedIn', icon: 'fab fa-linkedin'},
        {link: 'https://www.instagram.com/bonsilapra/', name: 'Instagram', icon: 'fab fa-instagram'},
    ]

    return (
        <div className='contact-page-container'>
            <div className='title light'>
                <h1>Contact</h1>
            </div>
            <div className={ showingAlert ? 'alert-shown' : 'alert-hidden'}>
                <strong>Message was sent</strong> 
            </div>
            <div className='contact-page-content'>
                <div className='contact-links-container'>
                    <h2>E-mail:</h2>
                    <div className='contact-links'>
                        <a href="mailto:joanna.falkowska.dev@gmail.com" title="Email">
                            <i className='far fa-envelope' style={{fontSize:'40px'}} />
                        </a>
                        <h3>joanna.falkowska.dev@<span style={{whiteSpace: "nowrap"}}>gmail</span><span style={{whiteSpace: "nowrap"}}>.com</span></h3>
                    </div>
                    <h2>Links:</h2>
                    {links.map((link) => 
                        <div className='contact-links' key={link.name}>
                            <a href={link.link} target='blank'title={link.name}>
                                <i className={link.icon} style={{fontSize:'40px'}} />
                            </a>
                            <h3>{link.name}</h3>
                        </div>
                    )}
                </div>
                <div className='form-container'>
                    <h2>Write to me:</h2>
                    <form onSubmit={onSubmit}>
                        <label>Your name:</label>
                        <input 
                            type='text' 
                            name='from_name'
                            value={toSend.from_name}
                            onChange={handleChange}
                        />
                        <label>Your e-mail:</label>
                        <input 
                            type='text' 
                            name='from_email'
                            value={toSend.from_email}
                            onChange={handleChange}
                        />
                        <label>Messange:</label>
                        <textarea 
                            name='message' 
                            rows='8'  
                            value={toSend.message}
                            onChange={handleChange}
                        />
                        <button 
                            type='submit'
                            disabled={toSend.from_name.length == 0 || toSend.from_email.length == 0 || toSend.message.length == 0}
                        >
                            SEND <i className="fas fa-paper-plane"></i>
                        </button>
                    </form>
                </div>
            </div>
            <div className='scroll-container' style={{paddingBottom:'30px'}}>
                <MyButton
                    buttonStyle='btn--previous'
                    buttonShadow='btn--light'
                    buttonShape='btn--round'
                    onClick={() => scrollTo('dogs')}
                >
                    <i className="fas fa-chevron-up" style={{fontSize:'25px'}}></i>
                </MyButton>
            </div>
        </div>
    )
}
export default Contact;
