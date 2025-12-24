
// Functional Component with destructuring
const Welcome = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

// Parent Component
const App = () => {
  return <Welcome name="Aswin" />;
};

export default App;