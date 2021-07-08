import React, { Component } from 'react';
import { BrowserRouter , Link as Router,Link } from 'react-router-dom';
import DateTimePicker from 'react-datetime-picker';
import Calendar from 'react-calendar';
import TimePicker from 'react-time-picker';
import Logo from './sports.jpg';
import price from './price.svg';
class VehicleInfo extends Component {
    constructor(){
        super();
        this.state = {
            Vehicles : [],
            isLoaded : false
        }
    }

    componentDidMount(){
        fetch("http://localhost:3000/Vehicles?id=" + this.props.location.vehicleID)
            .then(res => res.json())
            .then(json => {
                this.setState({ 
                    isLoaded : true,
                    Vehicles : json,
                })
            });
    }
    render() { 
        var {Vehicles , isLoaded} = this.state;
        if(!isLoaded){
            return <div>
                    <div class="navbar navbar-dark bg-secondary">
                        <h3 class="navbar-brand mb-0 h1">Vehicle List : "{this.props.match.params.category}"</h3>
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
                        <h3 class="navbar-brand mb-0 h1">Vehicle Info : id = {this.props.location.vehicleID}</h3>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                            <a href="/vehicleType" ><button
                                class="btn btn-dark me-md-2" 
                                type="button"
                                >Back</button></a>
                        </div>
                    </div>
                    <div class="col-4">
                        
                        <div class="card mb-4" style={{width : 1200 + 'px'}}>
                            <div class="row g-0">
                                <div class="col-md-3" style={{left : 2 + '%'}}>
                                    <img src={Logo} class="img-thumbnail rounded mx-auto d-block" alt="..." />
                                </div>
                                <div class="col-md-9" style={{background : 'white'}}>
                                    <div class="shadow-lg p-3 mb-5 bg-white rounded">
                                        <div class="card" style={{top: 0 + 'rem'}}>
                                            <div class="card-body">
                                                <h5 class="card-title">{Vehicles[0].Name}</h5>
                                                <h6 class="card-subtitle mb-2 text-muted">{Vehicles[0].Model_Year}</h6>
                                                <p class="card-text">Category : {Vehicles[0].Category}</p>
                                                <p class="alert alert-secondary">Reg : {Vehicles[0].Reg_No}</p>
                                                <p class="alert alert-info">BHP : {Vehicles[0].BHP}</p>
                                                <p class="alert alert-success">
                                                    <div>
                                                        <img src={price} style={{padding : 2 + '%'}}/>
                                                         {Vehicles[0].Rate}$
                                                    </div>
                                                </p>
                                                <Link to={{
                                                pathname: "/setBooking",
                                                vehicleID: this.props.location.vehicleID,
                                                customerID : this.props.location.customerID,
                                                password: this.props.location.password,                                        
                                                }} 
                                                class="btn btn-danger" >Book</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        
    }
}
 
export default VehicleInfo;