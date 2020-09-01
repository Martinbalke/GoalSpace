import React from 'react';
import {motion} from 'framer-motion'
import {popupContainerAnimation} from '../Utilities/animations'


export default ({ callback }) => {

  return (
    <motion.div className="about" variants={popupContainerAnimation} initial='hidden' animate='visible' exit='exit' >
      <h3 className="about__header">About Goalspace</h3>
      <button type='button' className='btn btn-round about__close' onClick={() => callback(false)}/>
      <div className="about__sections">
        <div className="about__section">
          <h3 className="about__section-tertiary">Set Goals</h3>
          <p className="about__section-paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi quas dicta ducimus incidunt ea alias maiores quos beatae quis, animi eum assumenda, voluptatibus, accusamus eligendi labore? Repellendus quos tenetur ullam.</p>
        </div>
        <div className="about__section">
          <h3 className="about__section-tertiary">Habits</h3>
          <p className="about__section-paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi quas dicta ducimus incidunt ea alias maiores quos beatae quis, animi eum assumenda, voluptatibus, accusamus eligendi labore? Repellendus quos tenetur ullam.</p>
        </div>
        <div className="about__section">
          <h3 className="about__section-tertiary">Milestone</h3>
          <p className="about__section-paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi quas dicta ducimus incidunt ea alias maiores quos beatae quis, animi eum assumenda, voluptatibus, accusamus eligendi labore? Repellendus quos tenetur ullam.</p>
        </div>
      </div>
    </motion.div>

  )
}