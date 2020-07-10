import React, {useState} from 'react';


function Input({defaultValue, callback, className, id, labelText}){

 const [text] = useState(defaultValue || '');

  const inputTextChange = ((e) => {
    e.preventDefault();
    callback(e.target.value);
  })
  return(
    <div className={className}>
      <input type="text" required id={id} defaultValue={text} onChange={(e) => inputTextChange(e)} />
      <label htmlFor={id}>{labelText}</label>
    </div>
  )
  

}


export default Input;