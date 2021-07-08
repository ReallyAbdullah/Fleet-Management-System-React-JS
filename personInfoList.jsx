import React, { Component } from 'react';
import { List, Datagrid, TextField,ChipField, EditButton, DeleteButton, DateField} from 'react-admin';

const PersonInfoList = (props) => {
    return <List {...props}>
        <Datagrid>
            <TextField source='id' />
            <TextField source='JoinDate' />
            <TextField source="Addressn" />
            <TextField source="Cnic" />
            <TextField source="gender" />
            <TextField source="Age" />
            <TextField source="PhoneNumber" />
            <TextField source="picurl" />
            <EditButton basePath='/Persons' />
            <DeleteButton basePath='/Person' />
        </Datagrid>
    </List>
}
export default PersonInfoList;