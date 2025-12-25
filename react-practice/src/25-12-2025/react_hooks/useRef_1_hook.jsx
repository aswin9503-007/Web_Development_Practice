// Accessing the DOM using useRef hook.

import { Fragment, useRef } from 'react';

function App() {
    const focusPoint = useRef(null);
    const onClickHandler = () => {
        focusPoint.current.value =
            "Hi Everyone I am Aswin S, I am a Software Developer.";
        focusPoint.current.focus();
    };
    return (
        <Fragment>
            <div>
                <button onClick={onClickHandler}>
                    ACTION
                </button>
            </div>
            <label>
                Click on the action button to
                focus and populate the text.
            </label><br />
            <textarea ref={focusPoint} />
        </Fragment>
    );
};
export default App;