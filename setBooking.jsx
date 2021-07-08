import React, { useState } from 'react';
import MapPicker from 'react-google-map-picker'
import Calendar from 'react-calendar';
import TimePicker from 'react-time-picker';
import axios from 'axios';
const DefaultLocation = { lat: 33.6844, lng: 73.0479};
const DefaultZoom = 10;
const SetBooking = (props) => {
    function getRandomInt(max) {
        var x = Math.floor(Math.random() * Math.floor(max));
        if(x === 0){
            return x+1;
        }
        else {return (x);}
    }
      
    const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);

    const [startlocation, setstartLocation] = useState(defaultLocation);
    const [endlocation, setendLocation] = useState(defaultLocation);
    const [startzoom, setstartZoom] = useState(DefaultZoom);
    const [endzoom, setendZoom] = useState(DefaultZoom);

    const [startvalue, onstartChange] = useState('10:45');
    const [endvalue, onendChange] = useState('10:45');

    const [startdate, onstartdateChange] = useState(new Date());
    const [enddate, onenddateChange] = useState(new Date());

    const bookingObj = {
        'Customer_ID' : parseInt(props.location.customerID),
        'Driver_ID' : getRandomInt(4),
        'Car_ID' : props.location.vehicleID,
        'Start_Location' : null,
        'End_Location' : null,
        'Start_Time' : null,
        'End_Time' : null,
        'Payment_ID' : null
    };
    function handlestartChangeLocation (lat, lng){
        setstartLocation({lat:lat, lng:lng});
    }
    function handleendChangeLocation (lat, lng){
        setendLocation({lat:lat, lng:lng});
    }
    function handlestartChangeZoom (newZoom){
        setstartZoom(newZoom);
    }
    function handleendChangeZoom (newZoom){
        setendZoom(newZoom);
    }
    function handlestartResetLocation(){
        setDefaultLocation({ ... DefaultLocation});
        setstartZoom(DefaultZoom);
    }
    function handleendResetLocation(){
        setDefaultLocation({ ... DefaultLocation});
        setendZoom(DefaultZoom);
    }
    function handleConfirmBooking(){
        bookingObj['Start_Time'] = startvalue + " " + startdate.getMonth() + "/" + startdate.getDate() + "/" + startdate.getFullYear();
        bookingObj['End_Time'] = endvalue + " " + enddate.getMonth() + "/" + enddate.getDate() + "/" + enddate.getFullYear();
        bookingObj['Start_Location'] = "Lat : " + startlocation.lat + " " + "Lng : " + startlocation.lng;
        bookingObj['End_Location'] = "Lat : " + endlocation.lat + " " + "Lng : " + endlocation.lng;
        console.log(bookingObj); 
        submitHandler();
        window.location.replace('/bookingDisplay/' + bookingObj['Customer_ID']);
    }
    function submitHandler(){
        console.log(bookingObj);
        axios.post('http://localhost:3000/Bookings',bookingObj)
        .then(response => {
            console.log(response)
            if(response){
                return <h1>Success</h1>
            }
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div>
            <div class="navbar navbar-dark bg-secondary">
                <h3 class="navbar-brand mb-0 h1">Set Booking</h3>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <a href="/vehicleInfo" ><button
                        class="btn btn-dark me-md-2" 
                        type="button"
                        >Back</button></a>
                </div>
            </div>
            <div class="navbar navbar-light bg-warning">
                <h3 class="navbar-brand mb-0 h1">Confimation VehicleID : {props.location.vehicleID} CustomerID : {props.location.customerID}</h3>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button
                        onClick={handleConfirmBooking}
                        class="btn btn-danger me-md-2" 
                        type="button"
                        >Confirm</button>
                </div>
            </div>
            <div class="alert alert-success row justify-content-around">
                <div class="alert alert-info" >
                    <h4>Select Start Date of Booking</h4>
                    <p class="lead">Selected {startdate.getDate()}/{startdate.getMonth()}/{startdate.getFullYear()}</p>
                    <Calendar 
                    onChange={onstartdateChange}
                    value={startdate}/>
                </div>
                <div class="alert alert-info" >
                    <h4>Select End Date of Booking</h4>
                    <p class="lead">Selected {enddate.getDate()}/{enddate.getMonth()}/{enddate.getFullYear()}</p>
                    <Calendar 
                    onChange={onenddateChange}
                    value={enddate}/>
                </div>
                <div class="alert alert-info">
                    <h4>Select Start Time</h4>
                    <TimePicker
                    onChange={onstartChange}
                    value={startvalue}/>
                    <h4>Select End Time</h4>
                    <TimePicker
                    onChange={onendChange}
                    value={endvalue}/>
                </div>
            </div>
          <div class="alert alert-success row justify-content-around">
                <div style={{width:'400px'}}>
                    <h3>Select Start Location</h3>
                    <button class="btn btn-danger me-md-2" onClick={handlestartResetLocation}>Reset Location</button>
                    <label>Latitute:</label><input type='text' value={startlocation.lat} disabled/>
                    <label>Longitute:</label><input type='text' value={startlocation.lng} disabled/>
                    <label>Zoom:</label><input type='text' value={startzoom} disabled/>
                    
                    <MapPicker defaultLocation={defaultLocation}
                        zoom={startzoom}
                        style={{height:'400px',width:'500px'}}
                        onChangeLocation={handlestartChangeLocation} 
                        onChangeZoom={handlestartChangeZoom}
                        apiKey='AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8'/>
                </div>
                
                <div style={{width:'400px'}}>
                    <h3>Select End Location</h3>
                    <button class="btn btn-danger me-md-2" onClick={handleendResetLocation}>Reset Location</button>
                    <label>Latitute:</label><input type='text' value={endlocation.lat} disabled/>
                    <label>Longitute:</label><input type='text' value={endlocation.lng} disabled/>
                    <label>Zoom:</label><input type='text' value={endzoom} disabled/>
                    
                    <MapPicker defaultLocation={defaultLocation}
                        zoom={endzoom}
                        style={{height:'400px',width : '500px'}}
                        onChangeLocation={handleendChangeLocation} 
                        onChangeZoom={handleendChangeZoom}
                        apiKey='AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8'/>
                </div>
            </div>
            
        </div>
        
    );
}

export default SetBooking;