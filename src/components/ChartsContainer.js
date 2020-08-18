import React,{useEffect} from 'react';
import {connect} from 'react-redux'
import Chart from './Chart';
import Loading from './Loading'




const ChartsContainer = ({ progressData, goals}) => {
  useEffect(() => {
  }, [progressData])
  
  
  return (
  <section className="chart-container">
      {progressData[0] ? <Chart/> : <Loading/>}
  </section>
  )
}

const mSTP = state => ({
  progressData: state.progress,
  goals: state.goals
})

export default connect(mSTP)(ChartsContainer);