import React, { useState } from 'react';
import { About } from '../Components';
import { AnimatePresence } from 'framer-motion'
import { useAuth0 } from '@auth0/auth0-react';


function Hero() {

  const [showAbout, setShowAbout] = useState(false);
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <>
      <section className='hero' id='Hero'>
        <h1 className='hero__header'>
          <div className="hero__bubbles">
            <div /><div /><div /><div /><div /><div />
          </div>
          <span className='hero__header-logo'>Goalspace</span>
          <span className='hero__header-text-1'>From daily <em>habits</em> to finished <em>goals</em></span>
        </h1>
        <div className="hero__buttons">
          <button className='btn btn-hero btn-hero--outline' onClick={() => setShowAbout(true)}>Learn more</button>
          <button className='btn btn-hero btn-hero--solid' onClick={() => isAuthenticated ? 'TODO: MAKE THIS SCROLL TO GOALS WHEN LOGGED IN' : loginWithRedirect()}>{isAuthenticated ? 'Goals' : 'Login'}</button>
        </div>
      </section>
      <AnimatePresence>
        {showAbout && (<About callback={setShowAbout} />)}
      </AnimatePresence>
    </>
  );
}


export default Hero;