import React from 'react';
function Hero(props) {

  return (
    <section className='hero'>
      <h1 className='hero__header'>
        <div className="hero__bubbles">
          <div /><div /><div /><div /><div /><div />
        </div>
        <span className='hero__header-logo'>Goalspace</span>
        <span className='hero__header-text-1'>From daily <em>habits</em> to finished <em>goals</em></span>
      </h1>
      <div className="hero__buttons">
        <button className='btn btn-hero btn-hero--outline'>Learn more</button>
        <button className='btn btn-hero btn-hero--solid'>Login</button>
      </div>
    </section>);
}


export default Hero;