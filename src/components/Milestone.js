import React, { useState} from 'react';
import { motion } from 'framer-motion'
import { updateGoal } from '../store/goalReducer';
import { updateProgressPoints } from '../store/progressReducer';
import { connect } from 'react-redux';
import { milestoneSlideInLeft, milestoneSlideInRight } from './animations'

const Milestone = ({ dispatch, goal, index }) => {
  const [milestone, setMilestone] = useState(goal.milestone || '');
  
  const updateMilestone= async() => {
    let newGoal = {...goal, milestone: milestone}
      if(goal.milestone) {
        newGoal.milestone = '';
        await setMilestone('')
        dispatch(updateProgressPoints(goal._id, 20))
    }
      dispatch(updateGoal(newGoal, index));
  }


  return (
    <motion.div className='milestone' variants={milestoneSlideInRight}>
      <form className='milestone__form' onSubmit={async (e) => {
        e.preventDefault();
        updateMilestone();
      }}>
        <textarea
          maxLength='45'
          onChange={async (e) =>{
            await setMilestone(e.target.value)}
          } 
          value={milestone}
          className='milestone__textarea'
          placeholder='Create a milestone for your goal'
        />
        <button type='submit' className="milestone__btn btn btn-blob">{goal.milestone ? 'Finish' : 'Create'}</button>
      </form>
    </motion.div>
  )
}

const mSTP = state => ({
  goals: state.goals,
});


export default connect(mSTP)(Milestone);