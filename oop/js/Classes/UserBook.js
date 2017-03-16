'use strict';

function UserBook(book) {
    this.book = book || null;
    this.assignedAt = Date.now();
}

UserBook.prototype = {
    book: null,
    assignedAt: null,
    startedReadingAt: null,
    finishedReadingAt: null
};