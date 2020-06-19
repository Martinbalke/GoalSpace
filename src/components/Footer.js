import React from 'react';
import linked from '../images/linkedin.png'
import github from '../images/github.png'
function Footer(props) {

  return (<div className='footer'>
    <div className="footer__socials">
      <a href="https://www.linkedin.com/in/martinbalke/" className="footer_social" target="_blank" rel='noopener noreferrer'><img src={linked} alt='A link to the authors linked in'/></a>
      <a href="https://github.com/Martinbalke" className="footer_social" target="_blank" rel='noopener noreferrer'><img src={github} alt="A link to the authors github"/></a>
    </div>
  </div>);
}


export default Footer;