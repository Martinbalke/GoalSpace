import React from 'react';
function Hero(props) {

  return (
  <section className='hero'>
    <h1 className='hero__header'>
      <div className="hero__bubbles">
        <div/>
        <div/>
        <div/>
      </div>
      <span className='hero__header-logo'>GS</span>
      <span className='hero__header-text-1'>Set a meaningful goal</span>
      <br></br>
      <span className='hero__header-text-2'>Accomplish it with daily habits</span>
    </h1>
    <div className="hero__shapes"/>
    <nav className="hero__nav">
      <p>JUMP TO</p>
      <a href='#login'className="hero__nav-1">Login</a>
      <a href='#goals'className="hero__nav-2">Yearly Goals</a>
      <a href='#footer'className="hero__nav-3">Contact us</a>
    </nav>
  </section>);
}


export default Hero;