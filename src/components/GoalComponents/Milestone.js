import React, { useState } from 'react';
import { motion } from 'framer-motion'
import { connect } from 'react-redux';

import { ConfettiScoreButton } from '../Components';
import { updateGoal, updateProgressPoints, updateChartPoints } from '../../store/actions';



const Milestone = ({ dispatch, goal, index }) => {
  const [milestone, setMilestone] = useState(goal.milestone || '');


  const updateMilestone =  () => {
    if (!milestone.length) return;
    if (goal.milestone) {
      setMilestone('')
      dispatch(updateProgressPoints(goal._id, 20))
      dispatch(updateChartPoints(goal.goal, 20))
      return dispatch(updateGoal({ ...goal, milestone: ''}, index))
    }
   dispatch(updateGoal({ ...goal, milestone: milestone }, index));
  }


  return (
    <motion.div className='milestone'>
      <form className='milestone__form' onSubmit={async (e) => { e.preventDefault(); updateMilestone(); }}>
        <textarea
          maxLength='45'
          onChange={async (e) => { setMilestone(e.target.value) }}
          value={milestone}
          className='milestone__textarea'
          placeholder='Create a milestone for your goal'
        />
        <ConfettiScoreButton
          width='1000px' height='1000px'
          buttonClass="milestone__btn btn btn-blob"
          buttonType='submit'
          buttonText={goal.milestone ? 'Finish' : 'Create'}
          scoreAmount='20'
          goalIndex={index}
          shootConfetti={true}
        />
      </form>
    </motion.div>
  )
}

const mSTP = state => ({
  goals: state.goals,
});


export default connect(mSTP)(Milestone);