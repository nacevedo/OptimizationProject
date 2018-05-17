import React, {Component} from "react";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <nav>
                        <ul className="footer-menu">

                        </ul>
                        <p className="copyright text-center">
                            ©2018 Bibiana Gamba 👩🏽‍🎨 Nicolás Acevedo 👨🏼‍🔬 Carlos Peñaloza 👨🏻‍🚀 Daniel López 👨🏻‍🌾
                        </p>
                    </nav>
                </div>
            </footer>
        );
    }
}

export default Footer;