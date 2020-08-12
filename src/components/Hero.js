import React, { useState } from 'react';
import About from './About';
import { AnimatePresence } from 'framer-motion'
function Hero(props) {
  const [showAbout, setShowAbout] = useState(false);
  return (
    <>
      <section className='hero'>
        <h1 className='hero__header'>
          <div className="hero__bubbles">
            <div /><div /><div /><div /><div /><div />
          </div>
          <span className='hero__header-logo'>Goalspace</span>
          <span className='hero__header-text-1'>From daily <em>habits</em> to finished <em>goals</em></span>
        </h1>
        <div className="hero__buttons">
          <button className='btn btn-hero btn-hero--outline' onClick={() => setShowAbout(true)}>Learn more</button>
          <button className='btn btn-hero btn-hero--solid'>Login</button>
        </div>
      </section>
      <AnimatePresence>
        {showAbout && (
          <About callback={setShowAbout} />
        )}
      </AnimatePresence>
    </>
  );
}


export default Hero;