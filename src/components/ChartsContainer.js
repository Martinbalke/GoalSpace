import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';




const ChartsContainer = ({ progressData, dispatch }) => {
  const [dailyProgressData, SetDailyProgessData] = useState()
  const [monthlyProgressData, SetMonthlyProgessData] = useState()


  const combineProgressIntoDataSet = (type) => {
    let combinedProgressData = {};
    progressData.forEach(progress => {
      let { goal } = progress.associatedGoal
      Object.keys(progress[type]).forEach(key => {
        let tempObj = { [goal]: progress[type][key] }
        combinedProgressData[key] = { ...combinedProgressData[key], ...tempObj }
      })
    })
    return combinedProgressData;
  }


  useEffect(() => {
    console.log(progressData)
  }, [progressData])


  // SetMonthlyProgessData(combineProgressIntoDataSet('monthlyProgress'))



  return (<section className="chart-container">
    {}
  </section>
  )
}

const mSTP = state => ({
  progressData: state.progress,

});

export default connect(mSTP)(ChartsContainer);