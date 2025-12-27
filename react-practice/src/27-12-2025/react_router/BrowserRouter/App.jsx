
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import UserDetail from "./UserDetail";
import UserProfile from "./UserProfile";

const App = () => {
  return (
    <div>
      <Router>
        <nav>
          <ul style={{ display: "flex", gap: "20px" }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/user/123">User Details</Link>
            </li>
            <li>
              <Link to="/profile">User Profile</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:userId" element={<UserDetail />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;