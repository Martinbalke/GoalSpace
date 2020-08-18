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
    let res = await superAgentAPICallRecieve('get', `${process.env.REACT_APP_PORT}/goals/${user}`);
      if(res && res.body){
        dispatch({ type: 'LOAD_GOALS', goals: [...res.body] });
        dispatch(loadProgressData(user));
      }
    }
}


export const newGoal = (goal, index) => {
  return async (dispatch) => {
    let res = await superAgentAPICallSend('post', `${process.env.REACT_APP_PORT}/goals`, goal)
      setTimeout(() => dispatch(createProgressData(res.body)), 2000);
      dispatch({ type: 'NEW_GOAL', goal: res.body, index })
  }
}

export const completeGoal = (id, index) => {
  return async (dispatch) => {
    await superAgentAPICallRecieve('delete', `${process.env.REACT_APP_PORT}/goals/${id}`);
      dispatch({ type: 'COMPLETE_GOAL', index })
      dispatch(removeProgressData(index))
  }
}

export const updateGoal = (goal, index) => {
  return async (dispatch) => {
    await superAgentAPICallSend('put', `${process.env.REACT_APP_PORT}/goals/${goal._id}`, goal)
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