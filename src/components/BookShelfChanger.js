import React from 'react';
import {CURRENTLY_READING, MOVE, NONE, READ, WANT_TO_READ} from "../constants/constants";

function BookShelfChanger(props) {
    const {status = NONE, handleChange} = props;

    const onChange = (event) => {
        handleChange(event.target.value)
    }
    return (
        <div className="book-shelf-changer">
            <select value={status} onChange={onChange}>
                <option value={MOVE} disabled>Move to...</option>
                <option value={CURRENTLY_READING}>Currently Reading</option>
                <option value={WANT_TO_READ}>Want to Read</option>
                <option value={READ}>Read</option>
                <option value={NONE}>None</option>
            </select>
        </div>
    )
}

export default BookShelfChanger;
