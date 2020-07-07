import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { newGoal } from '../store/goalReducer';
import { motion } from "framer-motion"

function Popup({ close, dispatch, index, goals }) {
  const [goal, setGoal] = useState({
    goal: '',
    habits: ['', '', ''],
  });

  const habitTextChange = ((e, index) => {
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
    <motion.div
      transition={{ duration: .4 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ x: '-100vw', opacity: 0 }}
      className='popup'
    >

      <div className="popup__content">
        <motion.form className="popup__form"
          transition={{ duration: .5, delay: .25 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          autoComplete="off"
          ref={popupRef}
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(newGoal(goal, index))
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
            {goal.habits.map((habit, index) => (
              <div className='popup__input' key={index}>
                <input type="text"
                  id={`habit${index}`}
                  data={index}
                  required
                  defaultValue={habit}
                  onChange={(e) => habitTextChange(e, index)} />
                <label htmlFor={`habit${index}`}>{`Daily habit ${index + 1}`}</label>
              </div>
            ))}
          </div>
          <button type='submit' className='btn popup__submit' />
        </motion.form>
      </div>
      <div className="popup__sidebar">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='popup__sidebar-svg'>
          <path  fill-opacity="1" d="M0,96L40,112C80,128,160,160,240,176C320,192,400,192,480,192C560,192,640,192,720,197.3C800,203,880,213,960,224C1040,235,1120,245,1200,218.7C1280,192,1360,128,1400,96L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
        </svg>
        <h3 className="popup__sidebar-tertiary">Creating a meaningful goal</h3>
        <p className="popup__sidebar-paragraph"><span>1</span>   Laborum atque culpa similique, dolorem magnam veritatis! Accusamus facilis quaerat cum facere maiores.</p>
        <p className="popup__sidebar-paragraph"><span>2</span>   Laborum atque culpa similique, dolorem magnam veritatis! Accusamus facilis quaerat cum facere maiores.</p>
        <p className="popup__sidebar-paragraph"><span>3</span>   Laborum atque culpa similique, dolorem magnam veritatis! Accusamus facilis quaerat cum facere maiores.</p>
      </div>
    </motion.div>
  );
}
const mSTP = state => ({
  goals: state.goals,
});

export default connect(mSTP)(Popup);