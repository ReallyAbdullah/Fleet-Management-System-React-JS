import React, { Component } from 'react';

class Card extends Component {
    render() { 
        return (
            <div class="card text-white bg-dark mb-3" style={{width: 15 + 'rem'}}>
            <img src={this.props.img} class="card-img-mid" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{this.props.name}</h5>
                <p class="card-text">{this.props.text}</p>
                <a href="#" class="btn btn-light">Select</a>
            </div>
            </div>
        );
    }
}
 
export default Card;