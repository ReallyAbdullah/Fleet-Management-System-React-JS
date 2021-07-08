import React, { Component } from 'react';
import {Create , SimpleForm , TextInput , DateInput ,} from 'react-admin';

const DriverCreate = (props) => {
    return (
        <Create title="Create Driver" {...props}>
            <SimpleForm>
                <TextInput source='Person_ID' />
                <TextInput source='Password' />
            </SimpleForm>
        </Create>
    );
}
 
export default DriverCreate;