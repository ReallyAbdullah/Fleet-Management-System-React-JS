import React, { Component } from 'react';
import { BrowserRouter , Link as Router,Link } from 'react-router-dom';
import sports from './sports.jpg';
class VehicleList extends Component {
    constructor(){
        super();
        this.state = {
            Vehicles : [],
            isLoaded : false,
        }
    }

    componentDidMount(){
        fetch("http://localhost:3000/Vehicles?Category=" + this.props.match.params.category)
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
                        <h3 class="navbar-brand mb-0 h1">Vehicle List : "{this.props.match.params.category}"</h3>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                            <a href="/vehicleType" ><button
                                class="btn btn-dark me-md-2" 
                                type="button"
                                >Back</button></a>
                        </div>
                    </div>
                    {Vehicles.map((VehicleDetail, index) => {
                        return <div class="col-4" style={{left : 60 + 'px'}}>
                                    <div class="card mb-4" style={{width : 1100 + 'px'}}>
                                    <div class="row g-0">
                                        <div class="col-md-3">
                                        <img src={sports} class="img-thumbnail rounded mx-auto d-block" alt="..." />
                                        </div>
                                        <div class="col-md-7">
                                        <div class="card-body">
                                            <h5 class="card-title">{VehicleDetail.Name}</h5>
                                            <p class="h7">{VehicleDetail.Model_Year}</p>
                                            <p class="quote">{VehicleDetail.Category}</p>
                                            <p class="lead"><small class="text-muted">Rate : {VehicleDetail.Rate}$</small></p>
                                        </div>
                                        </div>
                                        <div class="row-md-4" style={{margin : 5 + 'px'}}>
                                            <Link to={{
                                                pathname: "/vehicleInfo",
                                                vehicleID: VehicleDetail.id,
                                                customerID : this.props.location.customerID,
                                                password: this.props.location.password,                                        
                                                }} 
                                                class="btn btn-danger" >View</Link>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                    })}
                </div>
            );
        }
    }
}
 
export default VehicleList;