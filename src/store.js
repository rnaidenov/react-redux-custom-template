import { createStore, combineReducers, applyMiddleware } from 'redux';
import quotesReducer from './reducers/quotesReducer';
import thunk from 'redux-thunk';


const reducer = combineReducers({
    quotesReducer
});

const store = createStore(
    reducer,
    applyMiddleware(thunk)
)

export default store;