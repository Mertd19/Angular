function selamVer(isim) {
    return "Merhaba " + isim;
}
var mesaj = selamVer("Mert");
console.log(mesaj);
var sayi;
sayi = 10;
console.log(sayi);
sayi = 10.4;
console.log(sayi);
var sehir = "Çorum";
console.log(sehir);
sehir = "Ankara";
console.log(sehir);
sehir = "İstanbul";
console.log(sehir);
var dogruMu = true;
console.log(dogruMu);
dogruMu = false;
console.log(dogruMu);
var sayilar = [1, 2, 3, 4];
console.log(sayilar);
console.log(sayilar[1]);
var sayilar2 = [1, 2, 3, 4];
console.log(sayilar2);
console.log(sayilar2[2]);
var dizi = [6, "Ankara"];
console.log(dizi);
var Renk;
(function (Renk) {
    Renk[Renk["Kirmizi"] = 1] = "Kirmizi";
    Renk[Renk["Sari"] = 2] = "Sari";
    Renk[Renk["Mavi"] = 3] = "Mavi";
})(Renk || (Renk = {}));
var renk = Renk.Kirmizi;
console.log(renk);
var notSure = "Ankara";
console.log(notSure);
notSure = 2;
console.log(notSure);
notSure = {};
console.log(notSure);
var deger = undefined;
console.log(deger);
function selamVer2() {
    console.log("Merhaba 2");
    return 5;
}
selamVer2();
function selamVer3() {
    console.log("Merhaba 3");
    // return 5; //Void olduğu için return kullanılmaz
}
selamVer3();
