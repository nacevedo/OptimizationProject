import React, {Component} from "react";
import {render} from 'react-dom';
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import {Meteor} from 'meteor/meteor';

import Content from "./Content";
import Input from "./Input";

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Router>
                <div className="wrapper">

                    <div className="sidebar" data-image="../assets/img/sidebar-5.jpg">
                        <div className="sidebar-wrapper">
                            <div className="logo">
                                <a href="#" className="simple-text">
                                    <img src="images/logo.png" alt="Tecsai Logo"/>
                                </a>
                            </div>
                            <ul className="nav">
                                <li>
                                    <NavLink exact className="nav-link" to="/">
                                        <i className="fa fa-dashboard"></i>
                                        <p>Dashboard</p>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink exact className="nav-link" to="/input">
                                        <i className="fa fa-file"></i>
                                        <p>Input</p>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="main-panel">
                        <nav className="navbar navbar-expand-lg " color-on-scroll="500">
                            <div className=" container-fluid  ">
                                <a className="navbar-brand" href="http://www.tecsaing.com/"> <strong>Tecsai</strong> 🦄 </a>
                                <button href="" className="navbar-toggler navbar-toggler-right" type="button"
                                        data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false"
                                        aria-label="Toggle navigation">
                                    <span className="navbar-toggler-bar burger-lines"></span>
                                    <span className="navbar-toggler-bar burger-lines"></span>
                                    <span className="navbar-toggler-bar burger-lines"></span>
                                </button>
                                <div className="collapse navbar-collapse justify-content-end" id="navigation">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#pablo">
                                                <span className="no-icon">Account</span>
                                            </a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="http://example.com"
                                               id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                                               aria-expanded="false">
                                                <span className="no-icon">Dropdown</span>
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                                <div className="divider"></div>
                                                <a className="dropdown-item" href="#">Separated link</a>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#pablo">
                                                <span className="no-icon">Log out</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>


                        <Switch>
                            <div className="content">
                                <Route exact path="/" component={Content}/>
                                <Route exact path="/input" component={Input}/>
                            </div>
                        </Switch>

                    </div>

                </div>
            </Router>
        );
    }
}

export default Nav;