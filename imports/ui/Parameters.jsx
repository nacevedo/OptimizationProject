import React, {Component} from "react";

class Parameters extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    renderParameters() {
        let params = "";
        this.props.parameters.forEach((param)=>{
            const p = param.value;
            if (p.includes(":")){
                params = params + p + "\n\n";
            }
            else{
                params += `p: ${p}\n\n`;
            }
        });
        params = params + this.processInventory();
        params += this.processProjects();
        return (
            <textarea className="parameters gray-text" readOnly id="parameters" ref="params" value={params}>
                        </textarea>
        )
    }

    processProjects() {
        const installations = ["1 - Aire Acondicionado Y Ventilación ",
            "1 - Aire Acondicionado: Minisplit ",
            "1 - Aire Acondicionado: Sistema 1 a 1 ",
            "1 - Aire Acondicionado: Fan Coil Desnudo ",
            "1 - Aire Acondicionado: Sistema Paquete ",
            "1 - Aire Acondicionado: Sistema De Refrigeración Variable ",
            "1 - Sistema de Precisión ",
            "1 - Chillers ",
            "1 - Ventilación Mecánica ",
            "1 - Seguridad Electrónica CCTV ",
            "1 - Seguridad Electrónica Control de Acceso ",
            "1 - Detección y Extinción de Incendios",
            "2 - Aire Acondicionado Y Ventilación ",
            "2 - Aire Acondicionado: Minisplit ",
            "2 - Aire Acondicionado: Sistema 1 a 1 ",
            "2 - Aire Acondicionado: Fan Coil Desnudo ",
            "2 - Aire Acondicionado: Sistema Paquete ",
            "2 - Aire Acondicionado: Sistema De Refrigeración Variable ",
            "2 - Sistema de Precisión ",
            "2 - Chillers ",
            "2 - Ventilación Mecánica ",
            "2 - Seguridad Electrónica CCTV ",
            "2 - Seguridad Electrónica Control de Acceso ",
            "2 - Detección y Extinción de Incendios",
            "3 - Aire Acondicionado Y Ventilación ",
            "3 - Aire Acondicionado: Minisplit ",
            "3 - Aire Acondicionado: Sistema 1 a 1 ",
            "3 - Aire Acondicionado: Fan Coil Desnudo ",
            "3 - Aire Acondicionado: Sistema Paquete ",
            "3 - Aire Acondicionado: Sistema De Refrigeración Variable ",
            "3 - Sistema de Precisión ",
            "3 - Chillers ",
            "3 - Ventilación Mecánica ",
            "3 - Seguridad Electrónica CCTV ",
            "3 - Seguridad Electrónica Control de Acceso ",
            "3 - Detección y Extinción de Incendios"];
        let projects = "t: [ ";
        this.props.projects.forEach((proj)=>{
            console.log(proj.installations);
            installations.forEach((inst)=>{
                console.log(inst);
                if (proj.installations.includes(inst)){
                    projects += "(" + inst + " " + proj.name +")1 ";
                }
                else {
                    projects += "(" + inst + " " + proj.name +")0 ";
                }
            })
        });
        projects += " ]";
        let params = projects  + "\n\n";
        return params;
    }

    processInventory() {
        let inventory = "I0: [ ";
        let costs = "v:[ ";
        this.props.inventory.forEach((item)=>{
            inventory = inventory + " (" + item.ref + ")" + item.amount;
            costs = costs + " (" + item.ref + ")" + item.cost;
        });
        inventory += " ]";
        costs += " ]";
        let params = inventory  + "\n\n" + costs + "\n\n";
        return params;
    }

    copy() {
        /* Get the text field */
        var copyText = document.getElementById("parameters");

        /* Select the text field */
        copyText.select();

        /* Copy the text inside the text field */
        document.execCommand("copy");

        /* Alert */
        alert("Los parámetros fueron copiados al portapapeles");
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="card">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card-header">
                                <h4 className="card-title">Parámetros</h4>
                                <p className="card-category">Utilice estos parámetros para correr el modelo en Xpress</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <button className="btn btn-info btn-fill pull-right btn-copy" onClick={this.copy.bind(this)}>Copiar texto <i className="fa fa-clipboard"></i></button>
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