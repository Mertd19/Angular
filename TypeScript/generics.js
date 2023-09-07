function deger(x) {
    return x;
}
function deger2(x) {
    return x;
}
var sayi = deger(10);
console.log(sayi);
var sehir = deger2("Ankara");
console.log(sehir);
function deger3(x) {
    return x;
}
var sayi2 = deger3(2);
console.log(sayi2);
var sehir2 = deger3("Ankara");
console.log(sehir2);
var GenericClass = /** @class */ (function () {
    function GenericClass() {
    }
    GenericClass.prototype.fonksiyon = function (parametre) {
        return parametre;
    };
    return GenericClass;
}());
var sinif = new GenericClass();
sinif.fonksiyon("Ankara");
var sinif2 = new GenericClass();
sinif2.fonksiyon(25);
