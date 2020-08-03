import React from 'react';
import { connect } from 'react-redux';


function EditGoals({ goals, setEditing }) {
  if (!goals || !goals.length) return <div></div>
  return (
    <div className="edit">

      {goals.map((goal, index) => (
        <div className="edit__goal" key={index}>
          <h3 className='edit__tertiary'>{goal.goal}</h3>
          <button className='btn btn-main edit__btn' onClick={() => { setEditing(index) }}>Edit</button>
        </div>))}
    </div>
  );
}
const mSTP = state => ({
  goals: state.goals
})

export default connect(mSTP)(EditGoals);