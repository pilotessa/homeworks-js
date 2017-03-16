'use strict';

var GENDER_MALE = 1;
var GENDER_FEMALE = 2;

var USER_STATUS_NEW = 1;
var USER_STATUS_ACTIVE = 2;
var USER_STATUS_BANNED = 3;
var USER_STATUS_DELETED = 4;

function User(userData) {
    for (var i in userData) {
        this[i] = userData[i];
    }
}

User.prototype = {
    login: '',
    pass: '',
    firstName: '',
    lastName: '',
    email: '',
    gender: null,
    birthdate: null,
    books: [],
    status: USER_STATUS_NEW,
    role: null,
    subscribedAt: null,
    bannedTill: null,

    can: function (action) {
        return this.role ? this.role.can(action) : false;
    },

    addBook: function (bookData) {
        if (this.can('bookAdd')) {
            var book = new Book(bookData);

            book.addedAt = Date.now();
            book.addedBy = this;

            return book;
        }
    },

    updateBook: function (book, bookData) {
        if (this.can('bookUpdate')) {
            for (var i in bookData) {
                book[i] = bookData[i];
            }

            return book;
        }
    },

    deleteBook: function (book) {
        if (this.can('bookDelete')) {
            book.status = BOOK_STATUS_DELETED;
        }
    },

    assign: function (book) {
        if (this.can('bookAssign')) {
            var userBook = new UserBook(book);

            this.books.push(userBook);

            return userBook;
        }
    },

    startReading: function (userBook) {
        if (this.can('bookRead') && this.books.includes(userBook)) {
            userBook.startedReadingAt = Date.now();
        }
    },

    finishReading: function (userBook) {
        if (this.can('bookRead') && this.books.includes(userBook)) {
            userBook.finishedReadingAt = Date.now();
        }
    },

    askForPublishing: function(book) {
        if (this.can('bookAskForPublishing') && book.addedAt === this) {
            book.status = BOOK_STATUS_IN_PROGRESS;
        }
    },

    approve: function(book) {
        if (this.can('bookModerate') && book.addedAt !== this) {
            book.status = BOOK_STATUS_APPROVED;
        }
    },

    reject: function(book) {
        if (this.can('bookModerate') && book.addedAt !== this) {
            book.status = BOOK_STATUS_REJECTED;
        }
    },

    publish: function(book) {
        if (this.can('bookPublish')) {
            book.status = BOOK_STATUS_PUBLISHED;
            book.publishedAt = Date.now();
        }
    },

    rate: function(book, grade) {
        if (this.can('bookRate')) {
            var rating = new Rating(grade, book, this);

            rating.ratedAt = Date.now();

            return rating;
        }
    },

    addUser: function (userData) {
        if (this.can('userAdd')) {
            var user = new User(userData);

            user.subscribedAt = Date.now();

            return user;
        }
    },

    updateUser: function (user, userData) {
        if (this.can('userUpdate')) {
            for (var i in userData) {
                user[i] = userData[i];
            }

            return user;
        }
    },

    deleteUser: function (user) {
        if (this.can('userDelete')) {
            user.status = USER_STATUS_DELETED;
        }
    },

    banUser: function (user, bannedTill) {
        if (this.can('userBan')) {
            user.status = USER_STATUS_BANNED;
            user.bannedTill = bannedTill;
        }
    },

    assignRole: function (user, role) {
        if (this.can('userAssignRole')) {
            user.role = role;
        }
    }
};