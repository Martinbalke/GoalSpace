import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import ChartClass from './_createChart';
import { connect } from 'react-redux';



const Chart = ({ progressData, goals }) => {

  const chartRef = useRef(null);
  const [dataToDisplay, setDataToDisplay] = useState(null);
  const [dataType, setDataType] = useState('dailyProgress');


  const combineProgressIntoDataSet = () => {
    const combinedProgressData = {};
    progressData.forEach(progress => {
      const { goal } = progress.associatedGoal
      Object.keys(progress[dataType]).forEach(key => {
        let tempObj = { [goal]: progress[dataType][key] }
        combinedProgressData[key] = { ...combinedProgressData[key], ...tempObj }
      })
    })

    return combinedProgressData;
  }

  const combineDataSetsIntoChartData = () => {
    const dataArray = [];
    const data = combineProgressIntoDataSet(dataType);
    Object.keys(data).forEach(key => { dataArray.push({ date: key, ...data[key] }) })
    return dataArray
  }

  useEffect(() => {
    setDataToDisplay(combineDataSetsIntoChartData(dataType))
  }, [progressData, dataType]);


//CREAT A AND DISPLAY CHART
  useLayoutEffect(() => {
    //CREATE A CHART AND SET IT'S DATA
    const chartClass = new ChartClass(dataToDisplay);
    chartClass.chartSetup();

    //CREATE AN ENTRY IN THE CHART FOR EACH GOAL
    goals.forEach(goalObject => chartClass.createSeries(goalObject.goal, goalObject.goal))
    
    //SET THE CURRENT REFERNCE FOR CLEANUP TO THE CREATED CHART
    chartRef.current = chartClass.chart;

    return( () => chartRef.current.dispose())

  }, [dataToDisplay, dataType, goals]);



  return (
    <div className='chart'>
      <div className="chart__buttons">
        <button className='btn btn-main' onClick={() => setDataType('dailyProgress')}>Daily</button>
        <button className='btn btn-main' onClick={() => setDataType('monthlyProgress')}>Monthly</button>
      </div>
      <div id='chart' className='chart__display' />
    </div>

  )

}

const mSTP = state => ({
  progressData: state.progress,
  goals: state.goals
});
export default connect(mSTP)(Chart);