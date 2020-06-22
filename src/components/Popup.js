import React from 'react';

function Popup({close}) {

  return (<div className='popup'>
    <form onSubmit='' className="popup__form">
      <button className='btn btn--close popup__btn' onClick={close}>close</button>
      <label htmlFor="yearly" className="popup__yearly">
        <input type="text" className="popup__yearly-input" id='yearly' />
      </label>
      <label htmlFor="habit1" className="popup__habit1">
        <input type="text" className="popup__habit1-input" id='yearly' />
      </label>
      <label htmlFor="habit2" className="popup__habit2">
        <input type="text" className="popup__habit2-input" id='yearly' />
      </label>
      <label htmlFor="habit3" className="popup__habit3">
        <input type="text" className="popup__habit3-input" id='yearly' />
      </label>
      <button type='submit' className='btn btn--close popup__btn' onClick='' />
    </form>

  </div>);
}


export default Popup;