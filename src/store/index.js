import { createStore, applyMiddleware, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import goals from './goalReducer';
import progress from './progressReducer';
import thunk from 'redux-thunk';
import chartData from './chartReducer'

const rootReducer = combineReducers({goals, progress, chartData})
const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });


export default function configureStore() {
  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
}

