import React from "react";

function Parent() {
    const [count, setCount] = React.useState(0);

    const inc = () => setCount(count + 1);

    return <Child iCount={inc} />;
}

function Child({ iCount }) {
    return <button onClick={iCount}>inc</button>;
}

export default Parent;