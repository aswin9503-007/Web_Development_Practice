
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";

function BlogPost() {
  let { id } = useParams();
  return <div style={{ fontSize: "50px" }}>Now showing post {id}</div>;
}

function Home() {
  return <h3>Home page</h3>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;