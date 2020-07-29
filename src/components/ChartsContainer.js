import React from 'react';
import {connect} from 'react-redux'
import Chart from './Chart';
import Loading from './Loading'




const ChartsContainer = ({ progressData, dispatch}) => {


  return (
  <section className="chart-container">
      {progressData && progressData.length ? <Chart/> : <Loading/>}
  </section>
  )
}

const mSTP = state => ({
  progressData: state.progress
})

export default connect(mSTP)(ChartsContainer);