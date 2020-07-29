import React from 'react';


function Nav() {
  return (
  <div classNameName="navigation">
      <input type="checkbox" className="navigation__checkbox" id="nav-check"/>
      <label htmlFor="nav-check" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
          <ul className="navigation__list">
              <li className="navigation__item"><a href="#chart" className="navigation__link">Login</a></li>
              <li className="navigation__item"><a href="#chart" className="navigation__link">Goals</a></li>
              <li className="navigation__item"><a href="#chart" className="navigation__link">Contact</a></li>
              </ul>
      </nav>
  </div>


  )
}



export default Nav;