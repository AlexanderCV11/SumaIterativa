import React, { Component } from 'react';

class Calculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number1: 5,
            number2: 4,
            results: 0,
            selectorV: 'Opera',
        }
    }
    
    handleChange1 = e => {
        const {target: {value}} = e;


        this.setState({
            number1: Number(value),
        })
    }
    handleChange2 = e => {
        const {target: {value}} = e;


        this.setState({
            number2: Number(value),
        })
    }
    

    handleChange = e => {    
        this.setState({
            selectorV: e.target.value
        })
    }


    operacion = e => {
        switch(this.state.selectorV){
            case 'suma':
                const suma = this.state.number1 + this.state.number2; 
                this.setState({
                    results: suma
                })
            break;
            case 'resta': 
            const resta = this.state.number1 - this.state.number2; 
            this.setState({
                results: resta
            })
            break;
            case 'producto': 
            const producto = this.state.number1 * this.state.number2; 
            this.setState({
                results: producto
            })
            break;
            case 'division': 
            const division = this.state.number1 / this.state.number2; 
            this.setState({
                results: division
            })
            break;
        }
        console.log(this.state.selectorV)
    }

    render() {
        return (
            <div>
                <input 
                    type="text" 
                    value={this.state.value} 
                    onChange={this.handleChange1} 
                />
                <select value={this.state.selectorV} onChange={this.handleChange}>
                    <option value="suma">+</option>
                    <option value="resta">-</option>
                    <option value="producto">*</option>
                    <option value="division">/</option>
                </select>
                <input 
                    type="text" 
                    value={this.state.value} 
                    onChange={this.handleChange2} 
                />
                
                <button
                    onClick= {this.operacion}
                >
                    operacion
                </button> 
                
                <div>
                    el resultado es {this.state.results}
                </div>


            </div>
        );
    }
}

export default Calculator;
