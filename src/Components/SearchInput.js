import React from 'react';
import {Well, FormControl, Button} from 'react-bootstrap';

const SearchInput = React.createClass({
    handleInputChange (e) {
        var text = e.target.value;
        // console.log(text);
        this.props.inputChange(text);
    },

    handleStartSearch () {
        this.props.startSearch(this.props.text);
        this.refs.searchInput.value = "";
    },
    render () {
        console.log(this.refs.searchInput);
        return (

            <Well>
                <input
                    className="input-text"
                    type="text"
                    placeholder="Search Books..."
                    onChange={this.handleInputChange}
                    ref="searchInput"
                />
                <br />
                <Button onClick={this.handleStartSearch} className="search-button"> Search </Button>
            </Well>
        )
    }
});

export default SearchInput;