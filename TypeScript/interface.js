var Product2 = /** @class */ (function () {
    function Product2() {
    }
    return Product2;
}());
function save(product) {
    console.log(product.name + " kaydedildi.");
}
function save2(product2) {
    console.log(product2.name + " kaydedildi.");
}
save({ id: 1, name: "Laptop", unitPrice: 19999.99 }); //Tüm değerler girilmek zorundaysa interface
var mouse = new Product2();
mouse.name = "ATech";
save2(mouse); //Tüm değerler girilmek zorunda değilse class
var CustomerService = /** @class */ (function () {
    function CustomerService() {
    }
    CustomerService.prototype.save = function () {
    };
    return CustomerService;
}());
