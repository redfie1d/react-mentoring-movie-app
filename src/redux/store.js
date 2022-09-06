import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import movieListReducer from './reducers/movieListReducer';

export default createStore(movieListReducer, applyMiddleware(thunk));
