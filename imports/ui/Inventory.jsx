import React, {Component} from "react";
import {Meteor} from "meteor/meteor";

class Inventory extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props);
    }

    renderInventory() {
        return this.props.inventory.map((item) => {
            return (
                <Item key={item._id} item={item}/>
            )
        });
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card strpied-tabled-with-hover">
                            <div className="card-header ">
                                <h4 className="card-title">Inventario de Herramientas</h4>
                                <p className="card-category">Lista de referencias en inventario y sus cantidades</p>
                            </div>
                            <div className="card-body table-full-width table-responsive">
                                <table className="table table-hover table-striped">
                                    <thead>
                                    <tr>
                                        <th>Referencia</th>
                                        <th>Cantidad</th>
                                        <th>Agregar</th>
                                        <th>Eliminar</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.renderInventory()}
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

export default Inventory;

class Item extends Component {
    increaseAmount() {
        Meteor.call("amount.update", this.props.item.ref, 1);
    }

    decreaseAmount() {
        Meteor.call("amount.update", this.props.item.ref, -1);
    }

    render() {
        return (
            <tr>
                <td>{this.props.item.ref}</td>
                <td>{this.props.item.amount}</td>
                <td>
                    <a className="inventory-icon" onClick={this.increaseAmount.bind(this)}>
                        <i className="fa fa-plus inventory-icon"/>
                    </a>
                </td>
                <td>
                    <a className="inventory-icon" onClick={this.decreaseAmount.bind(this)}>
                        <i className="fa fa-minus inventory-icon"/>
                    </a>
                </td>
            </tr>
        );
    }
}