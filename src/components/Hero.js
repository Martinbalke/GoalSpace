import React from 'react';
import { motion } from "framer-motion"
import {} from './animations'
function Hero(props) {

  return (
    <section className='hero'>
      <motion.h1 className='hero__header'>
        <div className="hero__bubbles">
          <div /><div /><div /><div /><div /><div />
        </div>
        <span className='hero__header-logo'>GoalSpace</span>
        <span className='hero__header-text-1'>Bring meaning back to your goals</span>
        <br></br>
        <span className='hero__header-text-2'>Track daily progess, complete milestones, and finish goals</span>
      </motion.h1>
      <div className="hero__shapes" />
    </section>);
}


export default Hero;