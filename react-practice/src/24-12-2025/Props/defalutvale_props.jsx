function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
Greeting.defaultProps = {
  name: "Guest",
};

function App() {
  return (
    <div>
      <Greeting />
      <Greeting name="Aswin" />
    </div>
  );
}
export default App;
