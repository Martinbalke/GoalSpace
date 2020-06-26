import React from 'react';
import { connect } from 'react-redux';


function Yearly({ goals, setEditing }) {

  function yearlyGoals() {
    return goals.map((goal, index) => (
      <div className="yearly__goal" key={index}>
        <h3 className='yearly__tertiary'>{goal.yearly}</h3>
        <button className='btn yearly__btn' onClick={() => { setEditing(index) }}>test</button>
      </div>

    ));
  }

  return (
    <div className="yearly">
      <div className="border"/>
      <h3 className='yearly__tertiary'>Create a new yearly goal</h3>
      <button className='btn yearly__btn--main' onClick={() => setEditing(goals.length)}>click</button>
      {yearlyGoals()}
    </div>
  )
}


const mSTP = state => ({
  goals: state.goals
})

export default connect(mSTP)(Yearly);