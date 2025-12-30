import React from "react";

const numbers = [1, 2, 3, 4, 5];

function List(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number, index) =>
        <li>{number}</li>);
    return (
        <> 
            <div>List of numbers</div>
            <ul>{listItems}</ul>
        </>
    );
}

function App() {
    return (
        <React.Fragment> 
        {/*Fragment is a component that is not rendered */}
            <List numbers={numbers} />
        </React.Fragment>
    );
}

export default App;