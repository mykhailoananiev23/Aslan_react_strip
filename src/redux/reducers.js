// reducers.js
const initialState = {
    // Define your initial state here
  };
  
  const rootReducer = (state = initialState, action) => {
    // Define how state should change for each action type
    switch (action.type) {
      case 'INCREMENT':
        return { ...state, count: state.count + 1 };
      case 'DECREMENT':
        return { ...state, count: state.count - 1 };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  