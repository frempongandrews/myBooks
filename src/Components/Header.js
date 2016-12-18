import React from 'react';
import {Navbar} from 'react-bootstrap';


const Header = React.createClass({
    render () {
        return (
            <Navbar>
                <h1> Bookfinder </h1>
            </Navbar>
        )
    }
});

export default Header;