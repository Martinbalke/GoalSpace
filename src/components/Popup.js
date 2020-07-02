import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';

function Popup({ close, dispatch, index, goals }) {
  const [goal, setGoal] = useState({
    goal: '',
    habits: ['','',''],
  });

  const habitTextChange = ( (e, index) => {
      e.preventDefault();
      let newHabitsArray = [...goal.habits]
      newHabitsArray[index] = e.target.value;
      setGoal({ ...goal, habits: newHabitsArray });
  })

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
        autoComplete="off"
        ref={popupRef}
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: 'NEW_GOAL', goal, index })
          close();
        }}>
        <button className='btn btn--close popup__close' onClick={close} />
        <h3 className='popup__tertiary'>Set a new goal</h3>
        <div className="popup__input">
          <input type="text" className="popup__goal-input" id='goal' required defaultValue={goal.goal} onChange={(e) => {
            e.preventDefault();
            setGoal({ ...goal, goal: e.target.value })
          }} />
          <label htmlFor="goal" className="popup__goal">Goal</label>
        </div>
        <div className="popup__habits">
          {goal.habits.map( (habit, index) => (
            <div className='popup__input' key={index}>
              <input type="text" 
              id={`habit${index}`} 
              data={index}
              required 
              defaultValue={habit} 
              onChange={ (e) => habitTextChange(e, index) } />
              <label htmlFor={`habit${index}`}>First Daily Habit</label>
            </div>
          ))}
        </div>
        <button type='submit' className='btn popup__submit' />
      </form>
    </div>);
}
const mSTP = state => ({
  goals: state.goals,
});

export default connect(mSTP)(Popup);