import React, {Component} from "react";
import SimpleBarChart from "./SimpleBarChart";
import PieChart from "./PieChartGraph";

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {



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
                            </div>
                            <div className="card-body ">
                                <div id="chartActivity" className="ct-chart">

                                </div>
                            </div>
                            <div className="card-footer ">
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
                                <hr/>
                                <div className="stats">
                                    <i className="now-ui-icons loader_refresh spin"></i> Updated 3 minutes ago
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