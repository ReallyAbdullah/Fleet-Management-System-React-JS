import React, { Component } from 'react';
import Vehicles from './fetchVehicles.jsx';
import Drivers from './fetchDrivers.jsx'
class BookingDisplay extends Component {
    constructor(){
        super();
        this.state = {
            Booking : [],
            isLoaded : false
        }
    }

    componentDidMount(){
        fetch("http://localhost:3000/Bookings?Customer_ID=" + this.props.match.params.customerID)
            .then(res => res.json())
            .then(json => {
                this.setState({ 
                    isLoaded : true,
                    Booking : json,
                })
            });
    }
    render() { 
        var {Booking , isLoaded} = this.state;
        console.log(Booking);
        if(!isLoaded) {
            return <div>
                        <div class="navbar navbar-dark bg-secondary">
                            <h3 class="navbar-brand mb-0 h1">Booking Display</h3>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <a href="/vehicleType" ><button
                                    class="btn btn-dark me-md-2" 
                                    type="button"
                                    >Back</button></a>
                            </div>
                        </div>
                        <div class="spinner-border text-danger" role="status">
                            <span class="visually-hidden"></span>
                        </div>
                    </div>
        }
        else {
                return (
                    
                    <div>
                        <div class="navbar navbar-dark bg-secondary">
                            <h3 class="navbar-brand mb-0 h1">Booking Display</h3>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                <a href="/accountType" ><button
                                    class="btn btn-dark me-md-2" 
                                    type="button"
                                    >Back</button></a>
                            </div>
                        </div>
                        {Booking.map((BookingInfo, index) => {
                           return <div class="card"  style={{left:0 + '%'}}>
                            <h5 class="card-header text-light" style={{background: '#846BFF'}}>Booking ID : {BookingInfo.id}</h5>
                            <div class="row justify-content-around">
                                <div class="card-body">
                                    <h5 class="card-text alert alert-secondary">Customer ID : {this.props.match.params.customerID}</h5>
                                    <h5 class="card-title alert alert-secondary">Booking Information</h5>
                                    <p class="card-text" style={{margin : '10px'}}>Start Time : {BookingInfo['Start_Time']}</p>
                                    <p class="card-text" style={{margin : '10px'}}>End Time : {BookingInfo['End_Time']}</p>
                                    <p class="card-text" style={{margin : '10px'}}>Start Location : {BookingInfo['Start_Location']}</p>
                                    <p class="card-text" style={{margin : '10px'}}>End Location : {BookingInfo['End_Location']}</p>
                                </div>
                                <div class="card-body">
                                    <Drivers 
                                        id = {BookingInfo['Driver_ID']}
                                    />
                                </div>
                                <div class="card-body">
                                    <Vehicles
                                        id= {BookingInfo['Car_ID']}
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
 
export default BookingDisplay;