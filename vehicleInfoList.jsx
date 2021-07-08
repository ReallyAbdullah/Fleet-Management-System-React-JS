import React, { Component } from 'react';
import Done from '@material-ui/icons/Done';
import Clear from '@material-ui/icons/Clear';
import { List, Datagrid, TextField, NumberField ,ChipField, EditButton, DeleteButton, BooleanField,} from 'react-admin';

const Vehicles = (props) => {
    return <List {...props}>
        <Datagrid>
            <TextField source='id' />
            <TextField source='Name' />
            <TextField source='Model_Year' />
            <ChipField source='Category' />
            <NumberField source='Rate' />
            <TextField source='Color' />
            <TextField source='Engine_No' />
            <TextField source='Chassis_No' />
            <TextField source='Reg_No' />
            <TextField source='BHP' />
            <BooleanField source='Available' TrueIcon={Done} FalseIcon={Clear}/>
            <EditButton basePath='/Vehicles' />
            <DeleteButton basePath='/Vehicles' />
        </Datagrid>
    </List>
}
 
export default Vehicles;