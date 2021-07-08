import React, { Component } from 'react';
import Login from './login.svg';
import { BrowserRouter as Router,Link } from 'react-router-dom';
class DriverLogin extends Component {
    state = {
        driverID: null,
        password: null
    }
    handledriverIDChange = (e) => {
        this.setState({driverID: e.target.value});
    }
    handlePasswordChange = (e) => {
        this.setState({password: e.target.value});
    }
    render() { 
        return (
            <div>
                <div class="navbar navbar-dark bg-secondary">
                    <h3 class="navbar-brand mb-0 h1">Driver Login</h3>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <a href="/accountType" ><button
                            class="btn btn-dark me-md-2" 
                            type="button"
                            >Back</button></a>
                    </div>
                </div>
                <div class="row justify-content-around" style={{paddingTop : 6 + '%'}}>
                    <div class="img">
                        <img src={Login} />
                    </div>
                    <div>
                        <form style={{padding : 2 + '%'}}>
                            
                            <div class="row mb-3">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1">@</span>
                                    <input type="text" class="form-control" placeholder="driverID" aria-label="driverID" aria-describedby="basic-addon1" value={this.state.driverID} onChange={this.handledriverIDChange}/>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon2">#</span>
                                    <input type="password" class="form-control" placeholder="password" aria-label="password" aria-describedby="basic-addon2" value={this.state.password} onChange={this.handlePasswordChange}/>
                                </div>
                            </div>
                            <div class="row justify-content-md-center">
                                <Link to={{
                                    pathname: "/driverDisplay",
                                    id : this.state.driverID,
                                    password : this.state.password
                                }} class="btn btn-primary">Sign in</Link>
                                <Link to="/driverSignup" class="btn btn-danger">Sign Up</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default DriverLogin;