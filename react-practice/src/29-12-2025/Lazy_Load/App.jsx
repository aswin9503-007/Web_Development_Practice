import { Suspense, lazy } from "react";

const About = lazy(() => import("./About"));

function App() {
  return (
    <div>
      <h1>Home Page</h1>

      <Suspense fallback={<p>Loading...</p>}>
        <About />
      </Suspense>
    </div>
  );
}

export default App;
