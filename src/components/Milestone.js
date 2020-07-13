import React, {useState} from 'react';
import {updateMilestone} from '../store/goalReducer';
import { connect } from 'react-redux';

const Milestone = ({ dispatch, goal,index }) => {
  const [milestone, setMilestone]= useState(goal.milestone || '');
 
  return (
    <div className='milestone'>
      <form className='milestone__form' onSubmit={(e) => {
        e.preventDefault();
        goal.milestone = milestone;
        dispatch(updateMilestone(goal, index));
      }
      }>
        <textarea
        autoFocus
        onChange={(e) => setMilestone(e.target.value)}
        className='milestone__textarea' 
        defaultValue={goal.milestone ? `${goal.milestone}` : ``}
        placeholder='Create a milestone for your goal'
        />
        <button type='submit' className="milestone__btn btn btn-blob">{goal.milestone ? 'Finish' : 'Create'}</button>
      </form>
    </div>
  )
}

const mSTP = state => ({
  goals: state.goals,
});


export default connect(mSTP)(Milestone);