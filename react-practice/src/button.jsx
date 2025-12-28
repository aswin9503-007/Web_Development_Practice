import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const decrement1 = () => {
    if (count1 > 0) {
      setCount1(count1 - 1);
    }
  };

  useEffect(() => {
    console.log(`button Clicked ${count} times`);
  }, [count, count1]);

  return (
    <>
      <h2>counter: {count}</h2>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <button onClick={() => setCount1(count1 + 1)}>Increment 1</button>
      <button onClick={decrement1}>Decrement 1</button>
    </>
  );
};

export default Counter;
