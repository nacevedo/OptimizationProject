import React, {Component} from "react";
import Content from "./Content";

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="wrapper">
                <div className="sidebar" data-image="../assets/img/sidebar-5.jpg">
                    <div className="sidebar-wrapper">
                        <div className="logo">
                            <a href="#" className="simple-text">
                                👻
                            </a>
                        </div>
                        <ul className="nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">
                                    <i className="nc-icon nc-chart-pie-35"></i>
                                    <p>Dashboard</p>
                                </a>
                            </li>
                            <li>
                                <a className="nav-link" href="#">
                                    <i className="nc-icon nc-circle-09"></i>
                                    <p>User Profile</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="main-panel">
                    <nav className="navbar navbar-expand-lg " color-on-scroll="500">
                        <div className=" container-fluid  ">
                            <a className="navbar-brand" href="#pablo"> Dashboard </a>
                            <button href="" className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-bar burger-lines"></span>
                                <span className="navbar-toggler-bar burger-lines"></span>
                                <span className="navbar-toggler-bar burger-lines"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-end" id="navigation">
                                <ul className="nav navbar-nav mr-auto">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link" data-toggle="dropdown">
                                            <i className="fa fa-dashboard"></i>
                                            <span className="d-lg-none">Dashboard</span>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#pablo">
                                            <span className="no-icon">Account</span>
                                        </a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                    <Content/>
                </div>
            </div>
        );
    }
}

export default Nav;