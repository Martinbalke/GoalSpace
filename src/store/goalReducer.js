
import superagent from 'superagent';
import {createProgressData, loadProgressData} from './progressReducer';


export const loadGoals = () => {
  return async (dispatch) => {
    let goals = [];
    try {
      let res = await superagent.get('http://localhost:3045/goals').retry()
      res.body.forEach(goal => goals.push(goal));
      dispatch({ type: 'LOAD_GOALS', goals });
      dispatch(loadProgressData());
    } catch (error) {
      console.error(error);
    }

  }
}


export const newGoal = (goal, index) => {

  return async (dispatch) => {
    let jsonGoal = JSON.stringify(goal);
    try {
      let res = await superagent.post('http://localhost:3045/goals')
        .set('Content-Type', 'application/json')
        .send(jsonGoal)
        .retry()

      dispatch(createProgressData(res.body._id));
      dispatch({ type: 'NEW_GOAL', goal: res.body, index })
      
    } catch (error) {
      console.error(error);
    }
  }
}

export const completeGoal = (id, index) => {
  return async (dispatch) => {
    try {
      await superagent.delete(`http://localhost:3045/goals/${id}`)
        .set('Content-Type', 'application/json')
        .retry()
      dispatch({ type: 'COMPLETE_GOAL', index })
    } catch (error) {
      console.error(error);
    }
  }
}

export const updateGoal = (goal, index) => {
  return async (dispatch) => {
    let jsonGoal = JSON.stringify(goal);
    try {
      await superagent.put(`http://localhost:3045/goals/${goal._id}`)
        .set('Content-Type', 'application/json')
        .send(jsonGoal)
        .retry()
      dispatch({ type: 'UPDATE_GOAL', goal, index })
    } catch (error) {
      console.error(error);
    }
  }

}




let initialState = []


let goalReducer = (state = initialState, { goals, goal, type, index }) => {
  let newState = [...state]
  

  switch (type) {
    case 'LOAD_GOALS':
      newState = [...goals]
      break;
    case 'NEW_GOAL':
      newState = [...newState, goal]
      break;
    case 'UPDATE_GOAL':
      newState = [
        ...newState.slice(0, index),
        goal,
        ...newState.slice(index + 1)
      ]
      break;
    case 'COMPLETE_GOAL':
      return newState.filter((g, i) => index !== i);
    default:
      return newState;
  }
  return newState;
}


export default goalReducer;