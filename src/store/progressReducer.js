import { superAgentAPICallRecieve, superAgentAPICallSend } from './goalReducer';


const getAndFormatDate = (format) => {
  //Creat a new date for today and then turn it into an array
  const date = new Date().toDateString().split(' ');
  // Date[1] represents the month [2] represents the day and [3] the year
  if (format === 'day') return `${date[1]} ${date[2]}`
  if (format === 'month') return `${date[1]} ${date[3]}`
}
const day = getAndFormatDate('day');
const month = getAndFormatDate('month');



export const loadProgressData = (user) => {
  //TODO MAKE PROGRESS DEPEND ON GOALS 
  return async dispatch => {
    let res = await superAgentAPICallRecieve('get', `${process.env.REACT_APP_PORT}/progress/user/${user}`);
    if(res && res.body)dispatch({ type: 'LOAD_PROGRESS', progress: res.body })
  }
}

export const createProgressData = (goal) => {
  const createFirstProgressData = {
    dailyProgress: { [day]: 0 },
    monthlyProgress: { [month]: 0 },
    associatedGoal: goal._id,
    user: goal.user
  }

  return async dispatch => {
    let res = await superAgentAPICallSend('post', `${process.env.REACT_APP_PORT}/progress`, createFirstProgressData)
    dispatch({ type: 'CREATE_PROGRESS', progress: res.body })
  }
}


export const removeProgressData = (index) => (dispatch) => dispatch({type: 'REMOVE_PROGRESS', index})







export const updateProgressPoints = (goalId, amount) => {
  return async dispatch => {
      //Get the progress for the goal by goaldID
    const res = await superAgentAPICallRecieve('get', `${process.env.REACT_APP_PORT}/progress/goal/${goalId}`)

      //Modify the progress data
      let progress = res.body;
      progress.monthlyProgress[month] ? progress.monthlyProgress[month] += amount : progress.monthlyProgress[month] = amount;
      progress.dailyProgress[day] ? progress.dailyProgress[day] += amount : progress.dailyProgress[day] = amount;
      //Update the progress in the database
    await superAgentAPICallSend('put', `${process.env.REACT_APP_PORT}/progress/${progress._id}`, progress)
      dispatch({ type: 'UPDATE_POINTS', progress })
  }
}




const progressReducer = (state = [], { type, progress, index }) => {
  const newState = [...state];
  switch (type) {
    case 'LOAD_PROGRESS':
      return [...progress];
    case 'CREATE_PROGRESS':
      return [...newState, progress];
    case 'REMOVE_PROGRESS': 
      return newState.filter((g, i) => index !== i);
    case 'UPDATE_POINTS':
      return newState.map(current => current._id === progress._id ? current = progress : current)
    default:
      return newState
  }
}


export default progressReducer;