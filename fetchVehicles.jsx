import React, { Component } from 'react';

class fetchVehicles extends Component {
    constructor() {
        super();
        this.state = {
            Vehicle : [],
            isLoaded : false
        }
    }

    componentDidMount() {
        fetch("http://localhost:3000/Vehicles?id=" + this.props.id)
            .then(res => res.json())
            .then(json => {
                this.setState({ 
                    isLoaded : true,
                    Vehicle : json,
                })
            });
    }
    render() {
        var {Vehicle , isLoaded} = this.state;
        console.log(Vehicle);
        return (
            <div>
                <h5 class="card-title alert alert-secondary">Vehicle Information</h5>
                <p class="card-text" style={{margin : '10px'}}>Vehicle ID : {this.props.id}</p>
                {Vehicle.map((VehicleDetail, index) => {
                    return <div style={{margin : '10px'}}>
                        <p class="card-text">Name : {VehicleDetail.Name}</p>
                        <p class="card-text">Model Year : {VehicleDetail['Model_Year']}</p>
                        <p class="card-text">Reg No. : {VehicleDetail['Reg_No']}</p>
                        <p class="card-text">Engine No. : {VehicleDetail['Engine_No']}</p>
                        <p class="card-text">Chassis No. : {VehicleDetail['Chassis_No']}</p>
                        <p class="card-text">Category : {VehicleDetail.Category}</p>
                        <p class="card-text">Color : {VehicleDetail.Color}</p>
                        <p class="card-text">BHP : {VehicleDetail['BHP']}</p>
                        <p class="card-text">Rate : {VehicleDetail.Rate}</p>
                        <p class="card-text">Available : {VehicleDetail.Availabile ? 'Yes' : 'No'}</p>
                    </div>
                })}
            </div>
        );
    }
}
 
export default fetchVehicles;