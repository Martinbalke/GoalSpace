import React, {useState} from 'react';
import Goal from './Goal';
import Yearly from './Yearly'
import Popup from './Popup';
import { connect } from 'react-redux';

function GoalContainer({goals}) {
  //State variable to keep track of which goal is currently being edited
  const [editing, setEditing] = useState(-1);

  //Generate a Goal component for each goal in the global state
  function generateChildren(){
      return goals.map( (goal,index) => <Goal index={index} key={index} goal={goal}/> )
  }

  return (
    <div className="goalContainer">
      <Yearly setEditing={setEditing}/>
      {editing >= 0 ? <Popup close={() => setEditing(-1)} index={editing} /> : <div />}
      {generateChildren()}
    </div>
  );
}

const mSTP = state => ({
  goals: state.goals
});

export default connect(mSTP)(GoalContainer);