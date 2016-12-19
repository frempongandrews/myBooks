import React from 'react';
import {Navbar} from 'react-bootstrap';
import SearchInput from './SearchInput';


const Header = React.createClass({

    render () {
        return (
            <Navbar className="App-header">
                <h1> Bookfinder </h1>
                <SearchInput
                    inputChange={this.props.inputChange}
                    startSearch={this.props.startSearch}
                    text={this.props.text}
                />

            </Navbar>
        )
    }
});

export default Header;