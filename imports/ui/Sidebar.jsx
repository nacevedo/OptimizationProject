import React, {Component} from "react";

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="sidebar" data-image="../assets/img/sidebar-5.jpg">
                <div className="sidebar-wrapper">
                    <div className="logo">
                        <a href="http://www.creative-tim.com" className="simple-text">

                        </a>
                    </div>
                    <ul className="nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="dashboard.html">
                                <i className="nc-icon nc-chart-pie-35"></i>
                                <p>Dashboard</p>
                            </a>
                        </li>

                        <li>
                            <a className="nav-link" href="../../../../Downloads/light-bootstrap-dashboard-html-v2.0.1/examples/maps.html">
                                <i className="nc-icon nc-pin-3"></i>
                                <p>Maps</p>
                            </a>
                        </li>
                        <li>
                            <a className="nav-link" href="../../../../Downloads/light-bootstrap-dashboard-html-v2.0.1/examples/notifications.html">
                                <i className="nc-icon nc-bell-55"></i>
                                <p>Notifications</p>
                            </a>
                        </li>
                        <li className="nav-item active active-pro">
                            <a className="nav-link active" href="../../../../Downloads/light-bootstrap-dashboard-html-v2.0.1/examples/upgrade.html">
                                <i className="nc-icon nc-alien-33"></i>
                                <p>Holi</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        );
    }
}

export default Sidebar;