import React, {Component} from "react";

class Parameters extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    renderParameters() {
        console.log(this.props.parameters);
        return (
            <textarea className="parameters"  id="parameters" ref="params">
                dfsdsaf
                        </textarea>
        )
    }

    copy() {
        console.log(this.refs);
        /* Get the text field */
        var copyText = document.getElementById("parameters");
        let params = this.refs.params;

        /* Select the text field */
        copyText.select();

        /* Copy the text inside the text field */
        document.execCommand("copy");

        /* Alert the copied text */
        alert("Los parámetros fueron copiados al portapapeles");
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="card">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card-header">
                                <h4 className="card-title">Parameters</h4>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <button className="btn btn-primary btn-copy pull-right" onClick={this.copy.bind(this)}>Copy text</button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            {this.renderParameters()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Parameters;