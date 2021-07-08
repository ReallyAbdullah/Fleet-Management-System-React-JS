import React, { Component } from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton, DateField,EmailField,} from 'react-admin';

const CustomerInfoList = (props) => {
    return <List {...props}>
        <Datagrid>
            <TextField source='id' />
            <TextField source='Person_ID' />
            <TextField source="Password" />
            <EditButton basePath='/Customers' />
            <DeleteButton basePath='/Customers' />
        </Datagrid>
    </List>
}
 
export default CustomerInfoList;