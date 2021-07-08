import React, { Component } from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton, DateField} from 'react-admin';

const ManagerInfoList = (props) => {
    return <List {...props}>
        <Datagrid>
            <TextField source='id' />
            <TextField source='Person_ID' />
            <DateField source="Password" />
            <EditButton basePath='/Managers' />
            <DeleteButton basePath='/Managers' />
        </Datagrid>
    </List>
}
 
export default ManagerInfoList;