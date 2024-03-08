// Counter.js (example component)
import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './redux/actions';

const mapStateToProps = (state) => ({
  count: state.count,
});

const mapDispatchToProps = {
  increment,
  decrement,
};
const Counter = ({ count, increment, decrement }) => {
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};


export default connect(mapStateToProps, mapDispatchToProps)(Counter);
