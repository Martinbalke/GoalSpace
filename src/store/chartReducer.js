const combineProgressIntoDataSet = (progressData, dataType) => {
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


const combineDataSetsIntoFormatedChartData = (progressData, dataType) => {
  const formatedData = [];
  const dataSet = combineProgressIntoDataSet(progressData, dataType);
  Object.keys(dataSet).forEach(key => { formatedData.push({ date: key, ...dataSet[key] }) })
  return formatedData
}

const createTotalPointsForEachGoal = (monthlyChartData) => {
  const totalPoints = {}

  monthlyChartData.forEach(monthlyData => {
    const goalName = Object.keys(monthlyData)[1];
    const pointsThisMonth = monthlyData[goalName];
    !totalPoints[goalName] ? totalPoints[goalName] = pointsThisMonth : totalPoints[goalName] += pointsThisMonth;
  });
  return totalPoints
}


export const createChartData = progressData => {
  const dailyChartData = combineDataSetsIntoFormatedChartData(progressData, 'dailyProgress')
  const monthlyChartData = combineDataSetsIntoFormatedChartData(progressData, 'monthlyProgress')
  const totalPointsForEachGoal = createTotalPointsForEachGoal(monthlyChartData);

  return dispatch => dispatch({
    type: "CREATE_CHART_DATA",
    chartData: {
      daily: dailyChartData,
      monthly: monthlyChartData,
      total: totalPointsForEachGoal
    }
  });
}

export const updateChartPoints = (goalName, points) => {


  return (dispatch, getState) => {
    const {chartData} = getState();
    chartData.daily[chartData.daily.length - 1][goalName] += points;
    chartData.monthly[chartData.monthly.length - 1][goalName] += points;
    chartData.total[goalName] += points;
    

    dispatch({ type: "UPDATE_CHART_POINTS", chartData })
  }
}


const chartReducer = (state = {}, { type, chartData}) => {
  switch (type) {
    case "CREATE_CHART_DATA":
      return { ...chartData };
    case "UPDATE_CHART_POINTS":
      return { ...chartData };
    default:
      return state;
  }


}

export default chartReducer;