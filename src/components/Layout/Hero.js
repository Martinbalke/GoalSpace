import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {Link} from "react-router-dom";


function Hero() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <div className="auto">
      <section className='hero' id='Hero'>
        <h1 className='hero__header'>
          <div className="hero__bubbles">
            <div /><div /><div /><div /><div /><div />
          </div>
          <span className='hero__header-logo'>Goalspa ce</span>
          <span className='hero__header-text-1'>From daily <em>habits</em> to finished <em>goals</em></span>
        </h1>
        <div className="hero__buttons">
          <Link to='/about'>
            <button className='btn btn-hero btn-hero--outline'>Learn more</button>
          </Link>
          <button className='btn btn-hero btn-hero--solid' onClick={() => isAuthenticated ? 'TODO: MAKE THIS SCROLL TO GOALS WHEN LOGGED IN' : loginWithRedirect()}>{isAuthenticated ? 'Goals' : 'Login'}</button>
        </div>
      </section>

    </div>
  );
}


export default Hero;