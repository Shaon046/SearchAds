import {createStore,applyMiddleware}from 'redux';
import thunk from 'redux-thunk'
import { searchReducer } from './reducer/searchReducer';



const store=createStore(searchReducer,applyMiddleware(thunk))


export default store