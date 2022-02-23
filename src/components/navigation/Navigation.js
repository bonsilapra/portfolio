import React, {useState, useEffect} from 'react';
import './Navigation.css';
import { MyButton } from './../myButtons/MyButtons.js';
import { debounce } from './Helper.js';
import CV from '../../pdf/CV.pdf'



function Navigation() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);

    const scrollTo = (page) => {
        document.getElementById(page).scrollIntoView({
            behavior: 'smooth'
        })
    }

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const handleScroll = debounce(() => {
        const currentScrollPos = window.pageYOffset;
        if (prevScrollPos - currentScrollPos > 600) {
            setVisible(false)
            if (window.pageYOffset<80) {
                setVisible(true)
            }
        } else {
            setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 0) || currentScrollPos < 10);
        }
        setPrevScrollPos(currentScrollPos);
    }, 100);
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible, handleScroll]);

    const menuButtons =[
        {scroll: 'aboutMe', name: 'About me'},
        {scroll: 'projects', name: 'Projects'},
        {scroll: 'skills', name: 'Skills'},
        {scroll: 'hobbies', name: 'My hobbies'},
        {scroll: 'dogs', name: 'My dogs'},
        {scroll: 'contact', name: 'Contact'}
    ]

    return (
        <div className='navigation' style={{ top: visible ? '0' : '-100px' }}>
            <div className='navigation-container'>
                <a href={CV}
                    target='blank'
                    aria-label='CV'
                    className='social-logo'
                    title="CV"
                >
                    <i className='far fa-address-card' />
                </a>
                <div className= {click ? 'nav-menu active' : 'nav-menu'}>
                    {menuButtons.map((button) =>
                        <div key={button.scroll} className={click ? 'mobile' : ''}>
                            <MyButton
                                buttonStyle='btn--mobile-menu'
                                buttonShape='btn--mobile'
                                buttonSize='btn--large-mobile'
                                onClick={() => {scrollTo(button.scroll); closeMobileMenu()}}
                            >
                                {button.name}
                            </MyButton>  
                        </div>  
                    )}
                </div>
                <div className='navigation-link-wrapper'>
                    {menuButtons.map((button) =>
                        <div key={button.scroll} className={click ? 'mobile' : ''}>
                            <MyButton
                                buttonStyle='btn--primary-rev'
                                buttonShape='btn--square'
                                buttonSize='btn--large'
                                onClick={() => {scrollTo(button.scroll)}}
                            >
                                {button.name}
                            </MyButton>  
                        </div>  
                    )}
                </div>
                <div className='menu-icon'>
                    <MyButton 
                        buttonStyle='btn--primary-rev'
                        buttonShape='btn--square'
                        buttonSize='btn--large'
                        onClick={handleClick}
                        >
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </MyButton>
                </div>
            </div>
        </div>
    )
}
export default Navigation;
