import React from 'react'
import './App.css'
import {getAll} from "./api/BooksAPI";
import {Route, Routes} from "react-router-dom";
import MyReads from "./components/MyReads";
import SearchBooks from "./components/SearchBooks";

class BooksApp extends React.Component {
    state = {
        books: []
    };

    componentDidMount() {
        getAll().then((books) => this.setState({
            books: books
        }));
    };

    updateShelf = (selectedBook, shelf) => {
        let books = [...this.state.books];
        let bookIndex = books.findIndex(book => book.id === selectedBook.id);
        if (bookIndex < 0) {
            selectedBook.shelf = shelf;
            books = [...this.state.books, selectedBook]
        } else {
            let book = books[bookIndex];
            book.shelf = shelf;
            books[bookIndex] = book
        }
        this.setState({
            books
        })
    }

    render() {
        return (
            <div className="app">
                <Routes>
                    <Route exact path='/' element={<MyReads books={this.state.books} updateShelf={this.updateShelf}/>}/>
                    <Route path='/search'
                           element={<SearchBooks books={this.state.books} updateShelf={this.updateShelf}/>}/>
                </Routes>
            </div>
        )
    }
}

export default BooksApp
