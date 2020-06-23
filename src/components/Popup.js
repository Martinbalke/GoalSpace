import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

function Popup({ close, dispatch, thing, goals }) {
  const [goal, setGoal] = useState({
    yearly: '',
    habit1: '',
    habit2: '',
    habit3: '',
  });

  useEffect( () => {
    if (thing !== undefined && goals[thing]) setGoal(goals[thing]);
  })
  
  

  return (<div className='popup'>
    <form onSubmit={(e) => {
      e.preventDefault();
      dispatch({ type: 'NEW_GOAL', goal })
    }}
      className="popup__form">
      <button className='btn btn--close popup__btn' onClick={close}>close</button>
      <label htmlFor="yearly" className="popup__yearly">
        Yearly Goal
      <input type="text" className="popup__yearly-input" id='yearly' defaultValue={goal.yearly} onChange={(e) => {
          e.preventDefault();
          setGoal({ ...goal, yearly: e.target.value })
        }} />
      </label>
      <label htmlFor="habit1" className="popup__habit1">
        Habit 1
        <input type="text" className="popup__habit1-input" id='habit1' defaultValue={goal.habit1} onChange={(e) => {
          e.preventDefault();
          setGoal({ ...goal, habit1: e.target.value })
        }} />
      </label>
      <label htmlFor="habit2" className="popup__habit2" >
        Habit 2
        <input type="text" className="popup__habit2-input" id='habit2' defaultValue={goal.habit2} onChange={(e) => {
          e.preventDefault();
          setGoal({ ...goal, habit2: e.target.value })
        }} />
      </label>
      <label htmlFor="habit3" className="popup__habit3">
        Habit 3
        <input type="text" className="popup__habit3-input" id='habit3' defaultValue={goal.habit3} onChange={(e) => {
          e.preventDefault();
          setGoal({ ...goal, habit3: e.target.value })
        }} />
      </label>
      <button type='submit' className='btn btn--close popup__btn'>Submit</button>
    </form>

  </div>);
}
const mSTP = state => ({
  goals: state.goals,
});

export default connect(mSTP)(Popup);