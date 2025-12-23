import React from "react";

function Counter(){
    const [count, setCount] = React.useState(0);

    return(
        <>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </>
    )
}

export default Counter;