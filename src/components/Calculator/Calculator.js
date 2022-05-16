import React, { Component } from 'react';

class Calculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number1: 5,
            number2: 4,
            results: 0,
            selectorV: '',
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
    
    suma = () => {

        const result = this.state.number1 + this.state.number2; 

        this.setState({
            results: result,
        })
    }
    resta = () => {

        const result = this.state.number1 - this.state.number2; 

        this.setState({
            results: result,
        })
    }
    multiplicacion = () => {

        const result = this.state.number1 * this.state.number2; 

        this.setState({
            results: result,
        })
    }
    division = () => {

        const result = this.state.number1 / this.state.number2; 

        this.setState({
            results: result,
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
                this.suma();
            break;
            case '-': 
                this.results = this.state.number1 - this.state.number2
            break;
            case '*': 
            this.results = this.state.number1 * this.state.number2
            break;
            case '/': 
            this.setState({results: this.state.number1 / this.state.number2})
            break;
        }
        console.log(this.state.results)
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
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
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