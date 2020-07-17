
import superagent from 'superagent';


export const loadGoals = () => {
  return async (dispatch, getState) => {
    let goals = [];
    try {
      let res = await superagent.get('http://localhost:3045/goals').retry()
      res.body.forEach(goal => goals.push(goal));
      dispatch({ type: 'LOAD_GOALS', goals })
    } catch (error) {
      console.error(error);
      goals = getState().goals;
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

export const updateMilestone = (goal, index) => {
  return async (dispatch, getState) => {
    let jsonGoal = JSON.stringify(goal);
    try {
      await superagent.put(`http://localhost:3045/goals/${goal._id}`)
        .set('Content-Type', 'application/json')
        .send(jsonGoal)
        .retry()
      dispatch({ type: 'UPDATE_MILESTONE', goal, index })
    } catch (error) {
      console.error(error);
    }
  }

}




let initialState = {
  goals: [
  ]
}


let goalReducer = (state = initialState, { goals, goal, type, index }) => {
  let newState = { ...state };
  

  switch (type) {
    case 'LOAD_GOALS':
      newState.goals = [...goals]
      break;
    case 'NEW_GOAL':
      newState.goals = [...newState.goals, goal]
      break;
    case 'UPDATE_GOAL':
      
      newState.goals = [
        ...newState.goals.slice(0, index),
        goal,
        ...newState.goals.slice(index + 1)
      ]
      break;
    case 'COMPLETE_GOAL':
      return newState.goals.filter((goal, i) => index !== i)
    case 'UPDATE_MILESTONE':
      newState.goals = [
        ...newState.goals.slice(0, index),
        goal,
        ...newState.goals.slice(index + 1)
      ]
      break;
    default:
      return newState;
  }
  return newState;
}


export default goalReducer;