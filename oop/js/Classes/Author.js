'use strict';

function Author(firstName, lastName, info) {
    this.firstName = firstName || '';
    this.lastName = lastName || '';
    this.info = info || '';
}

Author.prototype = {
    firstName: '',
    lastName: '',
    info: '',

    getBooks: function () {
    }
};