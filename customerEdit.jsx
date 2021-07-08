import React, { Component } from 'react';
import {Edit , SimpleForm , TextInput ,DateInput,NumberInput} from 'react-admin';

const CustomerEdit = (props) => {
    return (
        <Edit title="Edit Customer" {...props}>
            <SimpleForm>
                <TextInput disabled label="Id" source='id' />
                <TextInput source='Person_ID' />
                <TextInput source='Password' />
            </SimpleForm>
        </Edit>
    );
}
 
export default CustomerEdit;