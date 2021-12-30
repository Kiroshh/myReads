import React from 'react';

import {CURRENTLY_READING, READ, TITLE, WANT_TO_READ} from "../constants/constants";
import BookShelf from "./BookShelf";
import {Link} from "react-router-dom";

function MyReads(props) {

    const {books, updateShelf} = props;
    return (<div className="list-books">
        <div className="list-books-title">
            <h1>{TITLE}</h1>
        </div>
        <div className="list-books-content">
            <div>
                <BookShelf books={books.filter(book => book.shelf === CURRENTLY_READING)}
                           title={"Currently Reading"} updateShelf={updateShelf}/>
                <BookShelf books={books.filter(book => book.shelf === WANT_TO_READ)}
                           title={"Want to Read"} updateShelf={updateShelf}/>
                <BookShelf books={books.filter(book => book.shelf === READ)}
                           title={"Read"}
                           updateShelf={updateShelf}/>
            </div>
        </div>
        <div className="open-search">
            <Link to="/search">Add a book</Link>
        </div>
    </div>)
}

export default MyReads;
