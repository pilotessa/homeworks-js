app.controller('PageController', function () {
    this.ORDER_PRICE_ASC = 'ORDER_PRICE_ASC';
    this.ORDER_PRICE_DESC = 'ORDER_PRICE_DESC';
    this.ORDER_NAME_ASC = 'ORDER_NAME_ASC';
    this.ORDER_NAME_DESC = 'ORDER_NAME_DESC';
    this.OUTPUT_TABLE = 'OUTPUT_TABLE';
    this.OUTPUT_LIST = 'OUTPUT_LIST';

    this.order = this.ORDER_PRICE_ASC;
    this.output = this.OUTPUT_TABLE;
});