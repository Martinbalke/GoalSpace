import React from 'react';
import { connect } from 'react-redux';

function Goal({ dispatch, goal}) {

  return (
    <div className="goal">
      <h3 className="goal__header">{goal.yearly}</h3>
      <div className="goal__habit">
        <p className="goal__habit-text">{goal.habit1}</p>
        <button className="goal__habit-button"></button>
      </div>
      <div className="goal__habit">
        <p className="goal__habit-text">{goal.habit2}</p>
        <button className="goal__habit-button"></button>
      </div>
      <div className="goal__habit">
        <p className="goal__habit-text">{goal.habit3}</p>
        <button className="goal__habit-button"></button>
      </div>

    </div>
  );
}

const mSTP = state => ({

})


export default connect(mSTP)(Goal);