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

    handleSubmit(event) {
        event.preventDefault();

        const name = this.refs.name.value;
        const price = this.refs.price.value;
        const amount = this.refs.amount.value;

        Meteor.call("inventory.insert", name, price, amount);
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Referencia</label>
                            <input className="form-control" ref="name" required="" placeholder="Nombre" type="text"/>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-group">
                            <label>Precio (COP$)</label>
                            <input className="form-control" ref="price" required="" placeholder="$" type="number"/>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-group">
                            <label for="exampleInputEmail1">Cantidad</label>
                            <input className="form-control" ref="amount" required="" placeholder="0" type="number"/>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <button onClick={this.handleSubmit.bind(this)} type="submit" className="btn btn-info btn-fill pull-right button-inventory">Agregar
                        </button>
                    </div>
                </div>
                
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
                                        <th>Precio</th>
                                        <th>Aumentar</th>
                                        <th>Reducir</th>
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

    delete() {
        Meteor.call("inventory.delete", this.props.item.ref);
    }

    render() {
        return (
            <tr>
                <td>{this.props.item.ref}</td>
                <td>{this.props.item.amount}</td>
                <td>{this.props.item.cost}</td>
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
                <td>
                    <a className="inventory-icon" onClick={this.delete.bind(this)}>
                        <i className="fa fa-trash inventory-icon"/>
                    </a>
                </td>
            </tr>
        );
    }
}