


import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { ManagePictureReducer } from './Reducers/ManagePictureReducer';

const rootReducers = combineReducers({
    ManagePictureReducer,
});

export const store = createStore(rootReducers, applyMiddleware(thunk));
