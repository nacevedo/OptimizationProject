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
            params = params + p + "\n\n";
        });
        params = params + this.processInventory();
        return (
            <textarea className="parameters" readOnly id="parameters" ref="params" value={params}>
                        </textarea>
        )
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
        console.log(inventory);
        console.log(costs);
        let params = inventory  + "\n\n" + costs;
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