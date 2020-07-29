import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);


class ChartClass {
  constructor(data) {
    this.chart = am4core.create('chart', am4charts.XYChart)
    this.xAxis = this.chart.xAxes.push(new am4charts.CategoryAxis())
    this.chart.data = data;
  }

  chartSetup = () => {
    this.chart.colors.step = 2;

    this.chart.scrollbarX = new am4core.Scrollbar();
    this.chart.scrollbarX.parent = this.chart.bottomAxesContainer;

    this.chart.legend = new am4charts.Legend()
    this.chart.legend.position = 'top'
    this.chart.legend.paddingBottom = 20
    this.chart.legend.labels.template.maxWidth = 400


    this.xAxis.dataFields.category = 'date'
    this.xAxis.renderer.cellStartLocation = 0.1
    this.xAxis.renderer.cellEndLocation = 0.9
    this.xAxis.renderer.grid.template.location = 0;

    let yAxis = this.chart.yAxes.push(new am4charts.ValueAxis());
    yAxis.min = 0;

  }

  createSeries = (value, name) => {


    let series = this.chart.series.push(new am4charts.ColumnSeries())
    series.dataFields.valueY = value
    series.dataFields.categoryX = 'date'
    series.name = name
    series.columns.template.column.cornerRadiusTopLeft = 10;
    series.columns.template.column.cornerRadiusTopRight = 0;

    series.events.on("hidden", this.arrangeColumns);
    series.events.on("shown", this.arrangeColumns);

    let bullet = series.bullets.push(new am4charts.LabelBullet())
    bullet.interactionsEnabled = false
    bullet.dy = 30;
    bullet.label.text = '{valueY}'
    bullet.label.fill = am4core.color('#ffffff')

    return series;
  }

  arrangeColumns = () => {

    let series = this.chart.series.getIndex(0);
    let w = 1 - this.xAxis.renderer.cellStartLocation - (1 - this.xAxis.renderer.cellEndLocation);
    if (series.dataItems.length > 1) {
      let x0 = this.xAxis.getX(series.dataItems.getIndex(0), "categoryX");
      let x1 = this.xAxis.getX(series.dataItems.getIndex(1), "categoryX");
      let delta = ((x1 - x0) / this.chart.series.length) * w;
      if (am4core.isNumber(delta)) {
        let middle = this.chart.series.length / 2;

        let newIndex = 0;
        this.chart.series.each((series) => {
          if (!series.isHidden && !series.isHiding) {
            series.dummyData = newIndex;
            newIndex++;
          }
          else {
            series.dummyData = this.chart.series.indexOf(series);
          }
        })
        let visibleCount = newIndex;
        let newMiddle = visibleCount / 2;

        this.chart.series.each((series) => {
          let trueIndex = this.chart.series.indexOf(series);
          let newIndex = series.dummyData;

          let dx = (newIndex - trueIndex + middle - newMiddle) * delta

          series.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
          series.bulletsContainer.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
        })
      }
    }
  }



}


function chartTheme(target) {



  if (target instanceof am4core.InterfaceColorSet) {
    target.setFor('grid', am4core.color("#FFF"))
    target.setFor('text', am4core.color("#3282E7").lighten(-.4))
    target.setFor('secondaryButton', am4core.color("#3282E7"))
    target.setFor('secondaryButtonHover', am4core.color("#3282E7").lighten(-.2))
    target.setFor('secondaryButtonActive', am4core.color("#3282E7").lighten(-.2))
    target.setFor('secondaryButtonDown', am4core.color("#3282E7").lighten(-.2))
    target.setFor('secondaryButtonStroke', am4core.color("#FEA138"));
    target.setFor('secondaryButtonText', am4core.color("#FEA138"));
  }

  if (target instanceof am4core.ColorSet) {
    target.list = [
      am4core.color("#3282E7")
    ];
  }
}

am4core.useTheme(chartTheme)
export default ChartClass;