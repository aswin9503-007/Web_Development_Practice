function Parent() {
    const handleClick = () => {
        alert('Button clicked in Child!');
    };

    return <Child onClick={handleClick} />;
}

function Child(props) {
    return <button onClick={props.onClick}>Click Me!</button>;
}

function App() {
    return (
        <div>
            <Parent />
        </div>
    );
}

export default App;