import React from 'react';
import {Grid, Row, Col, Accordion, Panel, ListGroup, ListGroupItem} from 'react-bootstrap';
const Books = React.createClass({

    render () {
        var bookItems;
        var books = this.props.books;
        if (books) {
            bookItems = books.map(function (book) {
                var id = book.id;
                var title = book.volumeInfo.title;
                var authors = book.volumeInfo.authors;
                var categories = book.volumeInfo.categories;
                var thumbnail = book.volumeInfo.imageLinks.thumbnail;
                var publisher = book.volumeInfo.publisher;
                var description = book.volumeInfo.description;
                var pageCount = book.volumeInfo.pageCount;
                var publishedDate = book.volumeInfo.publishedDate;
                var averageRating = book.volumeInfo.averageRating;
                var buyLink = book.saleInfo.buyLink;

                return (
                    <Panel key={id} header={title} eventKey={id}>
                        <Grid>
                            <Row>
                                <Col xs={3} md={3} lg={3}>
                                    <img src={thumbnail} role="presentation"/>
                                </Col>

                                <Col xs={8} md={8} lg={8}>
                                    <ListGroup>
                                        <ListGroupItem>
                                            <strong>Categories:</strong> {categories}
                                        </ListGroupItem>

                                        <ListGroupItem>
                                            <strong>Authors:</strong> {authors}
                                        </ListGroupItem>

                                        <ListGroupItem>
                                            <strong>Publisher:</strong> {publisher}
                                        </ListGroupItem>

                                        <ListGroupItem>
                                            <strong>Published Date:</strong> {publishedDate}
                                        </ListGroupItem>

                                        <ListGroupItem>
                                            <strong>Pages:</strong> {pageCount}
                                        </ListGroupItem>

                                        <ListGroupItem>
                                            <strong>Rating:</strong> <span className="rating">{averageRating}</span>
                                        </ListGroupItem>
                                    </ListGroup>
                                </Col>
                            </Row>

                            <Row Col xs={11} md={11} lg={11}>
                                <h3>Book Description</h3>
                            </Row>


                        </Grid>
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