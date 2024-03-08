// store.js
import { createStore } from 'redux';
import rootReducer from './reducers'; // assuming you have a rootReducer

const store = createStore(rootReducer);

export default store;