'use strict';

var role = new Role(
    'admin',
    [
        new Capability('bookAdd'),
        new Capability('bookUpdate'),
        new Capability('bookDelete'),
        new Capability('bookAssign'),
        new Capability('bookRead'),
        new Capability('bookAskForPublishing'),
        new Capability('bookModerate'),
        new Capability('bookPublish'),
        new Capability('bookRate'),
        new Capability('userAdd'),
        new Capability('userUpdate'),
        new Capability('userDelete'),
        new Capability('userAssignRole')
    ]
);

var book = new Book({
    isbn: '978-1-93-398869-6',
    title: 'Secrets of the JavaScript Ninja',
    authors: [
        new Author('John', 'Resig'),
        new Author('Bear', 'Bibeault')
    ],
    genres: [
        new Genre('Programming')
    ]
});

var user = new User({
    login: 'admin',
    firstName: 'John',
    lastName: 'Doe',
    status: USER_STATUS_ACTIVE,
    role: role
});

var userBook = user.assign(book);
user.startReading(userBook);

console.log('Role sample: ', role);
console.log(role.name + ' can assign books: ', role.can('bookAssign'));
console.log('Book sample: ', book);
console.log('User sample: ', user);
console.log('User book sample: ', userBook);