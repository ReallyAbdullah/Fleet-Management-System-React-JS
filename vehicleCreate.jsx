import React, { Component } from 'react';
import {Create , SimpleForm , TextInput , NumberInput ,BooleanInput,} from 'react-admin';

const VehicleCreate = (props) => {
    return (
        <Create title="Create Vehicle" {...props}>
            <SimpleForm>
                <TextInput source='Name' />
                <TextInput source='Model_Year' />
                <TextInput source='Category' />
                <NumberInput source='Rate' />
                <TextInput source='Color' />
                <TextInput source='Engine_No' />
                <TextInput source='Chassis_No' />
                <TextInput source='Reg_No' />
                <TextInput source='BHP' />
                <BooleanInput source='Available'/>
                <NumberInput source='Rate' />
            </SimpleForm>
        </Create>
    );
}
 
export default VehicleCreate;