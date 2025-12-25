import { useState } from 'react';


const App = () => {
    const [num, setNum] = useState(0);
    const handleClick = () => {
        setNum(num + 1);
    };

    return (
        <div>
            <h2> {num}</h2>
            <button onClick={handleClick}>
                Add one
            </button>
        </div>
    );
};

export default App;