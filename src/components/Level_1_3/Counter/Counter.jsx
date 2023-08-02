import { useState } from 'react';
import './Counter.scss'

const Counter = () => {

const [count, setCount] = useState(0)

const addOne = () => {
  setCount(prevCount => prevCount + 1);
}
const removeOne = () => {
  setCount(prevCount => prevCount - 1);
}

const reset = () => {
  setCount(prevCount => prevCount = 0);
}

  return ( 
  <>
  <section className="counter_section">
    <div className="counter_container">
      <button onClick={addOne}>+</button>
      <p className="counter_output">{count}</p>
      <button onClick={removeOne}>-</button>
    </div>
    <button onClick={reset}>Reset</button>
  </section>
  </>
  );
}

export default Counter;