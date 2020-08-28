import { createStore, applyMiddleware, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import goals from './goalReducer';
import progress from './progressReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({goals, progress})
const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });


export default function configureStore() {
  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
}

