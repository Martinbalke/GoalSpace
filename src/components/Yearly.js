import React, {useState}from 'react';
import { connect } from 'react-redux';
import Popup from './Popup'


function Yearly(props){
  const [editing, setEditing] = useState(false);

  function yearlyGoals(){
  return props.goals.map( (goal, index) => (
    <div className="yearly__goal" key={index}>
      <h3 className='yearly__tertiary'>{goal.yearly}</h3>
      <button className='btn yearly__btn' onClick={() => {}}/>
    </div>

  ));
  }



  return (
    <div className="yearly">
      <h3 className='yearly__tertiary'>Create a new yearly goal</h3>
      <button className='btn yearly__btn--main' onClick={() => setEditing(true)}>click</button>
      {yearlyGoals()}
      {editing ? <Popup close={() => setEditing(false)} thing={0}/>: <div/>}
    </div>
  )
}


const mSTP = state => ({
  goals: state.goals
})

export default connect(mSTP)(Yearly);