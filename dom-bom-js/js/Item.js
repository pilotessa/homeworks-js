'use strict';

function Item(title, active) {
    this.title = title;
    this.active = active;
    this.container = document.createElement('li');
    this.container.className = this.active ? 'todo-list-item list-group-item list-group-item-warning form-inline' : 'todo-list-item list-group-item list-group-item-success form-inline';
    this.container.innerHTML = this.getInnerHtml(this.title);
}

Item.prototype = {
    title: '',
    active: true,
    container: null,

    getNode: function () {
        return this.container;
    },

    getInnerHtml: function (title) {
        return '<label><input type="checkbox"> ' + title + '</label><button class="todo-list-item__delete btn btn-danger btn-sm pull-right" type="submit" title="Delete"><span class="glyphicon glyphicon-trash"></span></button><button class="todo-list-item__mark-as-active btn btn-primary btn-sm pull-right" type="submit" title="Mark as active"><span class="glyphicon glyphicon-repeat"></span></button><button class="todo-list-item__mark-as-complete btn btn-primary btn-sm pull-right" type="submit" title="Mark as complete"><span class="glyphicon glyphicon-ok"></span></button>';
    },

    setActive: function (active) {
        this.active = active;
        this.container.className = this.active ? 'todo-list-item list-group-item list-group-item-warning form-inline' : 'todo-list-item list-group-item list-group-item-success form-inline';
    }
};