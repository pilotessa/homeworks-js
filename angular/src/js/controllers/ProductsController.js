var random = {
    name: function () {
        return chance.word();
    },
    price: function () {
        return chance.floating({
            min:   3,
            max:   80,
            fixed: chance.natural({ max: 2 })
        });
    },
    description: function () {
        return chance.sentence({
            words: chance.natural({ min: 5, max: 10 })
        });
    },
    image: function () {
        return 'http://lorempixel.com/768/768/food/' + chance.natural({ min: 1, max: 10 });
    },
    stock: function () {
        return chance.bool();
    }
};

app.controller('ProductsController', function () {
    this.products = (new Array(12))
        .join('a')
        .split('a')
        .map(v => {
            return {
                name:        random.name(),
                price:       random.price(),
                description: random.description(),
                image:       random.image(),
                stock:       random.stock()
            };
        });
});