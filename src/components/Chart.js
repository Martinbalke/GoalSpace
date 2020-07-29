import React, {useLayoutEffect, useRef, useState, useEffect} from 'react';
import {connect} from 'react-redux';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

const Chart = ({progressData, goals}) => {
const chartRef = useRef(null);
const [dataToDisplay, setDataToDisplay] = useState(null);
const [dataType, setDataType] = useState('monthlyProgress');



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
  Object.keys(data).forEach( key => {dataArray.push({date: key, ...data[key]})})
  return dataArray
}

useEffect(() => {
  setDataToDisplay(combineDataSetsIntoChartData(dataType))
}, [progressData, dataType]);



  useLayoutEffect(() => {
    
    let chart = am4core.create('chart', am4charts.XYChart)
    chart.colors.step = 2;

    chart.legend = new am4charts.Legend()
    chart.legend.position = 'top'
    chart.legend.paddingBottom = 20
    chart.legend.labels.template.maxWidth = 95

    let xAxis = chart.xAxes.push(new am4charts.CategoryAxis())
    xAxis.dataFields.category = 'date'
    xAxis.renderer.cellStartLocation = 0.1
    xAxis.renderer.cellEndLocation = 0.9
    xAxis.renderer.grid.template.location = 0;

    let yAxis = chart.yAxes.push(new am4charts.ValueAxis());
    yAxis.min = 0;

    function createSeries(value, name) {
        let series = chart.series.push(new am4charts.ColumnSeries())
        series.dataFields.valueY = value
        series.dataFields.categoryX = 'date'
        series.name = name

        series.events.on("hidden", arrangeColumns);
        series.events.on("shown", arrangeColumns);

        let bullet = series.bullets.push(new am4charts.LabelBullet())
        bullet.interactionsEnabled = false
        bullet.dy = 30;
        bullet.label.text = '{valueY}'
        bullet.label.fill = am4core.color('#ffffff')

        return series;
    }
    chart.data = dataToDisplay;
    goals.forEach( goalObject => createSeries(goalObject.goal, goalObject.goal))
  
    function arrangeColumns() {

        let series = chart.series.getIndex(0);

        let w = 1 - xAxis.renderer.cellStartLocation - (1 - xAxis.renderer.cellEndLocation);
        if (series.dataItems.length > 1) {
            let x0 = xAxis.getX(series.dataItems.getIndex(0), "categoryX");
            let x1 = xAxis.getX(series.dataItems.getIndex(1), "categoryX");
            let delta = ((x1 - x0) / chart.series.length) * w;
            if (am4core.isNumber(delta)) {
                let middle = chart.series.length / 2;

                let newIndex = 0;
                chart.series.each(function(series) {
                    if (!series.isHidden && !series.isHiding) {
                        series.dummyData = newIndex;
                        newIndex++;
                    }
                    else {
                        series.dummyData = chart.series.indexOf(series);
                    }
                })
                let visibleCount = newIndex;
                let newMiddle = visibleCount / 2;

                chart.series.each(function(series) {
                    let trueIndex = chart.series.indexOf(series);
                    let newIndex = series.dummyData;

                    let dx = (newIndex - trueIndex + middle - newMiddle) * delta

                    series.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                    series.bulletsContainer.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                })
            }
        }
    }
    console.log(progressData[0].dailyProgress)
    chartRef.current = chart;
    return () => {
      chart.dispose();
    };
  }, [dataToDisplay, dataType]);


  
  return(
    <div className='chart'>
      <div className="chart__buttons">
        <button className='btn chart__buttons--daily' onClick={ () => setDataType('dailyProgress')}>Daily</button>
        <button className='btn chart__buttons--monthly' onClick={ () => setDataType('monthlyProgress')}>Monthly</button>
      </div>
      <div id='chart' className='chart__display'/>
    </div>
  
  )

}

const mSTP = state => ({
  progressData: state.progress,
  goals: state.goals
});
export default connect(mSTP)(Chart);