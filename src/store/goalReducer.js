import superagent from 'superagent';
import { createProgressData, loadProgressData, removeProgressData } from './progressReducer';

export const superAgentAPICallRecieve = async (method, uri) => {
  try {
    return await superagent[method](uri).retry()
  } catch (error) {
    console.error(error);
  }
}


export const superAgentAPICallSend = async (method, uri, data) => {
  let jsonData = JSON.stringify(data);
  try {
    return await superagent[method](uri)
      .set('Content-Type', 'application/json')
      .send(jsonData)
      .retry()
  } catch (error) {
    console.error(error);
  }
}

export const loadGoals = (user) => {

  return async (dispatch) => {
    console.log(user)
      let res = await superAgentAPICallRecieve('get', `http://localhost:3045/goals/${user}`);
      console.log(res)
      dispatch({ type: 'LOAD_GOALS', goals: [...res.body] });
      dispatch(loadProgressData());
    }
}


export const newGoal = (goal, index) => {
  return async (dispatch) => {
      let res = await superAgentAPICallSend('post', 'http://localhost:3045/goals', goal)
      setTimeout(() => dispatch(createProgressData(res.body._id)), 2000);
      dispatch({ type: 'NEW_GOAL', goal: res.body, index })
  }
}

export const completeGoal = (id, index) => {
  return async (dispatch) => {
      await superAgentAPICallRecieve('delete', `http://localhost:3045/goals/${id}`);
      dispatch({ type: 'COMPLETE_GOAL', index })
      dispatch(removeProgressData(index))
  }
}

export const updateGoal = (goal, index) => {
  return async (dispatch) => {
      await superAgentAPICallSend('put', `http://localhost:3045/goals/${goal._id}`, goal)
      dispatch({ type: 'UPDATE_GOAL', goal, index })
  }
}



let goalReducer = (state = [], { goals, goal, type, index }) => {
  let newState = [...state]
  
  switch (type) {
    case 'LOAD_GOALS':
      return [...goals]
    case 'NEW_GOAL':
      return [...newState, goal]
    case 'UPDATE_GOAL':
      return newState.map(state => state._id === goal._id ? state = goal : state);
    case 'COMPLETE_GOAL':
      return newState.filter((g, i) => index !== i);
    default:
      return newState;
  }
}


export default goalReducer;