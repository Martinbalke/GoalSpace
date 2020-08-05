import React, { useState } from 'react'
import Confetti from 'react-confetti'

export default ({ width, height, onClickCallBack, buttonClass, buttonText, buttonType, scoreAmount, goalIndex, shootConfetti }) => {
  const [run, setRun] = useState(false);
  const [recycle, setRecycle] = useState(false);
  const [textAnimation, setTextAnimation] = useState(false);

  function conffetiCannon(score) {
    //Only want this to fire when finishing a milestone
    if(buttonText === 'Finish' || buttonText ==='+'){
      //Only shoot confetti on milestone completion
      if(shootConfetti){
          setRun(true)
          setRecycle(true)
          setTimeout(() => setRecycle(false), 2000)
        }

        setTextAnimation(true)
        setTimeout(() => setTextAnimation(false), 6000)
      }
    }



  //This code determins wether the goal container is mirrored or not for bubble text animation
  let mirrored;
  goalIndex % 2 === 0 ? mirrored = '--mirror' : mirrored = '--normal'


  //TODO: Figure out how to add a class and make Z index higher
  return (
    <div className='confetti'>
      <div className='confetti__animation'>
        <Confetti
          width={width}
          height={height}
          numberOfPieces={100}
          wind={0}
          gravity={0.1}
          confettiSource={{ x: 0, y: 180, w: 300, h: 30 }}
          initialVelocityX={2}
          initialVelocityY={7}
          recycle={recycle}
          run={run}
        />
      </div>

      <div className='confetti__button-container'>
        <button
          type={buttonType}
          className={buttonClass}
          onClick={() => {
            if (onClickCallBack) onClickCallBack()
            conffetiCannon()
          }}>{buttonText}</button>
        {textAnimation && (
        <h3 className={`confetti__text confetti__text${mirrored}`}>
          {scoreAmount}
        </h3>)}
      </div>
    </div>

  )
}

//https://alampros.github.io/react-confetti/iframe.html?id=props-demos--custom-source&knob-Run=true&knob-# Pieces=200&knob-Wind=0&knob-Gravity=0.1&knob-Initial X=2&knob-Initial Y=5&knob-Opacity=100&knob-Recycle=true