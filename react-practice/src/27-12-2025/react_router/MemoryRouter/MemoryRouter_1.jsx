// the usage of MemoryRouter in React

import { MemoryRouter, Routes, Route, Link } from 'react-router-dom';

const Home = () => <h2>Welcome to Home!</h2>;
const About = () => <h2>Learn more about us.</h2>;

const App = () => {
  return (
    <MemoryRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <hr />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </MemoryRouter>
  );
};

export default App;