import React, {useState} from 'react';
import {Link} from "react-router-dom";
import BookShelf from "./BookShelf";
import {search} from "../api/BooksAPI";


function SearchBooks(props) {
    const {books = [], updateShelf} = props;

    const [results, setResults] = useState([]);

    function doSearch(enteredText) {
        search(enteredText).then((books) => {
            setResults(books);
        })
    }

    const onChange = (event) => {
        //TODO: Use Debouncing and throttling to optimize this
        const enteredText = event.target.value;
        if (enteredText) {
            doSearch(enteredText);
        } else {
            setResults([]);
        }

    }

    //set the shelf property for the results if available
    const updatedResults = results.length > 0 ? results.map((element) => {
        const match = books.find(book => book.id === element.id);
        if (match) {
            element = match;
        }
        return element;
    }) : [];


    return (<div className="search-books">
        <div className="search-books-bar">
            <Link to="/" className="close-search">Close</Link>

            <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" onChange={onChange}/>
            </div>
        </div>
        <div className="search-books-results">
            <BookShelf books={updatedResults} updateShelf={updateShelf}/>
        </div>
    </div>)
}

export default SearchBooks;
