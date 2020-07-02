import React from 'react';
import { connect } from 'react-redux';


function Yearly({ goals, setEditing }) {

  function yearlyGoals() {
    return goals.map((goal, index) => (
      <div className="yearly__goal" key={index}>
        <h3 className='yearly__tertiary'>{goal.goal}</h3>
        <button className='btn yearly__btn' onClick={() => { setEditing(index) }}></button>
      </div>

    ));
  }

  return (
    <div className="yearly">
      <div className="border"/>
      <h3 className='yearly__header'>Create a new yearly goal</h3>
      <button className='btn yearly__btn-main' onClick={() => setEditing(goals.length)}></button>
      {yearlyGoals()}
      <div className='yearly__blob'>
        <h3>Did you know?</h3>
        <p>It's been proven that when you set a goal if you set three simple habits to accomplish daily you're more likely to succeed</p>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path d="M67.1,-21.1C73.7,-1.5,56.7,26.6,31.9,44.7C7.2,62.9,-25.2,71.1,-43.5,58.2C-61.7,45.4,-65.7,11.4,-56.1,-12.5C-46.5,-36.3,-23.2,-49.9,3.5,-51.1C30.2,-52.2,60.5,-40.8,67.1,-21.1Z" transform="translate(100 100)" />
        </svg>
      </div>
    </div>
  )
}


const mSTP = state => ({
  goals: state.goals
})

export default connect(mSTP)(Yearly);