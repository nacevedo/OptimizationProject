import React, {Component} from "react";

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

        var divElement = document.getElementById('viz1526504869880');
        var vizElement = divElement.getElementsByTagName('object')[0];
        vizElement.style.width = '100%';
        var scriptElement = document.createElement('script');
        scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
        vizElement.parentNode.insertBefore(scriptElement, vizElement);

    }

     handleChange(e)
    {
        var graficas = this.refs.input.value.split("#"); 
        for (i = 0; i < graficas.length ; i++)
        {
        var separados = graficas[i].split(","); 
        console.log(separados);
        if (i == 0){
            this.setState({
                grafica1:separados
            }); 
         }
         else if (i == 1){
            this.setState({
                grafica2:separados
            }); 
         }
         else {
            this.setState({
                grafica3:separados
            }); 
         }
        }
    }


    render() {
        return (


            <div className="container-fluid">
                <input type="text" id="userInput" ref = "input" onChange={ this.handleChange.bind(this) } />
                <div className="row">
                    <div className="col-md-12">
                        <div className="card ">
                            <div className="card-header ">
                                <h4 className="card-title">Herramientas</h4>
                                <p className="card-category">La siguiente gráfica muestra la cantidad de herramientas que se deben comprar de cada tipo para lograr la menor demora en proyectos.</p>
                            </div>
                            <div className="card-body ">
                                <div className='tableauPlaceholder' id='viz1526504869880'>
                                    <object className='tableauViz'>
                                        <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F'/>
                                        <param name='embed_code_version' value='3'/>
                                        <param name='site_root' value=''/>
                                        <param name='name' value='Opti&#47;Sheet1'/>
                                        <param name='tabs' value='no'/>
                                        <param name='toolbar' value='yes'/>
                                        <param name='static_image'
                                               value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Op&#47;Opti&#47;Sheet1&#47;1.png'/>
                                        <param name='animate_transition' value='yes'/>
                                        <param name='display_static_image' value='yes'/>
                                        <param name='display_spinner' value='yes'/>
                                        <param name='display_overlay' value='yes'/>
                                        <param name='display_count' value='yes'/>
                                        <param name='filter' value='publish=yes'/>
                                    </object>
                                </div>
                            </div>
                            <div className="card-footer ">
                                <div className="stats">
                                    <i className="fa fa-history"></i> Updated 3 minutes ago
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card ">
                            <div className="card-header ">
                                <h4 className="card-title">2017 Sales</h4>
                                <p className="card-category">All products including Taxes</p>
                            </div>
                            <div className="card-body ">
                                <div id="chartActivity" className="ct-chart">

                                </div>
                            </div>
                            <div className="card-footer ">
                                <div className="legend">
                                    <i className="fa fa-circle text-info"></i> Tesla Model S
                                    <i className="fa fa-circle text-danger"></i> BMW 5 Series
                                </div>
                                <hr/>
                                <div className="stats">
                                    <i className="fa fa-check"></i> Data information certified
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card  card-tasks">
                            <div className="card-header ">
                                <h4 className="card-title">Tasks</h4>
                                <p className="card-category">Backend development</p>
                            </div>
                            <div className="card-body ">
                                <div className="table-full-width">
                                    <table className="table">
                                        <tbody>
                                        <tr>
                                            <td>
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input className="form-check-input" value=""
                                                               type="checkbox"/>
                                                        <span className="form-check-sign"></span>
                                                    </label>
                                                </div>
                                            </td>
                                            <td>Sign contract for "What are conference organizers afraid of?"</td>
                                            <td className="td-actions text-right">
                                                <button type="button" rel="tooltip" title=""
                                                        className="btn btn-info btn-simple btn-link"
                                                        data-original-title="Edit Task">
                                                    <i className="fa fa-edit"></i>
                                                </button>
                                                <button type="button" rel="tooltip" title=""
                                                        className="btn btn-danger btn-simple btn-link"
                                                        data-original-title="Remove">
                                                    <i className="fa fa-times"></i>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input className="form-check-input" value="" checked=""
                                                               type="checkbox"/>
                                                        <span className="form-check-sign"></span>
                                                    </label>
                                                </div>
                                            </td>
                                            <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>
                                            <td className="td-actions text-right">
                                                <button type="button" rel="tooltip" title=""
                                                        className="btn btn-info btn-simple btn-link"
                                                        data-original-title="Edit Task">
                                                    <i className="fa fa-edit"></i>
                                                </button>
                                                <button type="button" rel="tooltip" title=""
                                                        className="btn btn-danger btn-simple btn-link"
                                                        data-original-title="Remove">
                                                    <i className="fa fa-times"></i>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input className="form-check-input" value="" checked=""
                                                               type="checkbox"/>
                                                        <span className="form-check-sign"></span>
                                                    </label>
                                                </div>
                                            </td>
                                            <td>Flooded: One year later, assessing what was lost and what was found
                                                when a ravaging rain swept through metro Detroit
                                            </td>
                                            <td className="td-actions text-right">
                                                <button type="button" rel="tooltip" title=""
                                                        className="btn btn-info btn-simple btn-link"
                                                        data-original-title="Edit Task">
                                                    <i className="fa fa-edit"></i>
                                                </button>
                                                <button type="button" rel="tooltip" title=""
                                                        className="btn btn-danger btn-simple btn-link"
                                                        data-original-title="Remove">
                                                    <i className="fa fa-times"></i>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input className="form-check-input" checked=""
                                                               type="checkbox"/>
                                                        <span className="form-check-sign"></span>
                                                    </label>
                                                </div>
                                            </td>
                                            <td>Create 4 Invisible User Experiences you Never Knew About</td>
                                            <td className="td-actions text-right">
                                                <button type="button" rel="tooltip" title=""
                                                        className="btn btn-info btn-simple btn-link"
                                                        data-original-title="Edit Task">
                                                    <i className="fa fa-edit"></i>
                                                </button>
                                                <button type="button" rel="tooltip" title=""
                                                        className="btn btn-danger btn-simple btn-link"
                                                        data-original-title="Remove">
                                                    <i className="fa fa-times"></i>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input className="form-check-input" value=""
                                                               type="checkbox"/>
                                                        <span className="form-check-sign"></span>
                                                    </label>
                                                </div>
                                            </td>
                                            <td>Read "Following makes Medium better"</td>
                                            <td className="td-actions text-right">
                                                <button type="button" rel="tooltip" title=""
                                                        className="btn btn-info btn-simple btn-link"
                                                        data-original-title="Edit Task">
                                                    <i className="fa fa-edit"></i>
                                                </button>
                                                <button type="button" rel="tooltip" title=""
                                                        className="btn btn-danger btn-simple btn-link"
                                                        data-original-title="Remove">
                                                    <i className="fa fa-times"></i>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input className="form-check-input" value="" disabled=""
                                                               type="checkbox"/>
                                                        <span className="form-check-sign"></span>
                                                    </label>
                                                </div>
                                            </td>
                                            <td>Unfollow 5 enemies from twitter</td>
                                            <td className="td-actions text-right">
                                                <button type="button" rel="tooltip" title=""
                                                        className="btn btn-info btn-simple btn-link"
                                                        data-original-title="Edit Task">
                                                    <i className="fa fa-edit"></i>
                                                </button>
                                                <button type="button" rel="tooltip" title=""
                                                        className="btn btn-danger btn-simple btn-link"
                                                        data-original-title="Remove">
                                                    <i className="fa fa-times"></i>
                                                </button>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
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