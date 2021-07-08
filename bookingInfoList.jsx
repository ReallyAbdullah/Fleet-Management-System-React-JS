import React, { Component } from 'react';
import { List, Datagrid, TextField, NumberField ,ChipField, EditButton, DeleteButton,DateField} from 'react-admin';

const BookingsInfoList = (props) => {
    return <List {...props}>
        <Datagrid>
            <TextField source='id' />
            <TextField source='Customer_ID' />
            <TextField source='Driver_ID' />
            <TextField source='Car_ID' />
            <TextField source='Start_Location' />
            <TextField source='End_Location' />
            <TextField source='Start_Time' />
            <TextField source='End_Time' />
            <EditButton basePath='/Bookings' />
            <DeleteButton basePath='/Bookings' />
        </Datagrid>
    </List>
}
 
export default BookingsInfoList;