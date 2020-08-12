import React, { useState } from 'react';
import ConfettiScoreButton from './ConfettiScoreButton'
import { connect } from 'react-redux';
import { completeGoal } from '../store/goalReducer'
import { updateProgressPoints } from '../store/progressReducer';
import { motion, useViewportScroll } from 'framer-motion';
import { goalSlideInAnimationRight, goalSlideInAnimationLeft } from './animations'



function Goal({ goal, children, index, dispatch, animationHeight }) {
  const { scrollY } = useViewportScroll();
  const [visibleWhenScrollDown, setVisibleWhenScrollDown] = useState(false);

  scrollY.onChange(y => { if (y > animationHeight) setVisibleWhenScrollDown(true) })
  if (!goal.habits) return <div></div>
  let goalIndex = index;
  return (
    visibleWhenScrollDown ? (
      <motion.div
        className="goal"
        variants={index % 2 === 0 ? goalSlideInAnimationLeft : goalSlideInAnimationRight}
        initial='hidden'
        animate='visible'
        exit='exit'>
        <h3 className="goal__header">{goal.goal}</h3>
        {goal.habits.map((habit, index) => (
          <div className="goal__habit" key={index}>
            <p className="goal__habit-text">{habit}</p>
            <ConfettiScoreButton 
            buttonClass="goal__habit-button btn btn-round" 
            buttonText='+' 
            onClickCallBack={() => dispatch(updateProgressPoints(goal._id, 5))} 
            width='500px' height='400px' 
            buttonType='button' 
            scoreAmount='5'
            goalIndex={goalIndex}
            />
          </div>
        ))}
        {children}
        
        <button className='btn goal__complete '
          onClick={() => {dispatch(completeGoal(goal._id, index))}}>Complete</button>
      </motion.div>
      ) 
      :(<div className='goal'></div>)

  );
}

const mSTP = state => ({

})

export default connect(mSTP)(Goal);