import React from 'react';
import './App.css';
import {Grid, Col, Row} from 'react-bootstrap';
import axios from 'axios';
import Books from './Components/Books';
import Header from './Components/Header';

const App = React.createClass({
    getInitialState() {
        return {
            books: [],
            text: "Harry Potter"
        }
    },

    getBooks() {
        var self;
        self = this;
        axios.get('https://www.googleapis.com/books/v1/volumes/?q=' + this.state.text)
            .then(function (response) {
                // console.log(response.data);
                self.setState({
                    books: response.data.items
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    },

    componentWillMount () {
        this.getBooks();
    },

    render () {
        console.log(this.state);
        return (
            <div className="App">
                <Header/>
                <Grid>
                    <Row>
                        <Col xs={12} md={12} lg={12}>
                            <Books books={this.state.books}/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
});

export default App;


