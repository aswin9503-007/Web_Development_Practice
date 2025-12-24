
function Greet(props) {
    return <h1>Hello, {props.name}!</h1>;
}

function App() {
    return <Greet name="Aswin" />;
}

export default App;