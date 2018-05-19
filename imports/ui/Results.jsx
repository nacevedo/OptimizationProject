import React, {Component} from "react";

class Results extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="container-fluid">
                <div className="card">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card-header">
                                <h4 className="card-title">Resultados</h4>
                                <p className="card-category">Ingrese los resultados del modelo de Xpress</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <textarea className="parameters" ref="results" onChange =  {()=> {this.props.handleChange(this.refs.results.value)}}>
                        </textarea>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Results;