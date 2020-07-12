
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
      await superagent.post('http://localhost:3045/goals')
        .set('Content-Type', 'application/json')
        .send(jsonGoal)
        .retry()
      dispatch({ type: 'NEW_GOAL', goal, index })
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
      dispatch({ type: 'NEW_GOAL', goal, index })
    } catch (error) {
      console.error(error);
    }
  }

}

export const updateMilestone = (goal, index) => {
  return async (dispatch) => {
    let jsonGoal = JSON.stringify(goal);
    try {
      let res = await superagent.put(`http://localhost:3045/goals/${goal._id}`)
        .set('Content-Type', 'application/json')
        .send(jsonGoal)
        .retry()
      console.log(res)
      dispatch({ type:'UPDATE_MILESTONE' , goal, index })
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
      if (newState.goals[index]) {
        newState.goals.splice(index, 1)
      }
      newState.goals = [...newState.goals, goal]
      break;
    case 'UPDATE_MILESTONE':
      newState.goals[index].milestone = goal.milestone;
      break;
    default:
      return newState;
  }
  return newState;
}


export default goalReducer;