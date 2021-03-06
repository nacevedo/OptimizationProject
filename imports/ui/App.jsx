import React, {Component} from "react";
import {withTracker} from 'meteor/react-meteor-data';

import {Inventory} from "../api/inventory.js";
import {Parameters} from "../api/parameters.js";
import {LastUpdate} from "../api/lastUpdate.js";
import {Projects} from "../api/projects.js";

import Nav from "./Nav";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Nav inventory={this.props.inventory} parameters={this.props.parameters} budget={this.props.budget}
                 lastTime={this.props.lastTime} projects={this.props.projects}/>
        );
    }
}

export default withTracker(() => {
    Meteor.subscribe("Inventory");
    Meteor.subscribe("Parameters");
    Meteor.subscribe("Budget");
    Meteor.subscribe("LastUpdate");
    Meteor.subscribe("Projects");
    return {
        inventory: Inventory.find({}).fetch(),
        parameters: Parameters.find({}).fetch(),
        budget: Parameters.find({"name": "p"}).fetch(),
        lastTime: LastUpdate.find({}).fetch(),
        projects: Projects.find({}).fetch()
    };
})(App);