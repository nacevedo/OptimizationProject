import React, {Component} from "react";

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
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
                                                <select class="mdb-select colorful-select dropdown-primary" multiple searchable="Search here..">
                                                    <option value="" disabled selected>Choose your country</option>
                                                    <option value="1">USA</option>
                                                    <option value="2">Germany</option>
                                                    <option value="3">France</option>
                                                    <option value="4">Poland</option>
                                                    <option value="5">Japan</option>
                                                </select>
                                                <label>Label example</label>
                                                <button class="btn-save btn btn-primary btn-sm">Save</button>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4 pr-1">
                                            <div className="form-group">
                                                <label>City</label>
                                                <input className="form-control" placeholder="City"
                                                       type="text"/>
                                            </div>
                                        </div>
                                        <div className="col-md-4 px-1">
                                            <div className="form-group">
                                                <label>Country</label>
                                                <input className="form-control" placeholder="Country"
                                                       type="text"/>
                                            </div>
                                        </div>
                                        <div className="col-md-4 pl-1">
                                            <div className="form-group">
                                                <label>Postal Code</label>
                                                <input className="form-control" placeholder="ZIP Code" type="number"/>
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