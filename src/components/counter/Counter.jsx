/* eslint-disable react/prop-types */
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count - 1);
    };
  return (
    <div className="counter_box">
        <div>Значение счётчика: {count}</div>
        <div className='button_block'>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
        </div>      
    </div>
  )
}

export default Counter
