import React, { Component } from 'react';

class Location extends Component {
  render() {
    return (
      <div>
        <img src={this.props.pic1}></img>
        <h1> {this.props.name} </h1>
        <div>위치: {this.props.address}</div>
        <br></br>
        <div>{this.props.description}</div>
        <br></br>
      </div>
      
    );
  }
}

export default Location;
