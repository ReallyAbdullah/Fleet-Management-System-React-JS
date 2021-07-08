import React, { Component } from 'react';
import {Create , SimpleForm , TextInput , DateInput ,} from 'react-admin';

const ManagerCreate = (props) => {
    return (
        <Create title="Create Manager" {...props}>
            <SimpleForm>
                <TextInput source='id' />
                <TextInput source='Person_ID' />
                <DateInput source="Password" />
            </SimpleForm>
        </Create>
    );
}
 
export default ManagerCreate;