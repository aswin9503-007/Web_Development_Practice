function Parent() {
    const greet = "Hello, Aswin!";
    return <Child message={greet} />;
}

function Child({ message }) {
    return <p>{message}</p>;
}

export default Parent;