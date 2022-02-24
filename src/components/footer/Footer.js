import React from 'react';
import './Footer.css';
import { MyButton } from './../myButtons/MyButtons.js';
import CV from '../../pdf/CV.pdf'




function Footer() {

    const scrollToTop = () =>{
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    };

    const socialLinks = [
        {
            title: 'Email',
            target: '',
            rel:'',
            link: 'mailto:joanna.falkowska.dev@gmail.com',
            icon: 'far fa-envelope'
        },
        {
            title: 'CV',
            target: '_blank',
            link: CV,
            rel:'noreferrer',
            icon: 'far fa-address-card'
        },
        {
            title: 'GitHub',
            target: '_blank',
            rel:'noreferrer',
            link: 'https://github.com/bonsilapra',
            icon: 'fab fa-github'
        },
        {
            title: 'LinkedIn',
            target: '_blank',
            rel:'noreferrer',
            link: 'https://www.linkedin.com/in/joanna-falkowska-8a30b3150/',
            icon: 'fab fa-linkedin'
        },
        {
            title: 'Instagram',
            target: '_blank',
            rel:'noreferrer',
            link: 'https://www.instagram.com/bonsilapra/',
            icon: 'fab fa-instagram'
        },
    ]

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
                    {socialLinks.map((link) =>
                        <a 
                            href={link.link}
                            target={link.target}
                            rel={link.rel}
                            className='social-logo'
                            title={link.title}
                            key={link.title}
                        >
                            <i className={link.icon} />
                        </a>
                    )}
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
