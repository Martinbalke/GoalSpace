import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Confetti from 'react-confetti'

export default ({ width, height, onClickCallBack, buttonClass, buttonText, buttonType, scoreAmount }) => {
  const [run, setRun] = useState(false);
  const [recycle, setRecycle] = useState(false);
  const [animation, setAnimation] = useState(false);

  function conffetiCannon(score) {
    setRun(true)
    setRecycle(true)
    setTimeout(() => setRecycle(false), 2000)
  }


  //TODO: Figure out how to add a class and make Z index higher
  return (
    <div>
      <Confetti
        width={width}
        height={height}
        numberOfPieces={200}
        wind={0}
        gravity={0.1}
        confettiSource={{ x: 80, y: 100, w: 100, h: 30 }}
        initialVelocityX={2}
        initialVelocityY={7}
        recycle={recycle}
        run={run}
      />
      <button
        type={buttonType}
        className={buttonClass}
        onClick={() => {
          if (onClickCallBack) onClickCallBack()
          conffetiCannon()
        }}>{buttonText}</button>
    </div>

  )
}

//https://alampros.github.io/react-confetti/iframe.html?id=props-demos--custom-source&knob-Run=true&knob-# Pieces=200&knob-Wind=0&knob-Gravity=0.1&knob-Initial X=2&knob-Initial Y=5&knob-Opacity=100&knob-Recycle=true