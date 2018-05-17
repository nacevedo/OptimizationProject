import React, {Component} from "react";
import {Meteor} from "meteor/meteor";

class Budget extends Component {
    constructor(props) {
        super(props);
    }

    handleSubmit(event) {
        event.preventDefault();

        const budget = this.refs.budget.value;

        Meteor.call("budget.update", budget);
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Presupuesto</h4>
                                <p className="card-category">Ingrese el presupuesto para el próximo mes</p>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Valor presupuesto</label>
                                            <input className="form-control" ref="budget" required="" placeholder="$" type="number"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <button onClick={this.handleSubmit.bind(this)} type="submit" className="btn btn-info btn-fill pull-right button-inventory">Actualizar
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Budget;