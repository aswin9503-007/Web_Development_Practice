import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  return <h1>Hello React StrictMode</h1>;
}

export default App;
