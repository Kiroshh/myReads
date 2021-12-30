import React from 'react';
import Book from "./Book";

function BookShelf(props) {

    const {title, books = [], updateShelf} = props;

    return (<div className="bookshelf">
            {title ? <h2 className="bookshelf-title">{title}</h2> : null}

            {books.length > 0 ? <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map((book) => (
                        <li key={book.id}>
                            <Book book={book} updateShelf={updateShelf}></Book>
                        </li>
                    ))}
                </ol>
            </div> : null}

        </div>
    );
}

export default BookShelf;
