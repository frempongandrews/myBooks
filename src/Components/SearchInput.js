import React from 'react';
import {Well, Button} from 'react-bootstrap';

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
        // console.log(this.props);
        //setting placeholder value
        var placeholderText;
        if (this.props.text === "") {
            placeholderText = "Search Books..."
        } else {
            placeholderText = this.props.text;
        }

        return (

            <Well>
                <input
                    className="input-text"
                    type="text"
                    placeholder={placeholderText}
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