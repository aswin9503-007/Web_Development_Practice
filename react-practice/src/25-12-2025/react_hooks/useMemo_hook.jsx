import { useState, useMemo } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(5);

  // Expensive calculation
  const squaredNumber = useMemo(() => {
    console.log("Calculating...");
    return number * number;
  }, [number]);

  return (
    <div>
      <h1>useMemo Example</h1>

      <p>Number: {number}</p>
      <p>Squared Value: {squaredNumber}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <button onClick={() => setNumber(number + 1)}>
        Increase Number
      </button>
    </div>
  );
}

export default App;
