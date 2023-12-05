import { useContext, useState } from 'react';
import { CounterContext } from './js/CounterContext';

const Counter = () => {
    const { state, dispatch } = useContext(CounterContext);
    const [inputValue, setInputValue] = useState(0);

    const handleInputChange = (e) => {
        setInputValue(parseInt(e.target.value) || 0);
    };

    const handleAddClick = () => {
        dispatch({ type: 'add', payload: inputValue });
    };

    return (
        <div>
        Count: {state.count}
        <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        <input type="number" value={inputValue} onChange={handleInputChange} />
        <button onClick={handleAddClick}>Add to Count</button>
        </div>
    );
    };
  
export default Counter;