
import { useLayoutEffect, useState } from "react";

const App = () => {
    const [value, setValue] = useState("Aswin");

    useLayoutEffect(() => {
        console.log(
            "HI I AM A SOFTWARE DEVELOPER ",
            value
        );
    }, [value]);
    setTimeout(() => {
        setValue("GeeksForGeeks");
    }, 2000);

    return (
        <div
            style={{
                textAlign: "center",
                margin: "auto",
            }}
        >
            <h1 style={{ color: "green" }}>{value}</h1>
            Hello Everyone
        </div>
    );
};

export default App;