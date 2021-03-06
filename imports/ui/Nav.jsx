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

    constructor(props) {
        super(props);

        this.state = {
            grafica1: [],
            grafica2: [],
            grafica3: [],
            projectData: []
        };
    }

    handleChange(g) {
        var graficas = g.split("#");
        var grafica1 = [];
        var grafica2 = [];
        var grafica3 = [];

        for (i = 0; i < graficas.length; i++) {
            var separados = graficas[i].split(",");
            if (i == 0) {
                grafica1 = separados;
            }
            else if (i == 1) {
                grafica2 = separados;
            }
            else {
                grafica3 = separados;
            }
        }

        this.setState({projectData: grafica1});

        var data = [];
        for (var i = 0; i < grafica2.length; i += 2) {
            var j = parseInt(i + 1)
            data.push({name: grafica2[i], cantidad: parseInt(grafica2[j])});
        }
        this.setState({
            grafica2: data
        });

        var data1 = [];

        var demorados = 0;
        var noDemora = 0;

        for (var i = 0; i < grafica1.length; i += 4) {
            if (grafica1[i + 3] == "1") {
                demorados++;
            }
            else {
                noDemora++;
            }
        }

        data1.push({name: "Demorados", value: parseInt(demorados)});
        data1.push({name: "Sin Demora", value: parseInt(noDemora)});

        this.setState({
            grafica1: data1
        });
        Meteor.call("last.update");
        var data3 = [];

        for (var i = 0; i < grafica3.length; i += 2) {
            var j = parseInt(i + 1)
            data3.push({name: grafica3[i], cantidad: parseInt(grafica3[j])});
        }
        this.setState({
            grafica3: data3
        });
    }

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

                            </div>
                        </nav>
                        <div className="content">
                            <Switch>
                                <Route exact path="/"
                                       render={() => <Content grafica1={this.state.grafica1}
                                                              grafica2={this.state.grafica2}
                                                              grafica3={this.state.grafica3}
                                                              lastTime={this.props.lastTime}
                                                              projectData={this.state.projectData}/>}/>
                                <Route exact path="/projects"
                                       render={(props) => <Projects {...props} projects={this.props.projects}/>}/>
                                <Route exact path="/inventory"
                                       render={(props) => <Inventory {...props} inventory={this.props.inventory}/>}/>
                                <Route exact path="/budget"
                                       render={(props) => <Budget {...props} budget={this.props.budget}/>}/>
                                <Route exact path="/parameters"
                                       render={(props) => <Parameters {...props} parameters={this.props.parameters}
                                                                      inventory={this.props.inventory} projects={this.props.projects}/>}/>
                                <Route exact path="/results"
                                       render={() => <Results handleChange={this.handleChange.bind(this)}/>}/>
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