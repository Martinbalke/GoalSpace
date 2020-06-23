

let initialState = {
  goals: [{
    yearly: 'Thing',
    milestone: 'Do the thing',
    habit1: 'make a thing',
    habit2: 'do a thing',
    habit3: 'be a thing',
  }]
}


let goalReducer = (state = initialState, action) => {
  let newState = { ...state };

  switch (action.type) {
    case 'NEW_GOAL':
        console.log(action.goal);
      break;
    default:
      return newState;
  }


  return newState;
}


export default goalReducer;