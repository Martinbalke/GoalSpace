import React, { useRef } from 'react';
import { useAuth0 } from '@auth0/auth0-react';


function Nav() {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    const checkBoxEl = useRef(null);

    function handleClick() {
        checkBoxEl.current.checked = false;
    }

    return (
        <div className='navigation'>
            <input type='checkbox' className='navigation__checkbox' id='nav-check' ref={checkBoxEl} />
            <label htmlFor='nav-check' className='navigation__button'>
                <span className='navigation__icon'>&nbsp;</span>
            </label>
            <div className='navigation__background'>&nbsp;</div>
            <nav className='navigation__nav'>
                <ul className='navigation__list'>
                    <li className='navigation__item'><a href='#Hero' onClick={isAuthenticated ? logout : loginWithRedirect} className='navigation__link'>{isAuthenticated ? 'Logout' : 'Login'}</a></li>
                    <li className='navigation__item'><a href='#Goals' onClick={handleClick} className='navigation__link'>Goals</a></li>
                    <li className='navigation__item'><a href='#Contact' onClick={handleClick} className='navigation__link'>Contact</a></li>
                </ul>
            </nav>
        </div>


    )
}



export default Nav;