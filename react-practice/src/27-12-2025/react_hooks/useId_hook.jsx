import { useId } from "react";
function App() {
    const id1 = useId();
    const id2 = useId();
    return (
        <div className="App">
            <p> The id1 is {id1} </p>
            <p>The id2 is {id2}</p>
        </div>
    );
}

export default App;