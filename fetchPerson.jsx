import React, { Component } from 'react';

class fetchPerson extends Component {
    constructor() {
        super();
        this.state = {
            Persons : [],
            isLoaded : false
        }
    }

    componentDidMount() {
        fetch("http://localhost:3000/Persons?id=" + this.props.id)
            .then(res => res.json())
            .then(json => {
                this.setState({ 
                    isLoaded : true,
                    Persons : json,
                })
            });
    }
    render() {
        var {Persons , isLoaded} = this.state;
        console.log(Persons);
        return (
            <div>
                <h5 class="card-title alert alert-secondary">Person Information</h5>
                <p class="card-text" style={{margin : '10px'}}>Person ID : {this.props.id}</p>
                {Persons.map((PersonDetail, index) => {
                    return <div style={{margin : '10px'}}>
                        <p class="card-text">Name  : {PersonDetail.Name}</p>
                        <p class="card-text">Join Date  : {PersonDetail.JoinDate}</p>
                        <p class="card-text">Address  : {PersonDetail.Addressn}</p>
                        <p class="card-text">Phone Number  : {PersonDetail.PhoneNumber}</p>
                        <p class="card-text">CNIC  : {PersonDetail.Cnic}</p>
                        <p class="card-text">Gender  : {PersonDetail.gender}</p>
                        <p class="card-text">Age  : {PersonDetail.Age}</p>
                    </div>
                })}
            </div>
        );
    }
}
 
export default fetchPerson;