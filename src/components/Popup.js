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
        <div className="popup__content">
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
                <label htmlFor={`habit${index}`}>First Daily Habit</label>
              </div>
            ))}
          </div>
          <button type='submit' className='btn popup__submit' />
        </div>
        <div className="popup__sidebar">
              <h3 className="popup__sidebar-tertiary">Setting a meaningful goal</h3>
              <p className="popup__sidebar-paragraph"><span>1</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem obcaecati vero placeat accusantium libero similique rerum quod. Laborum atque culpa similique, dolorem magnam veritatis! Accusamus facilis quaerat cum facere maiores.</p>
              <p className="popup__sidebar-paragraph"><span>2</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem obcaecati vero placeat accusantium libero similique rerum quod. Laborum atque culpa similique, dolorem magnam veritatis! Accusamus facilis quaerat cum facere maiores.</p>
              <p className="popup__sidebar-paragraph"><span>3</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem obcaecati vero placeat accusantium libero similique rerum quod. Laborum atque culpa similique, dolorem magnam veritatis! Accusamus facilis quaerat cum facere maiores.</p>
        </div>


      </motion.form>
    </motion.div>
  );
}
const mSTP = state => ({
  goals: state.goals,
});

export default connect(mSTP)(Popup);