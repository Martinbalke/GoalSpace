import React from 'react';
function Footer(props) {

  return (
  <footer className='footer'>

    <p className="footer__copy">
      Goalspace is &copy; 2020 Martin Balke 
    </p>
    <div className="footer__socials">
      <a className='footer__linked' href="https://www.linkedin.com/in/martinbalke/"  target="_blank" rel='noopener noreferrer'>&nbsp;</a>
      <a className='footer__git' href="https://github.com/Martinbalke"  target="_blank" rel='noopener noreferrer'>&nbsp;</a>
    </div>
  </footer>);
}


export default Footer;