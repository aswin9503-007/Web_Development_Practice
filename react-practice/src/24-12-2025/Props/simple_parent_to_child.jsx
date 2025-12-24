function Parent() {
    return (
        <div>
            <h1>Welcome to the Parent Component!</h1>
            <Child name="Aswin" />  {/* Passing the 'name' prop with value "John" */}
        </div>
    );
}

function Child(props) {
    return <h2>Hello, {props.name}!</h2>; 
}

function App() {
    return (
        <div>
            <Parent />  {/* Render the Parent component */}
        </div>
    );
}

export default App;