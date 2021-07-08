import React, { Component } from 'react';
import Persons from './fetchPerson.jsx';
class fetchCustomer extends Component {
    constructor() {
        super();
        this.state = {
            Customers : [],
            isLoaded : false
        }
    }

    componentDidMount() {
        fetch("http://localhost:3000/Customers?id=" + this.props.id)
            .then(res => res.json())
            .then(json => {
                this.setState({ 
                    isLoaded : true,
                    Customers : json,
                })
            });
    }
    render() {
        var {Customers , isLoaded} = this.state;
        console.log(Customers);
        return (
            <div>
                <h5 class="card-title alert alert-secondary">Customer Information</h5>
                <p class="card-text" style={{margin : '10px'}}>Customer ID : {this.props.id}</p>
                {Customers.map((CustomerDetail, index) => {
                    return <div>
                        <p class="card-text" style={{margin : '10px'}}>Person ID : {CustomerDetail.Person_ID}</p>
                        <Persons 
                            id = {CustomerDetail.Person_ID}
                        />
                    </div>
                })}
            </div>
        );
    }
}
 
export default fetchCustomer;