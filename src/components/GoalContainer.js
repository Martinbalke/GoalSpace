import React from 'react';
import Goal from './Goal';
import { connect } from 'react-redux';

function GoalContainer(props) {

  // function generateChildren(){
    //{Object.values(props.goals[0]).map((goal, index) => <h1>{goal}</h1>)}
  //   return state.goals.map( (child, index) => <Goal/>);
  // }

  function yearlyGoals(){
  return props.goals.map( (goal) => <h1>{goal.yearly}</h1>);
  }

  return (
    <div className="goalContainer">
        {yearlyGoals()}
      <div className="yearly">
     
      </div>
      {/* {generateChildren()} */}
    </div>
  );
}

const mSTP = state => ({
  goals: state.goals
});

export default connect(mSTP)(GoalContainer);