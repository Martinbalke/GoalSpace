import superagent from 'superagent';




const getAndFormatDate = (format) => {
  //Creat a new date for today and then turn it into an array
  const date = new Date().toDateString().split(' ');
  // Date[1] represents the month [2] represents the day and [3] the year
  if(format === 'day') return `${date[1]} ${date[2]}`
  if(format === 'month') return `${date[1]} ${date[3]}`
} 
const day = getAndFormatDate('day');
const month = getAndFormatDate('month');



export const loadProgressData = () => {

  return async dispatch => {
    try {
      let res = await superagent.get(`http://localhost:3045/progress`).retry()
      dispatch({type: 'LOAD_PROGRESS', progress: res.body})
    } catch (error) {
      console.error(error);
    }
   
  }
}

export const createProgressData = (goalId) => {
  const dayObject = {}
  dayObject[day] = 0

  const monthObject = {}
  monthObject[month] = 0

  const basicProgressData = {
    dailyProgress: dayObject,
    monthlyProgress: monthObject,
    associatedGoal: goalId
  }
  return async dispatch => {
    
    const jsonProgressData = JSON.stringify(basicProgressData);
      try {
       let res = await superagent.post('http://localhost:3045/progress')
          .set('Content-Type', 'application/json')
          .send(jsonProgressData)
          .retry()
        dispatch({ type: 'CREATE_PROGESS', progess: res.body})
      } catch (error) {
        console.error(error);
      }
    }

  }







export const updateProgressPoints = (goalId, amount) =>{
  return async dispatch => {
    try {
      //Get the progress for the goal by goaldID
      const res = await superagent.get(`http://localhost:3045/progress/${goalId}`)
      .retry()
      //Modify the progress data
      let progress = res.body;
      progress.monthlyProgress[month] ? progress.monthlyProgress[month] += amount : progress.monthlyProgress[month] = amount;
      progress.dailyProgress[day] ? progress.dailyProgress[day] += amount : progress.dailyProgress[day] = amount ;
      //Update the progress in the database
      const jsonProgressData = JSON.stringify(progress);
      await superagent.put(`http://localhost:3045/progress/${progress._id}`)
      .set('Content-Type', 'application/json')
      .send(jsonProgressData)
      .retry()
      dispatch({type: 'UPDATE_POINTS', progress, amount})
    } catch (error) {
      console.error(error);
    }
  
  }


}



const initialState = []


const progressReducer = (state = initialState, {type, amount, progress}) => {
  const newState = [...state];
  switch(type){
    case 'LOAD_PROGRESS': 
        return [...progress];
    case 'REMOVE_GOAL':
      break;
    case 'CREATE_PROGRESS':
        let newEntry = {
          associatedGoal: progress.associatedGoal.goal,
          dailyProgress: progress.dailyProgress,
          monthlyProgress: progress.monthlyProgress
        }
        return [...newState, newEntry];
    case 'UPDATE_POINTS':
      return newState.map(current => {
        if(current._id === progress._id){
          current = progress
        }
        return current;
      })
    default: 
    return newState
  }

  return newState;
}


export default progressReducer;