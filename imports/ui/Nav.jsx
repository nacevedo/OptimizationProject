import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';

import Content from "./Content";
import Projects from "./Projects";
import Footer from "./Footer";
import Inventory from "./Inventory";
import Budget from "./Budget";
import Parameters from "./Parameters";
import Results from "./Results";

class Nav extends Component {

    render() {
        return (
            <Router>
                <div className="wrapper">

                    <div className="sidebar">
                        <div className="sidebar-wrapper">
                            <div className="logo">
                                <img src="images/logo.png" alt="Tecsai Logo"/>
                            </div>
                            <ul className="nav">
                                <li>
                                    <NavLink activeClassName="active-link" exact className="nav-link" to="/">
                                        <i className="fa fa-bar-chart"></i>
                                        <p>Tablero de Control</p>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink exact activeClassName="active-link" className="nav-link" to="/inventory">
                                        <i className="fa fa-wrench"></i>
                                        <p>Inventario</p>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink exact activeClassName="active-link" className="nav-link" to="/projects">
                                        <i className="fa fa-calendar"></i>
                                        <p>Proyectos</p>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink exact activeClassName="active-link" className="nav-link" to="/budget">
                                        <i className="fa fa-usd"></i>
                                        <p>Presupuesto</p>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink exact activeClassName="active-link" className="nav-link" to="/results">
                                        <i className="fa fa-file"></i>
                                        <p>Resultados</p>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink exact activeClassName="active-link" className="nav-link" to="/parameters">
                                        <i className="fa fa-list"></i>
                                        <p>Parámetros</p>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="main-panel">
                        <nav className="navbar navbar-expand-lg " color-on-scroll="500">
                            <div className=" container-fluid  ">
                                <a className="navbar-brand" href="http://www.tecsaing.com/" target="_blank">
                                    <strong>Tecsai</strong></a>
                                <button href="" className="navbar-toggler navbar-toggler-right" type="button"
                                        data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false"
                                        aria-label="Toggle navigation">
                                    <span className="navbar-toggler-bar burger-lines"></span>
                                    <span className="navbar-toggler-bar burger-lines"></span>
                                    <span className="navbar-toggler-bar burger-lines"></span>
                                </button>
                                <div className="collapse navbar-collapse justify-content-end" id="navigation">
                                    <ul className="navbar-nav ml-auto">
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
                                            <a className="nav-link" href="#">
                                                <span className="no-icon">About</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        <div className="content">
                            <Switch>
                                <Route exact path="/" component={Content}/>
                                <Route exact path="/projects" component={Projects}/>
                                <Route exact path="/inventory"
                                       render={(props) => <Inventory {...props} inventory={this.props.inventory}/>}/>
                                <Route exact path="/budget"
                                       render={(props) => <Budget {...props} budget={this.props.budget}/>}/>
                                <Route exact path="/parameters"
                                       render={(props) => <Parameters {...props} parameters={this.props.parameters}
                                                                      inventory={this.props.inventory}/>}/>
                                <Route exact path="/results" component={Results}/>
                            </Switch>
                        </div>
                        <Footer/>
                    </div>

                </div>
            </Router>
        );
    }
}

export default Nav;