import React from 'react';
import { connect } from 'react-redux';

const Milestone = ({ dispatch, goal }) => {

  return (
    <div className='milestone'>
      <h3 className='milestone__tertiary'>{goal.milestone ? `${goal.milestone}`: `Create a milestone for your goal`}</h3>
      <button className="milestone__btn btn"></button>
    </div>
  )
}

const mSTP = state => ({});


export default connect(mSTP)(Milestone);