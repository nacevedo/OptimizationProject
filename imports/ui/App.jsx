import React, {Component} from "react";
import {withTracker} from 'meteor/react-meteor-data';

import {Inventory} from "../api/inventory.js";

import Nav from "./Nav";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (

                <Nav inventory={this.props.inventory}/>

        );
    }
}

export default withTracker(() => {
    Meteor.subscribe("Inventory");
    return {
        inventory:Inventory.find({}).fetch()
    };
})(App);