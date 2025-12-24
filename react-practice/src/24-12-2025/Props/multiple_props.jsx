function Parent() {

    return (
        <div>
            <h1>Welcome to the Parent Component!</h1>
            <Child name="Jiya" age={25} city="New York" />
        </div>
    );
}

function Child(props) {

    return (
        <div>
            <h2>Hello, {props.name}!</h2>
            <p>You are {props.age} years old.</p>
            <p>You live in {props.city}.</p>
        </div>
    );
}

function App() {

    return (
        <div >
            <Parent />
        </div>
    );
}

export default App;