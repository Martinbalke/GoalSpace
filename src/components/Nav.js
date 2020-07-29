import React from 'react';


function Nav() {
  return (
  <div class="navigation">
      <input type="checkbox" class="navigation__checkbox" id="nav-check"/>
      <label for="nav-check" class="navigation__button">
          <span class="navigation__icon">&nbsp;</span>
      </label>
      <div class="navigation__background">&nbsp;</div>
      <nav class="navigation__nav">
          <ul class="navigation__list">
              <li class="navigation__item"><a href="#chart" class="navigation__link">Login</a></li>
              <li class="navigation__item"><a href="#chart" class="navigation__link">Goals</a></li>
              <li class="navigation__item"><a href="#chart" class="navigation__link">Contact</a></li>
              </ul>
      </nav>
  </div>


  )
}



export default Nav;