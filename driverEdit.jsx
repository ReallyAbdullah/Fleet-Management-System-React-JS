import React, { Component } from 'react';
import {Edit , SimpleForm , TextInput ,DateInput} from 'react-admin';

const DriverEdit = (props) => {
    return (
        <Edit title="Edit Driver" {...props}>
            <SimpleForm>
                <TextInput disabled label="Id" source='id' />
                <TextInput source='Person_ID' />
                <TextInput source='Password' />
            </SimpleForm>
        </Edit>
    );
}
 
export default DriverEdit;