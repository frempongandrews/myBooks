import React from 'react';
import {Grid, Row, Col, Accordion, Panel} from 'react-bootstrap';
const Books = React.createClass({

    render () {
        var bookItems;
        var books = this.props.books;
        if (books) {
            bookItems = books.map(function (book, i) {
                var id = book.id;
                var title = book.volumeInfo.title;
                return (
                    <Panel key={id} header={title} eventKey={id}>
                        test
                    </Panel>
                )
            })
        }
        return (
            <div>
                <Accordion>
                    {bookItems}
                </Accordion>
            </div>
        )
    }
});

export default Books;