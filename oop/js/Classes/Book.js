'use strict';

var BOOK_STATUS_NEW = 1;
var BOOK_STATUS_IN_PROGRESS = 2;
var BOOK_STATUS_APPROVED = 3;
var BOOK_STATUS_REJECTED = 4;
var BOOK_STATUS_PUBLISHED = 5;
var BOOK_STATUS_DELETED = 6;

function Book(bookData) {
    for (var i in bookData) {
        this[i] = bookData[i];
    }
}

Book.prototype = {
    isbn: '',
    cover: '',
    title: '',
    annotation: '',
    contents: '',
    numberOfPages: 0,
    status: BOOK_STATUS_NEW,
    addedAt: null,
    addedBy: null,
    publishedAt: null,
    authors: [],
    genres: [],

    getRating: function () {
    }
};