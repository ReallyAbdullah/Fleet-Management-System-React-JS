import React, { Component } from 'react';
import { BrowserRouter as Router,Link } from 'react-router-dom';
import AccountType from './accountType'
import Route from 'react-router-dom/Route';
import IndexBody from './indexBody';
import CustomerLogin from './CustomerLogin';
import DriverLogin from './DriverLogin';
import ManagerLogin from './managerLogin';
import VehicleType from './vehicleType';
import VehicleList from './vehicleList';
import CustomerSignUp from './customerSignup';
import DriverSignUp from './driverSignup';
import VehicleInfo from './vehicleInfo';
import ManagerDashboard from './managerDash';
import AdminDashboard from './adminDash';
import DriverDisplay from './driverDisplay';
import BookingDisplay from './bookingDisplay';
import SetBooking from './setBooking';
class NavBar extends Component {
    Main = () => {
        return (<IndexBody />);
    }
    render() { 
        return (
            <Router >
                <nav className="navbar navbar-dark bg-dark">
                    <a className="navbar-brand mb-0 h1" href="/">
                        Platinum Vehicles{" "} 
                    </a>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <Link
                        to="/accountType"
                        class="btn btn-light me-md-2" 
                        type="button"
                        >Menu</Link>
                    </div>
                </nav>
                <Route path="/" exact strict 
                component={this.Main}
                />
                <Route path="/accountType" exact strict 
                component={AccountType}
                />
                <Route path="/customerLogin" exact strict 
                component={CustomerLogin}
                />
                <Route path="/driverLogin" exact strict 
                component={DriverLogin}
                />
                <Route path="/managerLogin" exact strict 
                component={ManagerLogin}
                />
                <Route path="/vehicleType" exact strict 
                component={VehicleType}
                />
                <Route path="/customerSignup" exact strict 
                component={CustomerSignUp}
                />
                <Route path="/driverSignup" exact strict 
                component={DriverSignUp}
                />
                <Route path="/vehicleList/:category" exact strict 
                component={VehicleList}
                />
                <Route path="/vehicleInfo" exact strict 
                component={VehicleInfo}
                />
                <Route path="/managerDash" exact strict 
                component={ManagerDashboard}
                />
                <Route path="/adminDash" exact strict 
                component={AdminDashboard}
                />
                <Route path="/driverDisplay" exact strict 
                component={DriverDisplay}
                />
                <Route path="/bookingDisplay/:customerID" exact strict 
                component={BookingDisplay}
                />
                <Route path="/setBooking" exact strict 
                component={SetBooking}
                />
            </Router>
        );
    }
}
 
export default NavBar;