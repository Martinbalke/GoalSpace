import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';

function Popup({ close, dispatch, index, goals }) {
  const [goal, setGoal] = useState({
    yearly: '',
    habit1: '',
    habit2: '',
    habit3: '',
  });

  //Credit to Ben Bud github.com/benox3 for this code functionality
  const popupRef = useRef(null);
  useClosePopup(popupRef);
  function useClosePopup(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          close()
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  useEffect(() => {
    if (index !== undefined && goals[index]) setGoal(goals[index]);
  }, [])



  return (
    <div className='popup' ref={popupRef}>
  
      <form className="popup__form" onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: 'NEW_GOAL', goal, index })
        close();
      }}>
        <button className='btn btn--close popup__close' onClick={close}/>
        <h3 className='popup__tertiary'>Set a new goal</h3>
        <label htmlFor="yearly" className="popup__yearly">
          Yearly Goal
          <input type="text" className="popup__yearly-input" id='yearly' required defaultValue={goal.yearly} onChange={(e) => {
            e.preventDefault();
            setGoal({ ...goal, yearly: e.target.value })
          }} />
        </label>
        <div className="popup__habits">
          <label htmlFor="habit1">
            Habit 1
            <input type="text" id='habit1' required defaultValue={goal.habit1} onChange={(e) => {
              e.preventDefault();
              setGoal({ ...goal, habit1: e.target.value })
            }} />
          </label>
          <label htmlFor="habit2">
            Habit 2
            <input type="text" id='habit2' required defaultValue={goal.habit2} onChange={(e) => {
              e.preventDefault();
              setGoal({ ...goal, habit2: e.target.value })
            }} />
          </label>
          <label htmlFor="habit3">
            Habit 3
            <input type="text" id='habit3' required defaultValue={goal.habit3} onChange={(e) => {
              e.preventDefault();
              setGoal({ ...goal, habit3: e.target.value })
            }} />
          </label>
        </div>
        <button type='submit' className='btn popup__submit' />
      </form>

    </div>);
}
const mSTP = state => ({
  goals: state.goals,
});

export default connect(mSTP)(Popup);