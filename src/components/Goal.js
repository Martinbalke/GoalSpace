import React from 'react';
import { connect } from 'react-redux';

function Goal({ dispatch, goal}) {

  return (
    <div className="goal">
      <h3 className="goal__header">{goal.goal}</h3>
      {goal.habits.map( (habit, index) => (
        <div className="goal__habit" key={index}>
          <p className="goal__habit-text">{habit}</p>
          <button className="goal__habit-button btn"></button>
        </div>
      ))}
    </div>
  );
}

const mSTP = state => ({

})


export default connect(mSTP)(Goal);