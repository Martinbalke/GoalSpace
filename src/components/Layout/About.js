import React from 'react';
import {motion} from 'framer-motion'
import {popupContainerAnimation} from '../Utilities/animations'
import {Link} from "react-router-dom";



export default ({ callback }) => {

  return (
    <motion.div className="about" variants={popupContainerAnimation} initial='hidden' animate='visible' exit='exit' >
      <h3 className="about__header">About Goalspace</h3>
      <Link to='/'>
      <button type='button' className='btn btn-round about__close'/>
      </Link>
      <div className="about__sections">
        <div className="about__section">
          <h3 className="about__section-tertiary">Goals</h3>
          <p className="about__section-paragraph">The goal you set should be a large achievement for yourself. Try to think on a grander scale.<br /> Timelines of a year or half year basis are great for this.</p>
        </div>
        <div className="about__section">
          <h3 className="about__section-tertiary">Milestones</h3>
          <p className="about__section-paragraph">It takes a long time to finish half a year, and that can discourage you from completing your goal.<br/> That's where milestones come in. Think of them as mini goals set on a bi weekly or monthly basis that when added up contribute to you finish your overall goal.</p>
        </div>
        <div className="about__section">
          <h3 className="about__section-tertiary">Habits</h3>
          <p className="about__section-paragraph">Take a step back and ask yourself "What three things can I accomplish every single day that will ultimately mean I succeed at my goal?". <br />These should be on a daily or bi-daily basis.</p>
        </div>
      </div>
    </motion.div>

  )
}