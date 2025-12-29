
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './action';

const App = () => {
    const count = useSelector(state => state.count);  // Select only count
    const dispatch = useDispatch();

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
        </div>
    );
};

export default App;