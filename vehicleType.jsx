import React, { Component } from 'react';
import { BrowserRouter as Router,Link } from 'react-router-dom';
import economy from './economy.jpg';
import sports from './sports.jpg';
import suv from './suv.jpg';
import van from './van.jpg';
class VehicleType extends Component {
    render() { 
        const {customerID , password} = this.props.location;
        if(!customerID && !password){
            window.location.replace('/customerLogin');
        }
        return (
            <div>
                <div class="navbar navbar-dark bg-secondary">
                    <h3 class="navbar-brand mb-0 h1">Select Vehicle Type {customerID} {password}</h3>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <a href="/accountType" ><button
                            class="btn btn-dark me-md-2" 
                            type="button"
                            >Back</button></a>
                        <Link
                        to={{pathname : '/bookingDisplay/' + customerID}}
                        class="btn btn-warning me-md-2" 
                        type="button"
                        >View Current Bookings</Link>
                    </div>
                </div>
                <div class="row justify-content-around" style={{padding: 3 + '%'}}>
                    <div class="card text-white bg-secondary mb-3" style={{width: 15 + 'rem'}}>
                    <img src={economy} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Economy</h5>
                        <p class="card-text">Value for money</p>
                        <Link to={{
                            pathname: '/vehicleList/economy',
                            customerID : customerID,
                            password: password,
                        }} class="btn btn-light">Select</Link>
                    </div>
                    </div>
                    <div class="card text-white bg-secondary mb-3" style={{width: 15 + 'rem'}}>
                    <img src={sports} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Sports</h5>
                        <p class="card-text">For the enthusiasts</p>
                        <Link to={{
                            pathname: '/vehicleList/sports',
                            customerID : customerID,
                            password: password,
                        }} class="btn btn-light">Select</Link>
                    </div>
                    </div>
                    <div class="card text-white bg-secondary mb-3" style={{width: 15 + 'rem'}}>
                    <img src={suv} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">SUV</h5>
                        <p class="card-text">For Practicality</p>
                        <Link to={{
                            pathname: '/vehicleList/suv',
                            customerID : customerID,
                            password: password,
                        }} class="btn btn-light">Select</Link>
                    </div>
                    </div>
                    <div class="card text-white bg-secondary mb-3" style={{width: 15 + 'rem'}}>
                    <img src={van} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Van</h5>
                        <p class="card-text">For Transportation</p>
                        <Link to={{
                            pathname: '/vehicleList/van',
                            customerID : customerID,
                            password: password,
                        }} class="btn btn-light">Select</Link>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default VehicleType;