import React, { Component } from 'react';

class Resultado extends Component {

    render() {
        return (
            <li>
                La suma es: {this.props.result}   
            </li>
        );
    }
}

export default Resultado;