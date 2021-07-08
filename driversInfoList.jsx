import React, { Component } from 'react';
import { List, Datagrid, TextField,ChipField, EditButton, DeleteButton, DateField} from 'react-admin';

const DriverInfoList = (props) => {
    return <List {...props}>
        <Datagrid>
            <TextField source='id' />
            <TextField source='Person_ID' />
            <TextField source="Password" />
            <EditButton basePath='/Drivers' />
            <DeleteButton basePath='/Drivers' />
        </Datagrid>
    </List>
}
 
export default DriverInfoList;