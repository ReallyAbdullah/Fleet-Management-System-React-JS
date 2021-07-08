import React, { Component } from 'react';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import vehiclelInfoList from './vehicleInfoList';
import driverInfoList from './driversInfoList';
import bookingInfoList from './bookingInfoList';
import personInfoList from './personInfoList';
import VehicleCreate from './vehicleCreate';
import DriverCreate from './driverCreate';
import BookingCreate from './bookingCreate';
import PersonCreate from './personCreate';
import VehicleEdit from './vehicleEdit';
import DriverEdit from './driverEdit';
import BookingEdit from './bookingEdit';
import PersonEdit from './personEdit';
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

const theme = createMuiTheme({
    palette: {
        primary: purple,
        secondary: {
          main: '#FFFFF',
        },
      },
  });
class ManagerDashboard extends Component {
    render() {
        var {id,password} = this.props.location; 
        return (
            <div>
                <div class="navbar navbar-dark bg-secondary">
                    <h3 class="navbar-brand mb-0 h1">Manager Dashboard {id} {password}</h3>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <a href="/managerLogin" ><button
                            class="btn btn-dark me-md-2" 
                            type="button"
                            >Back</button></a>
                    </div>
                </div>
                <Admin theme={theme} dataProvider={restProvider('http://localhost:3000')}>
                    <Resource name="Vehicles" list={vehiclelInfoList} create={VehicleCreate} edit={VehicleEdit}/>
                    <Resource name="Drivers" list={driverInfoList} create={DriverCreate} edit={DriverEdit}/>
                    <Resource name="Persons" list={personInfoList} create={PersonCreate} edit={PersonEdit}/>
                    <Resource name="Bookings" list={bookingInfoList} create={BookingCreate} edit={BookingEdit}/>
                </Admin>
            </div>
        );
    }
}
 
export default ManagerDashboard;