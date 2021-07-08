import React, { Component } from 'react';
import Persons from './fetchPerson.jsx';
class fetchDrivers extends Component {
    constructor() {
        super();
        this.state = {
            Drivers : [],
            isLoaded : false
        }
    }

    componentDidMount() {
        fetch("http://localhost:3000/Drivers?id=" + this.props.id)
            .then(res => res.json())
            .then(json => {
                this.setState({ 
                    isLoaded : true,
                    Drivers : json,
                })
            });
    }
    render() {
        var {Drivers , isLoaded} = this.state;
        console.log(Drivers);
        return (
            <div>
                <h5 class="card-title alert alert-secondary">Drivers Information</h5>
                <p class="card-text" style={{margin : '10px'}}>Driver ID : {this.props.id}</p>
                {Drivers.map((DriverDetail, index) => {
                    return <div>
                        <p class="card-text" style={{margin : '10px'}}>Person ID : {DriverDetail.Person_ID}</p>
                        <Persons 
                            id = {DriverDetail.Person_ID}
                        />
                    </div>
                })}
            </div>
        );
    }
}
 
export default fetchDrivers;