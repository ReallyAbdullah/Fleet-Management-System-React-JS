import React, { Component } from 'react';
import {Create , SimpleForm , TextInput , DateInput ,NumberInput} from 'react-admin';

const CustomerCreate = (props) => {
    return (
        <Create title="Create Customer" {...props}>
            <SimpleForm>
                <TextInput source='Person_ID' />
                <TextInput source='Password' />
            </SimpleForm>
        </Create>
    );
}
 
export default CustomerCreate;