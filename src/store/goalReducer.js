
import superagent from 'superagent';


export const loadGoals = () => {
  return async(dispatch, getState) => {
    let res =  await superagent.get('http://localhost:3045/goals')
    console.log(res.body[0].habits);
    let goals = [];
    res.body ? res.body.forEach(goal => goals.push(goal)) : goals = getState().goals;
    dispatch({type: 'LOAD_GOALS', goals})
  }
}


export const newGoal = (goal, index ) => {

  return async(dispatch) => {
    dispatch({type: 'NEW_GOAL', goal, index})
  }
}



let initialState = {
  goals: [{
    goal: '',
    habits: ['','','']
  }
  ]
}


let goalReducer = (state = initialState, {goals, goal, type, index}) => {
  let newState = { ...state };

  switch (type) {
    case 'LOAD_GOALS':
      newState.goals = [...goals]
    break;
    case 'NEW_GOAL':
        if(newState.goals[index]) {
          newState.goals.splice(index, 1)
        }
        newState.goals = [...newState.goals, goal]
      break;
    default:
      return newState;
  }
  return newState;
}


export default goalReducer;