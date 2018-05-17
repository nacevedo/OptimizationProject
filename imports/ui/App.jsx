import React, {Component} from "react";
import {withTracker} from 'meteor/react-meteor-data';

import {Inventory} from "../api/inventory.js";
import {Parameters} from "../api/parameters.js";

import Nav from "./Nav";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
                <Nav inventory={this.props.inventory} parameters={this.props.parameters}/>
        );
    }
}

export default withTracker(() => {
    Meteor.subscribe("Inventory");
    Meteor.subscribe("Parameters");
    return {
        inventory:Inventory.find({}).fetch(),
        parameters:Parameters.find({}).fetch()
    };
})(App);