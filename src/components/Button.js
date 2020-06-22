import React from 'react';
import {connect} from 'react-redux';

function Button ({className, dispatch, onClick}){

  return(
    <button className={className} onClick={onClick}></button>
  );
}

const mSTP = state => ({

})
export default connect(mSTP)(Button);