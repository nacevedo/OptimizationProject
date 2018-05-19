import React, {Component} from "react";

import  MultiSelectReact  from 'multi-select-react';
import {Meteor} from "meteor/meteor";

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            multiSelect: [{label:"1 - Aire Acondicionado Y Ventilación", id:"1"},
                {label:"1 - Aire Acondicionado: Minisplit", id:"2"},
                {label:"1 - Aire Acondicionado: Sistema 1 a 1", id:"3"},
                {label:"1 - Aire Acondicionado: Fan Coil Desnudo", id:"4"},
                {label:"1 - Aire Acondicionado: Sistema Paquete", id:"5"},
                {label:"1 - Aire Acondicionado: Sistema De Refrigeración Variable", id:"6"},
                {label:"1 - Sistema de Precisión", id:"7"},
                {label:"1 - Chillers", id:"8"},
                {label:"1 - Ventilación Mecánica", id:"9"},
                {label:"1 - Seguridad Electrónica CCTV", id:"10"},
                {label:"1 - Seguridad Electrónica Control de Acceso", id:"11"},
                {label:"1 - Detección y Extinción de Incendios", id:"12"},
                {label:"2 - Aire Acondicionado Y Ventilación", id:"13"},
                {label:"2 - Aire Acondicionado: Minisplit", id:"14"},
                {label:"2 - Aire Acondicionado: Sistema 1 a 1", id:"15"},
                {label:"2 - Aire Acondicionado: Fan Coil Desnudo", id:"16"},
                {label:"2 - Aire Acondicionado: Sistema Paquete", id:"17"},
                {label:"2 - Aire Acondicionado: Sistema De Refrigeración Variable", id:"18"},
                {label:"2 - Sistema de Precisión", id:"19"},
                {label:"2 - Chillers", id:"20"},
                {label:"2 - Ventilación Mecánica", id:"21"},
                {label:"2 - Seguridad Electrónica CCTV", id:"22"},
                {label:"2 - Seguridad Electrónica Control de Acceso", id:"23"},
                {label:"2 - Detección y Extinción de Incendios", id:"24"},
                {label:"3 - Aire Acondicionado Y Ventilación", id:"25"},
                {label:"3 - Aire Acondicionado: Minisplit", id:"26"},
                {label:"3 - Aire Acondicionado: Sistema 1 a 1", id:"27"},
                {label:"3 - Aire Acondicionado: Fan Coil Desnudo", id:"28"},
                {label:"3 - Aire Acondicionado: Sistema Paquete", id:"29"},
                {label:"3 - Aire Acondicionado: Sistema De Refrigeración Variable", id:"30"},
                {label:"3 - Sistema de Precisión", id:"31"},
                {label:"3 - Chillers", id:"32"},
                {label:"3 - Ventilación Mecánica", id:"33"},
                {label:"3 - Seguridad Electrónica CCTV", id:"34"},
                {label:"3 - Seguridad Electrónica Control de Acceso", id:"35"},
                {label:"3 - Detección y Extinción de Incendios", id:"36"}]
        };
    }

    optionClicked(optionsList) {
        this.setState({ multiSelect: optionsList });
    }
    selectedBadgeClicked(optionsList) {
        this.setState({ multiSelect: optionsList });
    }

    renderProjects() {
        return this.props.projects.map((project) => {
            return (
                <Project key={project._id} project={project}/>
            )
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const name = this.refs.name.value;

        Meteor.call("projects.insert", name);
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
                                                <input ref="name" className="form-control"
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
                                    <button onClick={this.handleSubmit.bind(this)} className="btn btn-info btn-fill pull-right">Agregar Proyecto
                                    </button>
                                    <div className="clearfix"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="card strpied-tabled-with-hover">
                            <div className="card-header ">
                                <h4 className="card-title">Proyectos próximo mes</h4>
                            </div>
                            <div className="card-body table-full-width table-responsive">
                                <table className="table table-hover table-striped">
                                    <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Nombre Proyecto</th>
                                        <th>Eliminar</th>

                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.renderProjects()}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Input;

class Project extends Component {

    delete() {
        Meteor.call("projects.delete", this.props.project._id);
    }

    render() {
        return (
            <tr>
                <td>{this.props.project._id}</td>
                <td>{this.props.project.name}</td>
                <td>
                    <a className="inventory-icon" onClick={this.delete.bind(this)}>
                        <i className="fa fa-trash inventory-icon"/>
                    </a>
                </td>
            </tr>
        );
    }
}