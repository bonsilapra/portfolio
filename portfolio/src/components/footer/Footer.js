import React from 'react';
import './Footer.css';
import { MyButton } from './../myButtons/MyButtons.js';



function Footer() {

    const scrollToTop = () =>{
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    };

    return (
        <div className='footer'>
            <div className='button-container'>
                <MyButton
                    buttonStyle='btn--primary-rev-arrow'
                    buttonShape='btn--round'
                    onClick={scrollToTop}
                    title="Back to top"
                >
                    <i className="fas fa-angle-double-up" style={{fontSize:'25px'}}></i>
                </MyButton>
            </div>
            <div className='footer-container'>
                <div className='footer-link-wrapper'>
                    <a href="mailto:joanna.falkowska93@gmail.com"
                        aria-label='Email'
                        className='social-logo'
                        title="Email"
                    >
                        <i className='far fa-envelope' />
                    </a>
                    <a href="https://github.com/bonsilapra"
                        target='blank'
                        aria-label='GitHub'
                        className='social-logo'
                        title="GitHub"
                    >
                        <i className='fab fa-github' />
                    </a>
                    <a href="https://www.linkedin.com/in/joanna-falkowska-8a30b3150/"
                        target='blank'
                        aria-label='LinkedIn'
                        className='social-logo'
                        title="LinkedIn"
                    >
                        <i className='fab fa-linkedin' />
                    </a>
                    <a href="https://www.instagram.com/bonsilapra/"
                        target='blank'
                        aria-label='Instagram'
                        className='social-logo'
                        title="Instagram"
                    >
                        <i className='fab fa-instagram' />
                    </a>
                </div>
                <div className='footer-small'>
                    <small className='website-rights'>Copyright© {new Date().getFullYear()} - All Rigths reserved</small>
                    <small className='website-rights'>Created by Joanna Falkowska</small>
                </div>
            </div>
        </div>
    )
}
export default Footer;
