import React from 'react';

export default function Footer() {
  return (
      <footer className='footer' id='Contact'>
        <h3 className='footer__logo'>
          <a href='/' className='footer__logo-link'>Goalspace</a></h3>
        <p className="footer__copy"> &copy; 2020 &nbsp; &nbsp; &nbsp;Martin Balke <span>&</span> Joshua Ho</p>
        <div className="footer__socials">
          <a className='footer__linked' href="https://www.linkedin.com/in/martinbalke/" target="_blank" rel='noopener noreferrer'>&nbsp;</a>
          <a className='footer__git' href="https://github.com/Martinbalke" target="_blank" rel='noopener noreferrer'>&nbsp;</a>
        </div>
      </footer>
   );
}
