import React from 'react';
function Hero(props) {

  return (
  <div className='hero'>
    <h1 className='hero__header'>GoalSpace</h1>
    <div className="hero__shapes"/>
      <p className='hero__subtext'>Take the work out of working &nbsp;&nbsp;&nbsp; towards your goals</p>
    <nav className="hero__nav">
      <p>JUMP TO</p>
      <a href='#login'className="hero__nav-1">Login</a>
      <a href='#goals'className="hero__nav-2">Yearly Goals</a>
      <a href='#footer'className="hero__nav-3">Contact us</a>
    </nav>
  </div>);
}


export default Hero;