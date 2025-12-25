import React, { Suspense, lazy } from "react";

// Lazy load the component
const About = lazy(() => import("./suspense_about"));

function App() {
  return (
    <div>
      <h1>Home Page</h1>

      <Suspense fallback={<h2>Loading...</h2>}>
        <About />
      </Suspense>
    </div>
  );
}

export default App;
