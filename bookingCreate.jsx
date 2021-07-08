import React, { Component } from 'react';
import {Create , SimpleForm , TextInput ,DateInput} from 'react-admin';

const BookingCreate = (props) => {
    return (
        <Create title="Create Booking" {...props}>
            <SimpleForm>
                <TextInput source='Customer_ID' />
                <TextInput source='Driver_ID' />
                <TextInput source='Car_ID' />
                <TextInput source='Start_Location' />
                <TextInput source='End_Location' />
                <TextInput source='Start_Time' />
                <TextInput source='End_Time' />
            </SimpleForm>
        </Create>
    );
}
 
export default BookingCreate;