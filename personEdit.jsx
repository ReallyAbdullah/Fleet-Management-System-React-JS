import React, { Component } from 'react';
import {Edit , SimpleForm , TextInput ,DateInput} from 'react-admin';

const PersonEdit = (props) => {
    return (
        <Edit title="Edit Person" {...props}>
            <SimpleForm>
                <TextInput disabled label="Id" source='id' />
                <TextInput source='Name' />
                <DateInput source='JoinDate' />
                <TextInput source='Age'/>
                <TextInput source='Cnic'/>
                <TextInput source='gender'/>
                <TextInput source='Addressn' />
                <TextInput source='picurl' />
            </SimpleForm>
        </Edit>
    );
}
 
export default PersonEdit;