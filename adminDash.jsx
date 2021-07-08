import React, { Component } from 'react';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import customerlInfoList from './customerInfoList';
import managerInfoList from './managerInfoList'
import customerCreate from './customerCreate';
import managerCreate from './managerCreate';
import customerEdit from './customerEdit';
import managerEdit from './managerEdit';
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
class AdminDashboard extends Component {
    render() { 
        return (
            <div>
                <div class="navbar navbar-dark bg-secondary">
                    <h3 class="navbar-brand mb-0 h1">Admin Dashboard</h3>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <a href="/accountType" ><button
                            class="btn btn-dark me-md-2" 
                            type="button"
                            >Back</button></a>
                    </div>
                </div>
                <Admin theme={theme} dataProvider={restProvider('http://localhost:3000')}>
                    <Resource name="Customers" list={customerlInfoList} create={customerCreate} edit={customerEdit}/>
                    <Resource name="Managers" list={managerInfoList} create={managerCreate} edit={managerEdit}/>
                </Admin>
            </div>
        );
    }
}
 
export default AdminDashboard;
