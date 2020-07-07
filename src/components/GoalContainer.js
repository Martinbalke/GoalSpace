import React, {useState, useEffect} from 'react';
import Goal from './Goal';
import Yearly from './Yearly'
import Popup from './Popup';
import { connect } from 'react-redux';
import { loadGoals } from '../store/goalReducer';
import {AnimatePresence} from 'framer-motion'


function GoalContainer({goals, dispatch}) {
  //State variable to keep track of which goal is currently being edited
  const [editing, setEditing] = useState(-1);
  
  useEffect( () => {
    dispatch(loadGoals());
  },[dispatch])

  //Generate a Goal component for each goal in the global state
  function generateChildren(){
      return goals.map( (goal,index) => <Goal index={index} key={index} goal={goal}/> )
  }

  return (
    <div className="contentContainer">
      <Yearly setEditing={setEditing}/>
      <AnimatePresence>
      {editing >= 0 && (<Popup close={() => setEditing(-1)} index={editing} /> )}
      </AnimatePresence>
      <div className="goalContainer">
        <div className="border-dark"></div>
        {generateChildren()}
      </div>
    </div>
  );
}

const mSTP = state => ({
  goals: state.goals
});

export default connect(mSTP)(GoalContainer);