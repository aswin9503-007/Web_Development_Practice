
import { useParams } from "react-router-dom";

const UserDetail = () => {
  const { userId } = useParams();
  return (
    <div>
      <h1>User Details:</h1>
      <p>User information is:{userId}</p>
    </div>
  );
};

export default UserDetail;