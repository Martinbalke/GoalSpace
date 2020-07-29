import { createStore, applyMiddleware, combineReducers } from 'redux';
import goals from './goalReducer';
import progress from './progressReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({goals, progress})


export default function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
}

