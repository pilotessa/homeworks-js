app.controller('PageController', function () {
    this.ORDER_PRICE_ASC = 'ORDER_PRICE_ASC';
    this.ORDER_PRICE_DESC = 'ORDER_PRICE_DESC';
    this.ORDER_NAME_ASC = 'ORDER_NAME_ASC';
    this.ORDER_NAME_DESC = 'ORDER_NAME_DESC';
    this.OUTPUT_TABLE = 'OUTPUT_TABLE';
    this.OUTPUT_LIST = 'OUTPUT_LIST';

    this.order = this.ORDER_PRICE_ASC;
    this.output = this.OUTPUT_TABLE;

    this.getOrderBy = function () {
        switch (this.order) {
            case this.ORDER_PRICE_ASC:
                return 'price';
            case this.ORDER_PRICE_DESC:
                return '-price';
            case this.ORDER_NAME_ASC:
                return 'name';
            case this.ORDER_NAME_DESC:
                return '-name';
            default:
                return 'price';
        }
    };

    this.getOutputClass = function () {
        switch (this.output) {
            case this.OUTPUT_TABLE:
                return 'row-table';
            case this.OUTPUT_LIST:
                return 'row-list';
        }
    }
});