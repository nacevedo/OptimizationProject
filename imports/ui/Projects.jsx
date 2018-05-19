import React, {Component} from "react";

import  MultiSelectReact  from 'multi-select-react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            multiSelect: [{label:"Hola", id:"hola"},{label:"chao", id:"chao"}]
        };
    }

    optionClicked(optionsList) {
        this.setState({ multiSelect: optionsList });
    }
    selectedBadgeClicked(optionsList) {
        this.setState({ multiSelect: optionsList });
    }

    render() {
        const selectedOptionsStyles = {
            color: "#3c763d",
            backgroundColor: "#dff0d8"
        };
        const optionsListStyles = {
            backgroundColor: "#dff0d8",
            color: "#3c763d"
        };
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Proyectos</h4>
                                <p className="card-category">Información de los proyectos del siguiente mes</p>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="row">
                                        <div className="col-md-5 pr-1">
                                            <div className="form-group">
                                                <label>Nombre Proyecto</label>
                                                <input className="form-control"
                                                       type="text"/>
                                            </div>
                                        </div>
                                        <div className="col-md-3 px-1">
                                            <div className="form-group">
                                                <label>Cliente</label>
                                                <input className="form-control"
                                                       type="text"/>
                                            </div>
                                        </div>
                                        <div className="col-md-4 pl-1">
                                            <div className="form-group">
                                                <label>Correo cliente</label>
                                                <input className="form-control" type="email"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 pr-1">
                                            <div className="form-group">
                                                <label>Número de contacto</label>
                                                <input className="form-control"
                                                       type="number"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6 pl-1">
                                            <div className="form-group">
                                                <label>Dirección</label>
                                                <input className="form-control"
                                                       type="text"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <MultiSelectReact
                                                    options={this.state.multiSelect}
                                                    optionClicked={this.optionClicked.bind(this)}
                                                    selectedBadgeClicked={this.selectedBadgeClicked.bind(this)}
                                                    selectedOptionsStyles={selectedOptionsStyles}
                                                    optionsListStyles={optionsListStyles} />
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-info btn-fill pull-right">Agregar Proyecto
                                    </button>
                                    <div className="clearfix"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Input;