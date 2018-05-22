import React, {Component} from "react";
import Parser from 'html-react-parser';

import SimpleBarChart from "./SimpleBarChart";
import PieChart from "./PieChartGraph";

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    renderTable() {
        if (!this.props.projectData) return;
        return (
            <div className="card-body table-full-width table-responsive">
                <table className="table table-hover table-striped">
                    <thead>
                    <tr>
                        <th>Proyectos</th>
                        <th>Día inicio</th>
                        <th>Día fin</th>
                        <th>Demora</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Parser(this.renderProjectData())}
                    </tbody>
                </table>
            </div>
        );
    }

    renderProjectData() {
        let ret = "";
        for (i=0; i<this.props.projectData.length/4; i++ ){
            let proy = "", ini="", fin="", dem="";
            for (j=i*4; j<i*4+4; j++){
                if (proy==="") proy=this.props.projectData[j];
                else if (ini==="") ini=this.props.projectData[j];
                else if (fin==="") fin=this.props.projectData[j];
                else dem = this.props.projectData[j];
            }
            ret+=`<tr><td>${proy}</td><td>${ini}</td><td>${fin}</td><td>${dem}</td></tr>`;
        }
        return ret;
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card ">
                            <div className="card-header ">
                                <h4 className="card-title">Herramientas</h4>
                                <p className="card-category">La siguiente gráfica muestra la cantidad de herramientas que se deben comprar de cada tipo para lograr la menor demora en proyectos.</p>
                            </div>
                            <div className="card-body ">

                            <SimpleBarChart grafica2 = {this.props.grafica2} cual = {2}/>
                                
                            </div>
                            <div className="card-footer ">
                                <div className="stats">
                                    <i className="fa fa-history"></i> Updated on {this.props.lastTime[0]?this.props.lastTime[0].value:""}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card ">
                            <div className="card-header ">
                                <h4 className="card-title">Proyectos con demoras</h4>
                                <p className="card-category">La siguiente gráfica muestra el porcentaje de proyectos con demoras y sin demoras.</p>
                                <p className="card-category">Proyectos con demora: {this.props.grafica1[0]?this.props.grafica1[0].value:""}</p>
                                <p className="card-category">Proyectos sin demora: {this.props.grafica1[1]?this.props.grafica1[0].value:""}</p>
                            </div>
                            <div className="card-body ">
                                <div id="chartActivity" className="ct-chart">
                                    <div className="legend">
                                        <i className="fa fa-circle demor"></i> Demorados
                                        <i className="fa fa-circle no-demor"></i> Sin demoras
                                    </div>
                                    <hr/>
                                    <div className="stats">
                                        <PieChart grafica1 = {this.props.grafica1}/>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer ">
                                <div className="stats">
                                    <i className="fa fa-history"></i> Updated on {this.props.lastTime[0]?this.props.lastTime[0].value:""}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card  card-tasks">
                            <div className="card-header ">
                                <h4 className="card-title">Inventario total por día</h4>
                                <p className="card-category">La siguiente gráfica muestra el inventario total de herramientas por día</p>
                            </div>
                            <div className="card-body ">
                                <div className="table-full-width">
                                    <SimpleBarChart grafica2 = {this.props.grafica3} cual = {3}/>
                                </div>
                            </div>
                            <div className="card-footer ">
                                <div className="stats">
                                    <i className="fa fa-history"></i> Updated on {this.props.lastTime[0]?this.props.lastTime[0].value:""}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card ">
                            <div className="card-header ">
                                <h4 className="card-title">Proyectos</h4>
                                <p className="card-category">La siguiente tabla incluye la información de los proyectos.</p>
                            </div>
                            {this.renderTable()}
                            <div className="card-footer ">
                                <div className="stats">
                                    <i className="fa fa-history"></i> Updated on {this.props.lastTime[0]?this.props.lastTime[0].value:""}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;