import React from 'react';
import {Well, FormControl, Button} from 'react-bootstrap';

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

            <Well>
                <FormControl
                    type="text"
                    placeholder="Search Books..."
                    onChange={this.handleInputChange}
                />
                <br />
                <Button onClick={this.handleStartSearch}> Search </Button>
            </Well>
        )
    }
});

export default SearchInput;