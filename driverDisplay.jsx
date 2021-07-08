import React, { Component } from 'react';
import Vehicles from './fetchVehicles.jsx';
import Customers from './fetchCustomer.jsx';
class DriverDisplay extends Component {
    constructor() {
        super();
        this.state = {
            Booking : [],
            isLoaded : false
        }
    }

    componentDidMount() {
        fetch("http://localhost:3000/Bookings?Driver_ID=" + this.props.location.id)
            .then(res => res.json())
            .then(json => {
                this.setState({ 
                    isLoaded : true,
                    Bookings : json,
                })
            });
    }
    
    render() { 
        var {Bookings , isLoaded} = this.state;
        const {id, password} = this.props.location;
        if(!id && !password) {
            window.location.replace('/driverLogin');
        }
        console.log(Bookings);
        if(!isLoaded) {
            return <div>
                        <div class="navbar navbar-dark bg-secondary">
                            <h3 class="navbar-brand mb-0 h1">Driver Display id = {id} password = {password}</h3>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <a href="/vehicleType" ><button
                                    class="btn btn-dark me-md-2" 
                                    type="button"
                                    >Back</button></a>
                            </div>
                        </div>
                        <h3 class="alert alert-info" >No Bookings Yet</h3>
                    </div>
        }
        else {
                return (
                    
                    <div>
                        <div class="navbar navbar-dark bg-secondary">
                            <h3 class="navbar-brand mb-0 h1">Driver Display id = {id} password = {password}</h3>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <a href="/accountType" ><button
                                    class="btn btn-dark me-md-2" 
                                    type="button"
                                    >Back</button></a>
                            </div>
                        </div>
                        {Bookings.map((BookingInfo, index) => {
                           return <div class="card"  style={{left:0 + '%'}}>
                            <h5 class="card-header" style={{background: 'lightgreen'}}>Booking id : {BookingInfo.id}</h5>
                            <div class="row justify-content-around">
                                <div class="card-body">
                                    <h5 class="card-title alert alert-secondary">Booking Information</h5>
                                    <p class="card-text" style={{margin : '10px'}}>Start Time : {BookingInfo['Start_Time']}</p>
                                    <p class="card-text" style={{margin : '10px'}}>End Time : {BookingInfo['End_Time']}</p>
                                    <p class="card-text" style={{margin : '10px'}}>Start Location : {BookingInfo['Start_Location']}</p>
                                    <p class="card-text" style={{margin : '10px'}}>End Location : {BookingInfo['End_Location']}</p>
                                </div>
                                <div class="card-body">
                                    <Customers 
                                        id={BookingInfo['Customer_ID']}
                                    />
                                </div>
                                
                                <div class="card-body">
                                    <Vehicles 
                                        id = {BookingInfo['Car_ID']}
                                    />
                                </div>
                            </div>
                        </div>
                        })}
                    </div>
                );
        }
        
    }
}
 
export default DriverDisplay;