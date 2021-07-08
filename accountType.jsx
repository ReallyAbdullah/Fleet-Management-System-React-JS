import React, { Component } from 'react';
import Admin from './Admin.svg';
import Manager from './Manager.svg';
import Customer from './Customer.svg';
import Driver from './Driver.svg';
import { BrowserRouter as Router,Link } from 'react-router-dom';
class AccountType extends Component {
    render() { 
        return (
            <div>
                <div class="navbar navbar-dark bg-secondary">
                    <h3 class="navbar-brand mb-0 h1">Select Acount Type</h3>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <a href="/" ><button
                            class="btn btn-dark me-md-2" 
                            type="button"
                            >Back</button></a>
                    </div>
                </div>
                <div class="row justify-content-around" style={{padding: 3 + '%',background:'#8C89FF'}}>
                    <div class="card text-dark mb-3" style={{width: 15 + 'rem',background : '#DEDDFF'}}>
                    <img src={Admin} class="card-img-mid" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Admin</h5>
                        <p class="card-text">Manage Accounts</p>
                        <Link to={{
                            pathname: '/adminDash',
                            type : 'Admin'
                        }} class="btn btn-dark">Select</Link>
                    </div>
                    </div>
                    <div class="card text-dark mb-3" style={{width: 15 + 'rem',background : '#DEDDFF'}}>
                    <img src={Manager} class="card-img-mid" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Manager</h5>
                        <p class="card-text">Manage Vehicles, Drivers and Bookings</p>
                        <Link to={{
                            pathname: '/managerLogin',
                            type : 'Manager'
                        }} class="btn btn-dark">Select</Link>
                    </div>
                    </div>
                    <div class="card text-dark mb-3" style={{width: 15 + 'rem',background : '#DEDDFF'}}>
                    <img src={Customer} class="card-img-mid" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Customer</h5>
                        <p class="card-text">Book Vehicles</p>
                        <a href="/CustomerLogin" class="btn btn-dark">Select</a>
                    </div>
                    </div>
                    <div class="card text-dark mb-3" style={{width: 15 + 'rem',background : '#DEDDFF'}}>
                    <img src={Driver} class="card-img-mid" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Driver</h5>
                        <p class="card-text">Drive Vehicles for Bookings</p>
                        <a href="/DriverLogin" class="btn btn-dark">Select</a>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default AccountType;