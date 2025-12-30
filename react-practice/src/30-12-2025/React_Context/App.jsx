import UserContext from "./UserContext";
import Home from "./Home";

function App() {
  const userName = "Aswin";

  return (
    <UserContext.Provider value={userName}>
      <Home />
    </UserContext.Provider>
  );
}

export default App;
