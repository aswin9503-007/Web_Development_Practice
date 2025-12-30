import { useContext } from 'react';
import { UserContext } from './context'; 

const WelcomePage = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>Welcome User:</h1>
      <p>Name: {user.name} id: {user.id}</p>
    </div>
  );
};

export default WelcomePage;