

const  Box = (props) => {
    return (
        <div style={props.style}>
            {props.text}
        </div>
    )
}

function App() {
    const Box1 = {
        backgroundColor: "blue",
        color: "white",
        padding: "10px 20px",
        width: "20px",
        height: "50px",
    };

    const Box2 = {
        backgroundColor: "red",
        color: "white",
        padding: "12px 25px",
        width: "30px",
        height: "50px",
    };
    return (
        <div >
            <Box text="Box1" style={Box1} />
            <Box text="Box2" style={Box2} />
        </div>
    );
}

export default App;