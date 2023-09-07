function topla(x, y) {
    return x + y;
}
function topla2(x, y) {
    return x + y;
}
var topla3 = function (x, y) {
    return x + y;
};
console.log(topla(9, 10));
console.log("Çorum", 19);
console.log(topla2(9, 10));
console.log(topla3(9, 10));
function topla4(x, y) {
    if (y === void 0) { y = 10; }
    return x + y;
}
console.log(topla4(9));
function topla5(x, y) {
    if (y) {
        return x + y; //y tanımlı ise toplamı değilse x değerini dönderir
    }
    return x;
    // return x+y    //NaN dönderir
}
console.log(topla5(9));
console.log(topla5(9, 10));
//Rest
function davetEt(ilkDavetli) {
    var digerleri = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        digerleri[_i - 1] = arguments[_i];
    }
    return ilkDavetli + "," + digerleri.join(",");
}
console.log(davetEt("Mert Dede", "Ozan", "Rıza", "Halil", "Muharrem", "Osman", "Ali"));
function davetEt2() {
    var digerleri = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        digerleri[_i] = arguments[_i];
    }
    return digerleri.join(",");
}
console.log(davetEt("Mert Dede", "Ozan", "Rıza", "Halil", "Muharrem", "Osman", "Ali"));
