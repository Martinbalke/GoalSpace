import React from 'react';
import linked from '../images/linkedin.png'
import github from '../images/github.png'
function Footer(props) {

  return (<div className='footer'>

    <p className="footer__copy">
      Goalspace is &copy; 2020 Martin Balke 
    </p>
    <div className="footer__socials">
      <a href="https://www.linkedin.com/in/martinbalke/"  target="_blank" rel='noopener noreferrer'><img src={linked} alt='A link to the authors linked in' className="footer__social"/></a>
      <a href="https://github.com/Martinbalke"  target="_blank" rel='noopener noreferrer'><img src={github} alt="A link to the authors github" className="footer__social"/></a>
    </div>
  </div>);
}


export default Footer;