'use strict';

function Genre(name) {
    this.name = name || '';
}

Genre.prototype = {
    name: '',

    getBooks: function () {
    }
};