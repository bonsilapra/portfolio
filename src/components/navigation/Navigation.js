import React, {useState, useEffect} from 'react';
import './Navigation.css';
import { MyButton } from './../myButtons/MyButtons.js';
import { debounce } from './Helper.js';



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


    return (
        <div className='navigation' style={{ top: visible ? '0' : '-100px' }}>
            <div className='navigation-container'>
                <a href="https://github.com/bonsilapra"
                    target='blank'
                    aria-label='GitHub'
                    className='social-logo'
                    title="GitHub"
                >
                    <i className='fab fa-github' />
                </a>
                <div className= {click ? 'nav-menu active' : 'nav-menu'}>
                    <div className={click ? 'mobile' : ''}>
                        <MyButton
                            buttonStyle='btn--mobile-menu'
                            buttonShape='btn--mobile'
                            buttonSize='btn--large-mobile'
                            onClick={() => {scrollTo('aboutMe'); closeMobileMenu()}}
                        >
                            About me
                        </MyButton>  
                    </div>  
                    <div className={click ? 'mobile' : ''}>
                        <MyButton
                            buttonStyle='btn--mobile-menu'
                            buttonShape='btn--mobile'
                            buttonSize='btn--large-mobile'
                            onClick={() => {scrollTo('projects'); closeMobileMenu()}}
                        >
                            Projects
                        </MyButton>   
                    </div>
                    <div className={click ? 'mobile' : ''}>
                        <MyButton
                            buttonStyle='btn--mobile-menu'
                            buttonShape='btn--mobile'
                            buttonSize='btn--large-mobile'
                            onClick={() => {scrollTo('skills'); closeMobileMenu()}}
                        >
                            Skills
                        </MyButton>  
                    </div>
                    <div className={click ? 'mobile' : ''}> 
                        <MyButton
                            buttonStyle='btn--mobile-menu'
                            buttonShape='btn--mobile'
                            buttonSize='btn--large-mobile'
                            onClick={() => {scrollTo('hobbies'); closeMobileMenu()}}
                        >
                            My hobbies
                        </MyButton>   
                    </div> 
                    <div className={click ? 'mobile' : ''}> 
                        <MyButton
                            buttonStyle='btn--mobile-menu'
                            buttonShape='btn--mobile'
                            buttonSize='btn--large-mobile'
                            onClick={() => {scrollTo('dogs'); closeMobileMenu()}}
                        >
                            My dogs
                        </MyButton>
                    </div>
                    <div className={click ? 'mobile' : ''}>
                        <MyButton
                            buttonStyle='btn--mobile-menu'
                            buttonShape='btn--mobile'
                            buttonSize='btn--large-mobile'
                            onClick={() => {scrollTo('contact'); closeMobileMenu()}}
                        >
                            Contact
                        </MyButton>   
                    </div>        
                </div>
                <div className='navigation-link-wrapper'>
                    <div>
                        <MyButton
                            buttonStyle='btn--primary-rev'
                            buttonShape='btn--square'
                            buttonSize='btn--large'
                            onClick={() => {scrollTo('aboutMe'); closeMobileMenu()}}
                        >
                            About me
                        </MyButton>  
                    </div>  
                    <div>
                        <MyButton
                            buttonStyle='btn--primary-rev'
                            buttonShape='btn--square'
                            buttonSize='btn--large'
                            onClick={() => {scrollTo('projects'); closeMobileMenu()}}
                        >
                            Projects
                        </MyButton>   
                    </div>
                    <div>
                        <MyButton
                            buttonStyle='btn--primary-rev'
                            buttonShape='btn--square'
                            buttonSize='btn--large'
                            onClick={() => {scrollTo('skills'); closeMobileMenu()}}
                        >
                            Skills
                        </MyButton>  
                    </div>
                    <div> 
                        <MyButton
                            buttonStyle='btn--primary-rev'
                            buttonShape='btn--square'
                            buttonSize='btn--large'
                            onClick={() => {scrollTo('hobbies'); closeMobileMenu()}}
                        >
                            My hobbies
                        </MyButton>   
                    </div> 
                    <div> 
                        <MyButton
                            buttonStyle='btn--primary-rev'
                            buttonShape='btn--square'
                            buttonSize='btn--large'
                            onClick={() => {scrollTo('dogs'); closeMobileMenu()}}
                        >
                            My dogs
                        </MyButton>
                    </div>
                    <div>
                        <MyButton
                            buttonStyle='btn--primary-rev'
                            buttonShape='btn--square'
                            buttonSize='btn--large'
                            onClick={() => {scrollTo('contact'); closeMobileMenu()}}
                        >
                            Contact
                        </MyButton>   
                    </div>        
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
