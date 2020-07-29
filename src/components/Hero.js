import React from 'react';
function Hero(props) {

  return (
    <section className='hero'>
      <h1 className='hero__header'>
        <div className="hero__bubbles">
          <div /><div /><div /><div /><div /><div />
        </div>
        <span className='hero__header-logo'>GS</span>
        <span className='hero__header-text-1'>Set a meaningful goal</span>
        <br></br>
        <span className='hero__header-text-2'>Accomplish it with daily habits</span>
      </h1>
      <div className="hero__shapes" />
    </section>);
}


export default Hero;