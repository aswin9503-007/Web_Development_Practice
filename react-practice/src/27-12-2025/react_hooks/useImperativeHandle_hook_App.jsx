
import React, { useRef } from "react";
import Input from "./useImperativeHandle_hook_input"

const App = () => {
	const inputRef = useRef(null);
	return (
		<div>
			<Input onFocus={() => inputRef.current.focus()} ref={inputRef} />
		</div>
	);
};

export default App;