import React from 'react';
import {connect} from 'react-redux'
import { Chart, Loading } from '../Components';




const ChartsContainer = ({ chartData}) => {
  
  return (
  <section className="chart-container">
      {chartData?.total ? <Chart/> : <Loading/>}
  </section>
  )
}

const mSTP = state => ({
  chartData: state.chartData
})

export default connect(mSTP)(ChartsContainer);