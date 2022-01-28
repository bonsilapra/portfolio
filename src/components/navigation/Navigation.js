import React, {useState, useEffect} from 'react';
import './Navigation.css';
import { MyButton } from './../myButtons/MyButtons.js';


function Navigation() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);




    return (
        <div className='navigation'>
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
                                onClick={closeMobileMenu}
                            >
                                About me
                            </MyButton>  
                        </div>  
                        <div className={click ? 'mobile' : ''}>
                            <MyButton
                                buttonStyle='btn--mobile-menu'
                                buttonShape='btn--mobile'
                                buttonSize='btn--large-mobile'
                                onClick={closeMobileMenu}
                            >
                                Projects
                            </MyButton>   
                        </div>
                        <div className={click ? 'mobile' : ''}>
                            <MyButton
                                buttonStyle='btn--mobile-menu'
                                buttonShape='btn--mobile'
                                buttonSize='btn--large-mobile'
                                onClick={closeMobileMenu}
                            >
                                Skills
                            </MyButton>  
                        </div>
                        <div className={click ? 'mobile' : ''}> 
                            <MyButton
                                buttonStyle='btn--mobile-menu'
                                buttonShape='btn--mobile'
                                buttonSize='btn--large-mobile'
                                onClick={closeMobileMenu}
                            >
                                My hobbies
                            </MyButton>   
                        </div> 
                        <div className={click ? 'mobile' : ''}> 
                            <MyButton
                                buttonStyle='btn--mobile-menu'
                                buttonShape='btn--mobile'
                                buttonSize='btn--large-mobile'
                                onClick={closeMobileMenu}
                            >
                                My dogs
                            </MyButton>
                        </div>
                        <div className={click ? 'mobile' : ''}>
                            <MyButton
                                buttonStyle='btn--mobile-menu'
                                buttonShape='btn--mobile'
                                buttonSize='btn--large-mobile'
                                onClick={closeMobileMenu}
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
                                // onClick={scrollToTop}
                            >
                                About me
                            </MyButton>  
                        </div>  
                        <div>
                            <MyButton
                                buttonStyle='btn--primary-rev'
                                buttonShape='btn--square'
                                buttonSize='btn--large'
                                // onClick={scrollToTop}
                            >
                                Projects
                            </MyButton>   
                        </div>
                        <div>
                            <MyButton
                                buttonStyle='btn--primary-rev'
                                buttonShape='btn--square'
                                buttonSize='btn--large'
                                // onClick={scrollToTop}
                            >
                                Skills
                            </MyButton>  
                        </div>
                        <div> 
                            <MyButton
                                buttonStyle='btn--primary-rev'
                                buttonShape='btn--square'
                                buttonSize='btn--large'
                                // onClick={scrollToTop}
                            >
                                My hobbies
                            </MyButton>   
                        </div> 
                        <div> 
                            <MyButton
                                buttonStyle='btn--primary-rev'
                                buttonShape='btn--square'
                                buttonSize='btn--large'
                                // onClick={scrollToTop}
                            >
                                My dogs
                            </MyButton>
                        </div>
                        <div>
                            <MyButton
                                buttonStyle='btn--primary-rev'
                                buttonShape='btn--square'
                                buttonSize='btn--large'
                                // onClick={scrollToTop}
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
