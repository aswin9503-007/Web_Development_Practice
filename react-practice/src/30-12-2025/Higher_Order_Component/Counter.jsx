
const Counter = ({ count, increment, decrement, reset }) => {
  return (
    <div >
      <h2 >Counter App</h2>
      <div >{count}</div>
      <div >
        <button onClick={increment} className="btn">+</button>
        <button onClick={decrement} className="btn">-</button>
        <button onClick={reset} className="btn reset">Reset</button>
      </div>
    </div>
  );
};

export default Counter;