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
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Edit Profile</h4>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="row">
                                        <div className="col-md-5 pr-1">
                                            <div className="form-group">
                                                <label>Company (disabled)</label>
                                                <input className="form-control" disabled="" placeholder="Company"
                                                       value="Creative Code Inc." type="text"/>
                                            </div>
                                        </div>
                                        <div className="col-md-3 px-1">
                                            <div className="form-group">
                                                <label>Username</label>
                                                <input className="form-control" placeholder="Username" value="michael23"
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
                                                <input className="form-control" placeholder="Company" value="Mike"
                                                       type="text"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6 pl-1">
                                            <div className="form-group">
                                                <label>Last Name</label>
                                                <input className="form-control" placeholder="Last Name" value="Andrew"
                                                       type="text"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Address</label>
                                                <input className="form-control" placeholder="Home Address"
                                                       value="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                                                       type="text"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4 pr-1">
                                            <div className="form-group">
                                                <label>City</label>
                                                <input className="form-control" placeholder="City" value="Mike"
                                                       type="text"/>
                                            </div>
                                        </div>
                                        <div className="col-md-4 px-1">
                                            <div className="form-group">
                                                <label>Country</label>
                                                <input className="form-control" placeholder="Country" value="Andrew"
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
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>About Me</label>
                                                <textarea rows="4" cols="80" className="form-control"
                                                          placeholder="Here can be your description" value="Mike">Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.</textarea>
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
                    <div className="col-md-4">
                        <div className="card card-user">
                            <div className="card-image">
                                <img
                                    src="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&amp;fm=jpg&amp;h=300&amp;q=75&amp;w=400"
                                    alt="..."/>
                            </div>
                            <div className="card-body">
                                <div className="author">
                                    <a href="#">
                                        <img className="avatar border-gray" src="../assets/img/faces/face-3.jpg"
                                             alt="..."/>
                                        <h5 className="title">Mike Andrew</h5>
                                    </a>
                                    <p className="description">
                                        michael24
                                    </p>
                                </div>
                                <p className="description text-center">
                                    "Lamborghini Mercy
                                    <br/> Your chick she so thirsty
                                    <br/> I'm in that two seat Lambo"
                                </p>
                            </div>
                            <hr/>
                            <div className="button-container mr-auto ml-auto">
                                <button href="#" className="btn btn-simple btn-link btn-icon">
                                    <i className="fa fa-facebook-square"></i>
                                </button>
                                <button href="#" className="btn btn-simple btn-link btn-icon">
                                    <i className="fa fa-twitter"></i>
                                </button>
                                <button href="#" className="btn btn-simple btn-link btn-icon">
                                    <i className="fa fa-google-plus-square"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Input;