import React from 'react';


function Nav() {
  return (
  <div class="navigation">
      <input type="checkbox" class="navigation__checkbox" id="navi-toggle"/>

      <label for="navi-toggle" class="navigation__button">
          <span class="navigation__icon">&nbsp;</span>
      </label>

      <div class="navigation__background">&nbsp;</div>

      <nav class="navigation__nav">
          <ul class="navigation__list">
              <li class="navigation__item"><a href="#chart" class="navigation__link"><span>01</span>Login</a></li>
              <li class="navigation__item"><a href="#chart" class="navigation__link"><span>02</span>Goals</a></li>
              <li class="navigation__item"><a href="#chart" class="navigation__link"><span>03</span>Contact Us</a></li>
              </ul>
      </nav>
  </div>


  )
}



export default Nav;