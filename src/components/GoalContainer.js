import React from 'react';
import Goal from './Goal';
import { connect } from 'react-redux';

function GoalContainer({state}) {

  function generateChildren(){
    return state.goals.map( (child, index) => <Goal/>);
  }

  return (
    <div className="goalContainer">
      {generateChildren()}
    </div>
  );
}

const mSTP = state => ({});

export default connect(mSTP)(GoalContainer);