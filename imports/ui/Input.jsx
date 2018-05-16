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
                                <h4 className="card-title">Edit Profile</h4>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="row">
                                        <div className="col-md-5 pr-1">
                                            <div className="form-group">
                                                <label>Company</label>
                                                <input className="form-control" placeholder="Company"
                                                       type="text"/>
                                            </div>
                                        </div>
                                        <div className="col-md-3 px-1">
                                            <div className="form-group">
                                                <label>Username</label>
                                                <input className="form-control" placeholder="Username"
                                                       type="text"/>
                                            </div>
                                        </div>
                                        <div className="col-md-4 pl-1">
                                            <div className="form-group">
                                                <label for="exampleInputEmail1">Email address</label>
                                                <input className="form-control" placeholder="Email" type="email"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 pr-1">
                                            <div className="form-group">
                                                <label>First Name</label>
                                                <input className="form-control" placeholder="Company"
                                                       type="text"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6 pl-1">
                                            <div className="form-group">
                                                <label>Last Name</label>
                                                <input className="form-control" placeholder="Last Name"
                                                       type="text"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Address</label>
                                                <input className="form-control" placeholder="Home Address"
                                                       type="text"/>
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
                                    <button type="submit" className="btn btn-info btn-fill pull-right">Update Profile
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