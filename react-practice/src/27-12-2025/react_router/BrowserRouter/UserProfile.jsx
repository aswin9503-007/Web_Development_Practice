
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/login");
  };
  return (
    <div>
      <h1>User Profile</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default UserProfile;