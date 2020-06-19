import React from 'react';
import { connect } from 'react-redux';

function Goal({ dispatch, goal, habit1, habit2, habit3 }) {

  return (
    <div className="goal">
      <h3 className="goal_header">{goal}</h3>
      <div className="goal__habit">
        <p className="goal__habit-text">{habit1}</p>
        <button className="goal__habit-button"></button>
      </div>
      <div className="goal__habit">
        <p className="goal__habit-text">{habit2}</p>
        <button className="goal__habit-button"></button>
      </div>
      <div className="goal__habit">
        <p className="goal__habit-text">{habit3}</p>
        <button className="goal__habit-button"></button>
      </div>

    </div>
  );
}

const mSTP = state => ({

})


export default connect(mSTP)(Goal);