
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const gohome = () => {
    navigate(-1);
  };
  return (
    <div>
      <h3>Welcome to about us page</h3>
      <button onClick={gohome}>Go to Home Page</button>
    </div>
  );
};

export default About;