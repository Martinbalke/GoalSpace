import React, {useState, useEffect, useRef}from 'react';
import { connect } from 'react-redux';


function SetGoals({ goals, setEditing, children }) {
  const [typeWriterText, setTypeWriteText] = useState(' ');
  const [length, setLength] = useState(0);
  const [typingAnimation, setTypingAnimation] = useState('show');
   const [timer, setTimer] = useState(null)
  const verbs = ['impressive', 'meaningful', 'impactful', 'motivating'];
  const [index, setIndex] = useState(Math.floor(Math.random() * verbs.length))
  
  function typingEffect(){
    const verb = verbs[index];
    length < verb.length? setLength(length + 1) : setTypingAnimation('none')


    setTypeWriteText(verb.substring(0, length));

  }
  useEffect( () => {
    clearTimeout(timer);
    setTimer(setTimeout(typingEffect,300))
  }, [typeWriterText])


  return (
    <div className="setgoals">
      <div className="border" />
      <div className='setgoals__header-container'>
  <h3 className='setgoals__header'>{`Create a new ${typeWriterText} goal`}</h3>
        <span className='setgoals__cursor' style={{display: `${typingAnimation}`}}/>
        <button className='btn setgoals__btn' onClick={() => setEditing(goals.length)}></button>
      </div>

      {children}
      <div className='setgoals__blob'>
        <h3>Did you know?</h3>
        <p>It's been proven that when you set a goal if you set three simple habits to accomplish daily you're more likely to succeed</p>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path d="M67.1,-21.1C73.7,-1.5,56.7,26.6,31.9,44.7C7.2,62.9,-25.2,71.1,-43.5,58.2C-61.7,45.4,-65.7,11.4,-56.1,-12.5C-46.5,-36.3,-23.2,-49.9,3.5,-51.1C30.2,-52.2,60.5,-40.8,67.1,-21.1Z" transform="translate(100 100)" />
        </svg>
      </div>
    </div>
  )
}


const mSTP = state => ({
  goals: state.goals
})

export default connect(mSTP)(SetGoals);