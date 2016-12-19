import React from 'react';
import {Well, FormControl}

const SearchInput = React.createClass({
    handleInputChange (e) {
        var text = e.target.value;
        console.log(text);
        this.props.inputChange(text);
    },

    handleStartSearch () {
        this.props.startSearch(this.props.text);
        this.refs.searchInput.value = "";
    },
    render () {
        // console.log(this.refs.seachInput);
        return (
            <div>
                <input ref="searchInput" className="text-input" type="text" onChange={this.handleInputChange}/>
                <button onClick={this.handleStartSearch}>Search</button>
            </div>
        )
    }
});

export default SearchInput;