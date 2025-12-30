
import WelcomePage from './welcomePage';
import UserProvider from './context';

const App = () => {
  return (
    <UserProvider>
      <WelcomePage />
    </UserProvider>
  );
};

export default App;