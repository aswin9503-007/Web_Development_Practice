
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const goabout = () => {
    navigate("/about");
  };
  return (
    <div>
      <h3>Welcome to home page</h3>
      <button onClick={goabout}>Go to About page</button>
    </div>
  );
};

export default Home;