import React, { Component } from 'react';

class DriverSignUp extends Component {
    render() { 
        return (
            <div>
                <div class="navbar navbar-dark bg-secondary">
                    <h3 class="navbar-brand mb-0 h1">Driver Sign Up</h3>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <a href="/DriverLogin" ><button
                            class="btn btn-dark me-md-2" 
                            type="button"
                            >Back</button></a>
                    </div>
                </div>
                <form class="row g-3" style={{padding : 4 + '%'}}>
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">Name</label>
                        <input type="email" class="form-control" id="inputEmail4" />
                    </div>
                    <div class="col-md-6">
                        <label for="inputPassword4" class="form-label">Password</label>
                        <input type="password" class="form-control" id="inputPassword4" />
                    </div>
                    <div class="col-md-6">
                        <label for="inputCnic4" class="form-label">CNIC</label>
                        <input type="text" class="form-control" id="inputCnic4" />
                    </div>
                    <div class="col-md-6">
                        <label for="inputage4" class="form-label">Age</label>
                        <input type="text" class="form-control" id="inputage4" />
                    </div>
                    <div class="col-md-6">
                        <label for="inputgender4" class="form-label">Gender</label>
                        <input type="text" class="form-control" id="inputgender4" />
                    </div>
                    <div class="col-6">
                        <label for="inputAddress" class="form-label">Address</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                    </div>
                    <div class="col-6">
                        <label for="inputAddress2" class="form-label">Phone Number</label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="+921234567890" />
                    </div>
                    <div class="col-12" style={{padding : 5 + '%'}}>
                        <button type="submit" class="btn btn-dark">Sign Up</button>
                    </div>
                </form>
            </div>
        );
    }
}
 
export default DriverSignUp;