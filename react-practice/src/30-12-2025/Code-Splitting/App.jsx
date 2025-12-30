import { Suspense, lazy } from "react";

const Dashboard = lazy(() => import("./Dashboard"));

function App() {
  return (
    <div>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Dashboard />
      </Suspense>
    </div>
  );
}

export default App;
