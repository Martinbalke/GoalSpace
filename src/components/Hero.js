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
    </section>);
}


export default Hero;