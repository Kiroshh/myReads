import React from 'react';
import BookShelfChanger from "./BookShelfChanger";
import {update} from "../api/BooksAPI";

function Book(props) {

    let {book = {}, updateShelf} = props;
    const handleChange = (shelf) => {
        updateShelf(book, shelf);
        // Optimistic update
        update(book, shelf).then((response) => {
            console.log("Updated the books in server");
        })
    };
    return (<div className="book">
        <div className="book-top">
            <div className="book-cover" style={{
                width: 128,
                height: 192,
                backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : ''})`
            }}></div>
            <BookShelfChanger status={book.shelf} handleChange={handleChange}/>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors && book.authors.map((author) => `${author} \n`)}</div>
    </div>)
}

export default Book;
