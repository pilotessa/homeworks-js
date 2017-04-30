'use strict';

function List(id) {
    var self = this;
    var itemNode;

    this.id = id;
    this.container = document.getElementById(id);
    if (this.container) {
        this.container.className += ' list-group todo-list';

        this.createHeader();
        this.createFooter();
        this.readData();

        if (window.location.hash) {
            this.filter(window.location.hash.replace('#', ''));
        }

        this.container.getElementsByClassName('todo-list-new-item-title')[0].addEventListener(
            'keyup',
            function () {
                if (event.keyCode == 13) {
                    self.addItem(this.value);
                }
            },
            false
        );

        this.container.getElementsByClassName('todo-list-item__add')[0].addEventListener(
            'click',
            function () {
                self.addItem(self.container.getElementsByClassName('todo-list-new-item-title')[0].value);
            },
            false
        );

        this.container.getElementsByClassName('todo-list-mass-update')[0].addEventListener(
            'change',
            function () {
                self.doMassUpdate(this.value);
            },
            false
        );

        this.container.getElementsByClassName('todo-list-filter')[0].addEventListener(
            'change',
            function () {
                self.filter(this.value);
            },
            false
        );

        this.container.addEventListener(
            'click',
            function (event) {
                if (event.target.className.indexOf('todo-list-item__mark-as-complete') + 1 || event.target.parentNode.className.indexOf('todo-list-item__mark-as-complete') + 1) {
                    if (event.target.parentNode.className.indexOf('todo-list-item ') + 1) {
                        itemNode = event.target.parentNode;
                    } else {
                        itemNode = event.target.parentNode.parentNode;
                    }

                    self.setItemActive(itemNode, false);
                } else if (event.target.className.indexOf('todo-list-item__mark-as-active') + 1 || event.target.parentNode.className.indexOf('todo-list-item__mark-as-active') + 1) {
                    if (event.target.parentNode.className.indexOf('todo-list-item ') + 1) {
                        itemNode = event.target.parentNode;
                    } else {
                        itemNode = event.target.parentNode.parentNode;
                    }

                    self.setItemActive(itemNode, true);
                } else if (event.target.className.indexOf('todo-list-item__delete') + 1 || event.target.parentNode.className.indexOf('todo-list-item__delete') + 1) {
                    if (event.target.parentNode.className.indexOf('todo-list-item ') + 1) {
                        itemNode = event.target.parentNode;
                    } else {
                        itemNode = event.target.parentNode.parentNode;
                    }

                    self.deleteItem(itemNode);
                }
            },
            false
        );
    }
}

List.prototype = {
    id: '',
    container: null,
    header: null,
    footer: null,
    items: [],

    createHeader: function () {
        if (!this.header) {
            this.header = document.createElement('li');
            this.header.className = 'todo-list-header list-group-item active form-inline';
            this.header.innerHTML = this.getHeaderHtml();
            this.container.appendChild(this.header);
        }
    },

    getHeaderHtml: function () {
        return '<input type="text" class="todo-list-new-item-title form-control input-sm" placeholder="What needs to be done?"><button class="todo-list-item__add btn btn-success btn-sm pull-right" type="submit" title="Add"><span class="glyphicon glyphicon-plus"></span></button>';
    },

    createFooter: function () {
        if (!this.footer) {
            this.footer = document.createElement('li');
            this.footer.className = 'todo-list-footer list-group-item active form-inline';
            this.footer.innerHTML = this.getFooterHtml();
            this.container.appendChild(this.footer);
        }
    },

    getFooterHtml: function () {
        return '<label>With selected:</label> <select class="todo-list-mass-update form-control input-sm"><option value="">Choose action</option><option value="delete">Delete</option><option value="complete">Mark as complete</option><option value="active">Mark as active</option></select> <select class="todo-list-filter form-control input-sm"><option value="all">Show all</option><option value="active">Show active</option><option value="complete">Show complete</option></select>';
    },

    addItem: function (title, active) {
        if (title) {
            active = active === undefined ? true : active;
            var item = new Item(title, active),
                itemNode = item.getNode(),
                index = (this.items.push(item) - 1).toString();

            itemNode.setAttribute('data-index', index);
            this.container.insertBefore(itemNode, this.footer);
            this.writeData();

            this.container.getElementsByClassName('todo-list-new-item-title')[0].value = '';
        }
    },

    setItemActive: function (itemNode, active) {
        var index = itemNode.getAttribute('data-index'),
            item = this.items[index];

        if (item) {
            item.setActive(active);
            this.writeData();
        }
    },

    deleteItem: function (itemNode) {
        var index = itemNode.getAttribute('data-index'),
            item = this.items[index];

        if (item) {
            delete this.items[index];
            this.container.removeChild(itemNode);
            this.writeData();
        }
    },

    writeData: function () {
        var localStorageId = 'todo-list-' + this.id,
            itemsFiltered = this.items.filter(function (value) {
                return value;
            });

        localStorage.setItem(localStorageId, JSON.stringify(itemsFiltered));
    },

    readData: function () {
        var localStorageId = 'todo-list-' + this.id,
            itemsData = JSON.parse(localStorage.getItem(localStorageId));

        if (itemsData) {
            for (var i in itemsData) {
                var itemData = itemsData[i],
                    item = new Item(itemData.title, itemData.active),
                    itemNode = item.getNode(),
                    index = (this.items.push(item) - 1).toString();

                itemNode.setAttribute('data-index', index);
                this.container.insertBefore(itemNode, this.footer);
            }
        }
    },

    filter: function (filter) {
        this.container.className = this.container.className.replace(/(\stodo-list-filter-active)?(\stodo-list-filter-complete)?/g, '');
        window.location.hash = '#' + filter;

        if (filter == 'active' || filter == 'complete') {
            this.container.className += ' todo-list-filter-' + filter;
        }

        this.container.getElementsByClassName('todo-list-filter')[0].value = filter;
    },

    doMassUpdate: function (action) {
        if (action) {
            var checkboxes = this.container.querySelectorAll('input:checked');

            for (var i = 0; i < checkboxes.length; i++) {
                var checkbox = checkboxes[i],
                    itemNode = checkbox.parentNode.parentNode;

                switch (action) {
                    case 'delete':
                        this.deleteItem(itemNode);
                        break;
                    case 'complete':
                        this.setItemActive(itemNode, false);
                        break;
                    case 'active':
                        this.setItemActive(itemNode, true);
                        break;
                }
            }

            this.container.getElementsByClassName('todo-list-mass-update')[0].value = '';
        }
    }
};