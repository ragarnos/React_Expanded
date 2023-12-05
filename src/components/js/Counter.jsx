import { useContext } from 'react';
import { CounterContext } from './CounterContext';

const Counter = () => {
  const { state, dispatch } = useContext(CounterContext);

  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
};

export default Counter;