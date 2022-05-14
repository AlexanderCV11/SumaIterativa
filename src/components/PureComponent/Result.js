import React, { Component } from 'react';

class Result extends Component {

    render() {
        return (
            <li>
                La suma es: {this.props.result}   
            </li>
        );
    }
}

export default Result;