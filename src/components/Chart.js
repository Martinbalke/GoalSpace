import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_material from "@amcharts/amcharts4/themes/material";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


const Chart = ({progressData, dispatch}) => {

  const [dataToDisplay, setDataToDisplay] = useState(null);


  const combineProgressIntoDataSet = (type) => {
    const combinedProgressData = {};
    progressData.forEach(progress => {
      const { goal } = progress.associatedGoal
      Object.keys(progress[type]).forEach(key => {
        let tempObj = { [goal]: progress[type][key] }
        combinedProgressData[key] = { ...combinedProgressData[key], ...tempObj }
      })
    })
    return combinedProgressData;
  }

  const combineDataSetsIntoChartData = (type) => {
    const dataArray = [];
    const data = combineProgressIntoDataSet(type);
    Object.keys(data).forEach( key => {dataArray.push({date: key, ...data[key]})})
    return dataArray
  }

  useEffect(() => {
    setDataToDisplay(combineDataSetsIntoChartData('dailyProgress'))
  }, [progressData]);

  /* Chart code */
  // Themes begin
  am4core.useTheme(am4themes_material);
  am4core.useTheme(am4themes_animated);
  // Themes end

  let chart = am4core.create("chartdiv", am4charts.XYChart);
  chart.padding(40, 40, 40, 40);

  let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
  categoryAxis.renderer.grid.template.location = 0;
  categoryAxis.dataFields.category = "network";
  categoryAxis.renderer.minGridDistance = 1;
  categoryAxis.renderer.inversed = true;
  categoryAxis.renderer.grid.template.disabled = true;

  let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
  valueAxis.min = 0;

  let series = chart.series.push(new am4charts.ColumnSeries());
  series.dataFields.categoryY = "network";
  series.dataFields.valueX = "MAU";
  series.tooltipText = "{valueX.value}"
  series.columns.template.strokeOpacity = 0;
  series.columns.template.column.cornerRadiusBottomRight = 5;
  series.columns.template.column.cornerRadiusTopRight = 5;

  let labelBullet = series.bullets.push(new am4charts.LabelBullet())
  labelBullet.label.horizontalCenter = "left";
  labelBullet.label.dx = 10;
  labelBullet.label.text = "{values.valueX.workingValue.formatNumber('#.0as')}";
  labelBullet.locationX = 1;

  // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
  series.columns.template.adapter.add("fill", function(fill, target){
    return chart.colors.getIndex(target.dataItem.index);
  });

  categoryAxis.sortBySeries = series;
  chart.data = [
      {
        "network": "Facebook",
        "MAU": 2255250000
      },
      {
        "network": "Google+",
        "MAU": 430000000
      },
      {
        "network": "Instagram",
        "MAU": 1000000000
      },
      {
        "network": "Pinterest",
        "MAU": 246500000
      },
      {
        "network": "Reddit",
        "MAU": 355000000
      },
      {
        "network": "TikTok",
        "MAU": 500000000
      },
      {
        "network": "Tumblr",
        "MAU": 624000000
      },
      {
        "network": "Twitter",
        "MAU": 329500000
      },
      {
        "network": "WeChat",
        "MAU": 1000000000
      },
      {
        "network": "Weibo",
        "MAU": 431000000
      },
      {
        "network": "Whatsapp",
        "MAU": 1433333333
      },
      {
        "network": "YouTube",
        "MAU": 1900000000
      }
    ]


  return(<div id='chartdiv'></div>)

}

const mSTP = state => ({
  progressData: state.progress,

});

export default connect(mSTP)(Chart);