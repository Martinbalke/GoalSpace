import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';


function SetGoals({ goals, setEditing, children }) {
  const [typeWriterText, setTypeWriteText] = useState(' ');
  const [length, setLength] = useState(0);
  const [typingAnimation, setTypingAnimation] = useState('show');
  const [timer, setTimer] = useState(null)
  const verbs = ['impressive', 'meaningful', 'impactful', 'motivating'];
  const [index] = useState(Math.floor(Math.random() * verbs.length))

  function typingEffect() {
    const verb = verbs[index];
    length < verb.length ? setLength(length + 1) : setTypingAnimation('none')


    setTypeWriteText(verb.substring(0, length));

  }
  useEffect(() => {
    clearTimeout(timer);
    setTimer(setTimeout(typingEffect, 300))
  }, [typeWriterText])


  return (
    <div className="setgoals">
      <div className='setgoals__header-container'>
        <h3 className='setgoals__header'>{`Create a new ${typeWriterText} goal`}</h3>
        <span className='setgoals__cursor' style={{ display: `${typingAnimation}` }} />
        <button className='btn btn-main setgoals__btn' onClick={() => setEditing(goals.length)}></button>
      </div>

      {children}
      <div className='setgoals__blob'>
        <h3>Did you know?</h3>
        <p>It's been proven that when you set a goal if you set three simple habits to accomplish daily you're more likely to succeed</p>
      </div>
    </div>
  )
}


const mSTP = state => ({
  goals: state.goals
})

export default connect(mSTP)(SetGoals);