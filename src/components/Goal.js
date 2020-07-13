import React from 'react';

function Goal({ goal, children}) {
  if(!goal.habits) return <div></div>

  return ( 
    <div className="goal"> 
      <h3 className="goal__header">{goal.goal}</h3>
      {goal.habits.map( (habit, index) => (
        <div className="goal__habit" key={index}>
          <p className="goal__habit-text">{habit}</p>
          <button className="goal__habit-button btn btn-main"></button>
        </div>
      ))}
      {children}
        <button className='btn goal__complete '>Complete</button>
    </div>  
  );
}


export default Goal;