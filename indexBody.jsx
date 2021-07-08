import React, { Component } from 'react';
import Home from './Home.svg';

class indexBody extends Component {
    state = {  }
    render() { 
        return (
            <div class="row justify-content-around" style={{ background : 'lightgray' , height : '45rem' }}>
                <div style={{padding : 5 + '%',background : '#846BFF'}}>
                    <h3 class="display-5 text-light">Need a car for your wedding?</h3>
                    <h3 class="display-5 text-light">Going to the mountains for a vacation?</h3>
                    <h3 class="display-5 text-light">Want to transport good somewhere?</h3>
                    <h3 class="display-5 text-light">Or just about anything</h3>
                </div>
                <img src={Home} class="rounded mx-auto d-block" alt="..."></img>
            </div>
        );
    }
}
 
export default indexBody;