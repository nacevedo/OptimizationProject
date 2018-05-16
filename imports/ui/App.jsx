import React, {Component} from "react";
import Sidebar from "./Sidebar";
import Nav from "./Nav";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
                <Nav/>
        );
    }
}

export default App;