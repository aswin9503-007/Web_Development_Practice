import React from "react";
import ThemeContext from "./useContext_hook_ThemeContext";
import Child from "./useContext_hook_child";

function App() {
  return (
    <ThemeContext.Provider value="light">
      <h1>useContext Example</h1>
      <Child />
    </ThemeContext.Provider>
  );
}

export default App;
