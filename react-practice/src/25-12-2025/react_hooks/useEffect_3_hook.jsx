// To run useEffect only once on the first render pass any empty array in the dependency

import React, { useEffect } from 'react';
function App() {
  useEffect(() => {
    console.log("This runs only once on the first render!");
    // You can put any initialization logic here
    // e.g., API call, event listener, analytics tracking
  }, []); // Empty array ensures it runs only on mount
  return (
    <div>
      <h1>useEffect with Empty Dependency Array</h1>
      <p>Open the console to see the effect log.</p>
    </div>
  );
}

export default App;