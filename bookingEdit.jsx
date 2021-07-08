import React, { Component } from 'react';
import {Edit , SimpleForm , TextInput , DateInput} from 'react-admin';

const BookingEdit = (props) => {
    return (
        <Edit title="Edit Booking" {...props}>
            <SimpleForm>
                <TextInput disabled label="Id" source='id' />
                <TextInput source='Driver_ID' />
                <TextInput source='Car_ID' />
                <TextInput source='Start_Location' />
                <TextInput source='End_Location' />
                <TextInput source='Start_Time' />
                <TextInput source='End_Time' />
            </SimpleForm>
        </Edit>
    );
}
 
export default BookingEdit;