import React from 'react';
import Goal from './Goal';
import Yearly from './Yearly'
import { connect } from 'react-redux';

function GoalContainer(props) {

  // function generateChildren(){
    //{Object.values(props.goals[0]).map((goal, index) => <h1>{goal}</h1>)}
  //   return state.goals.map( (child, index) => <Goal/>);
  // }

 

  return (
    <div className="goalContainer">
      <Yearly/>
      {/* {generateChildren()} */}
    </div>
  );
}

const mSTP = state => ({
  goals: state.goals
});

export default connect(mSTP)(GoalContainer);