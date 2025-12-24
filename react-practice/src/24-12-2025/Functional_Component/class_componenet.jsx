import { Component } from "react";
class Greetings extends Component {
    render() {
        return (<>
            <h1>{`Welcome ${this.props.name}`}</h1>
        </>)

    }
}
export default Greetings
