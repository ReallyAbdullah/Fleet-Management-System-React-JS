import React, { Component } from 'react';
import {Create , SimpleForm , TextInput , DateInput ,} from 'react-admin';

const PersonCreate = (props) => {
    return (
        <Create title="Create Person" {...props}>
            <SimpleForm>
                <TextInput source='Name' />
                <TextInput source='PhoneNumber' />
                <DateInput source="JoinDate" />
                <TextInput source='Age'/>
                <TextInput source='Cnic'/>
                <TextInput source='gender'/>
                <TextInput source='Addressn' />
                <TextInput source='picurl' />
            </SimpleForm>
        </Create>
    );
}
 
export default PersonCreate;