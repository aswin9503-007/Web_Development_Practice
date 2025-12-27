import { useState, useCallback, useEffect } from "react";

const funcSet = new Set();

const App = () => {
  const [cnt, setCnt] = useState(0);
  const [num, setNum] = useState(0);

  const incCnt = useCallback(() => {
    setCnt(prev => prev + 1);
  }, []);

  const decCnt = useCallback(() => {
    setCnt(prev => prev - 1);
  }, []);

  const incNum = useCallback(() => {
    setNum(prev => prev + 1);
  }, []);

  useEffect(() => {
    funcSet.add(incCnt);
    funcSet.add(decCnt);
    funcSet.add(incNum);

    console.log("Unique callback functions:", funcSet.size);
  }, [incCnt, decCnt, incNum]);

  return (
    <div>
      <h2>With useCallback Hook</h2>

      <h3>Counter: {cnt}</h3>
      <button onClick={incCnt}>Increase Counter</button>
      <button onClick={decCnt}>Decrease Counter</button>

      <h3>Number: {num}</h3>
      <button onClick={incNum}>Increase Number</button>
    </div>
  );
};

export default App;
