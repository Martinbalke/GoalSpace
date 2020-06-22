import { createStore, applyMiddleware } from 'redux';
import goalReducer from './goalReducer';
import thunk from 'redux-thunk';

export default function configureStore() {
  return createStore(
    goalReducer,
    applyMiddleware(thunk)
  );
}

