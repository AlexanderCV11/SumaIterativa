import React from 'react';
import PropTypes from 'prop-types';
import logo from '../images/logo.svg';

const Header = (props) => {

    const {title, url} = props;

    return ( 
        <header className="App-header">
            <a href={url}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Fibonacci_spiral_34.svg/1920px-Fibonacci_spiral_34.svg.png" className="App-logo" alt="logo" />
            </a>
            
            <h1>{title}</h1>
        </header>
    );
    
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
}

export default Header;