import React, { Component } from 'react';
import {Edit , SimpleForm , TextInput , NumberInput ,BooleanInput,} from 'react-admin';

const VehicleEdit = (props) => {
    return (
        <Edit title="Edit Vehicle" {...props}>
            <SimpleForm>
                <TextInput disabled label="Id" source='Car_ID' />
                <TextInput source='Name' />
                <TextInput source='Model_Year' />
                <TextInput source='Category' />
                <NumberInput source='Rate' />
                <TextInput source='Color' />
                <TextInput source='Engine_No' />
                <TextInput source='Chassis_No' />
                <TextInput source='Reg_No' />
                <TextInput source='BHP' />
                <BooleanInput source='Available' />
                <NumberInput source='Rate' />
            </SimpleForm>
        </Edit>
    );
}
 
export default VehicleEdit;