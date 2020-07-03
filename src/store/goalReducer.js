



export let newGoal = (goal, index ) => {

  return async(dispatch) => {
    dispatch({type: 'NEW_GOAL', goal, index})
  }
}



let initialState = {
  goals: [{
    goal: 'Build this website',
    milestone: 'Finish the website',
    habits: ['Do some styling each day', 'Write tests', 'Work on functionality']
  }]
}


let goalReducer = (state = initialState, {goal, type, index}) => {
  let newState = { ...state };

  switch (type) {
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