import { useState } from "react";

function Greet(){
    const [message, setMessage] = useState("Hello, World!");
    return(
        <>
            <h1>{message}</h1>
            <button onClick={() => setMessage("Welcome World!!")}>Click me</button>
        </>
    );
}

export default Greet;