import React,{useEffect} from 'react';
import {connect} from 'react-redux'
import Chart from './Chart';
import Loading from './Loading'




const ChartsContainer = ({ progressData}) => {
  
  return (
  <section className="chart-container">
      {progressData[0] ? <Loading/> : <Loading/>}
  </section>
  )
}

const mSTP = state => ({
  progressData: state.progress,
})

export default connect(mSTP)(ChartsContainer);