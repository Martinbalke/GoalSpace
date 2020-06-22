import React from 'react';
function Hero(props) {

  return (<div className='hero'>
    <h2 className='hero__header'>GoalSpace</h2>
    <p className='hero__subtext'>Take the work out of working towards your goals</p>
      {/* <a href='#'>
        <svg className='hero__svg' viewBox="0 0 100 100"  xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M23.245 20l-11.245-14.374-11.219 14.374-.781-.619 12-15.381 12 15.391-.755.609z"/></svg>
      </a> */}
  </div>);
}


export default Hero;