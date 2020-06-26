

let initialState = {
  goals: [{
    yearly: 'Thing',
    milestone: 'Do the thing',
    habit1: 'make a thing',
    habit2: 'do a thing',
    habit3: 'be a thing',
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
  console.log(newState);
  return newState;
}


export default goalReducer;