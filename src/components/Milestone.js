import React, { useState} from 'react';
import ConfettiScoreButton from './ConfettiScoreButton'
import { motion } from 'framer-motion'
import { updateGoal } from '../store/goalReducer';
import { updateProgressPoints } from '../store/progressReducer';
import { connect } from 'react-redux';


const Milestone = ({ dispatch, goal, index }) => {
  const [milestone, setMilestone] = useState(goal.milestone || '');
  
  const updateMilestone= async() => {
    let newGoal = {...goal, milestone: milestone}
      if(goal.milestone) {
        newGoal.milestone = '';
        await setMilestone('')
        dispatch(updateProgressPoints(goal._id, 20))
    }
      dispatch(updateGoal(newGoal, index))
  }


  return (
    <motion.div className='milestone'>
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
        <ConfettiScoreButton 
        width='500px' height='400px' 
        buttonClass="milestone__btn btn btn-blob" 
        buttonType='submit' 
        buttonText={goal.milestone ? 'Finish' : 'Create'} 
        scoreAmount='20'
        goalIndex={index}
        />
      </form>
    </motion.div>
  )
}

const mSTP = state => ({
  goals: state.goals,
});


export default connect(mSTP)(Milestone);