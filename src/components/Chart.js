import React, { useLayoutEffect, useRef, useState} from 'react';
// import SimpleProgress from './SimpleProgress'
import ChartClass from './_createChart';
import { connect } from 'react-redux';



const Chart = ({ chartData }) => {

  const chartRef = useRef(null);
  const [dataType, setDataType] = useState('daily');
  


//CREAT A AND DISPLAY CHART
  useLayoutEffect(() => {
    console.log('refresh')
    //CREATE A CHART AND SET IT'S DATA
    const chartClass = new ChartClass(chartData[dataType]);
    chartClass.chartSetup();
    //CREATE AN ENTRY IN THE CHART FOR EACH GOAL
    Object.keys(chartData.total).forEach(key => chartClass.createSeries(key, key))
    
    //SET THE CURRENT REFERNCE FOR CLEANUP TO THE CREATED CHART
    chartRef.current = chartClass.chart;

    return( () => chartRef.current.dispose())

  });



  return (
    <div className='chart'>
      <div className="chart__buttons">
        <button className='btn btn-main' onClick={() => setDataType('daily')}>Daily</button>
        <button className='btn btn-main' onClick={() => setDataType('monthly')}>Monthly</button>
      </div>
      <div id='chart' className='chart__display' />
    </div>
  )

}

const mSTP = state => ({
  chartData: state.chartData
});
export default connect(mSTP)(Chart);