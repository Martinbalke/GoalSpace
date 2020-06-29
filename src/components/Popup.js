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
    <div className='popup' >
      <form className="popup__form"
        autocomplete="off"
        ref={popupRef}
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: 'NEW_GOAL', goal, index })
          close();
        }}>
        <button className='btn btn--close popup__close' onClick={close} />
        <h3 className='popup__tertiary'>Set a new goal</h3>
        <div className="popup__input">
          <input type="text" className="popup__yearly-input" id='yearly' required defaultValue={goal.yearly} onChange={(e) => {
            e.preventDefault();
            setGoal({ ...goal, yearly: e.target.value })
          }} />
          <label htmlFor="yearly" className="popup__yearly">Yearly Goal</label>
        </div>
        <div className="popup__habits">
          <div className='popup__input'>
            <input type="text" id='habit1' required defaultValue={goal.habit1} onChange={(e) => {
              e.preventDefault();
              setGoal({ ...goal, habit1: e.target.value })
            }} />
            <label htmlFor="habit1">First Daily Habit</label>
          </div>

          <div className="popup__input">
            <input type="text" id='habit2' required defaultValue={goal.habit2} onChange={(e) => {
              e.preventDefault();
              setGoal({ ...goal, habit2: e.target.value })
            }} />
            <label htmlFor="habit2">Second Daily Habit </label>
          </div>
          <div className="popup__input">
            <input type="text" id='habit3' required defaultValue={goal.habit3} onChange={(e) => {
              e.preventDefault();
              setGoal({ ...goal, habit3: e.target.value })
            }} />
            <label htmlFor="habit3">Third Daily Habit </label>
          </div>



        </div>
        <button type='submit' className='btn popup__submit' />


      </form>

    </div>);
}
const mSTP = state => ({
  goals: state.goals,
});

export default connect(mSTP)(Popup);