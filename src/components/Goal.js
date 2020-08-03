import React from 'react';
import { connect } from 'react-redux';
import {completeGoal} from '../store/goalReducer' 
import {updateProgressPoints} from '../store/progressReducer';




function Goal({ goal, children, index,  dispatch}) {
  if(!goal.habits) return <div></div>

  return ( 
    <div className="goal"> 
      <h3 className="goal__header">{goal.goal}</h3>
      {goal.habits.map( (habit, index) => (
        <div className="goal__habit" key={index}>
          <p className="goal__habit-text">{habit}</p>
          <button className="goal__habit-button btn btn-round" onClick={() => dispatch(updateProgressPoints(goal._id, 5))}>+</button>
        </div>
      ))}
      {children}
        <button className='btn goal__complete ' onClick={ () => dispatch(completeGoal(goal._id, index))}>Complete</button>
    </div>  
  );
}

const mSTP = state => ({

})

export default connect(mSTP)(Goal);