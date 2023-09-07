var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Ev = /** @class */ (function () {
    function Ev(odaSayisi, pencereSayisi, kat, daireNo) {
        this.odaSayisi = odaSayisi;
        this.pencereSayisi = pencereSayisi;
        this.kat = kat;
        this.daireNo = daireNo;
    }
    Ev.prototype.yemekYe = function () {
        console.log(this.kat + ". kattaki " + this.daireNo + " nolu dairede yemek yenildi");
    };
    Ev.prototype.isikAc = function () {
        console.log("Işıklar açıldı.");
    };
    return Ev;
}());
var ev = new Ev(3, 6, 4, 12);
console.log(ev);
ev.yemekYe();
var Kisi = /** @class */ (function () {
    function Kisi() {
        this.isim = "Mert";
        this.soyisim = "Dede";
    }
    Object.defineProperty(Kisi.prototype, "ad", {
        get: function () {
            return "Sayın : " + this._ad;
        },
        set: function (ad) {
            this._ad = ad;
        },
        enumerable: false,
        configurable: true
    });
    Kisi.prototype.kaydet = function () {
        console.log("Kişi kaydedildi.");
    };
    return Kisi;
}());
var Musteri = /** @class */ (function (_super) {
    __extends(Musteri, _super);
    function Musteri() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Musteri.prototype.satisYap = function () {
        console.log(this.isim + " " + this.soyisim + " isimli müsteriye satış yapıldı.");
    };
    return Musteri;
}(Kisi));
var Personel = /** @class */ (function (_super) {
    __extends(Personel, _super);
    function Personel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Personel.prototype.maasOde = function () {
        console.log("Maaş ödendi.");
    };
    return Personel;
}(Kisi));
var musteri = new Musteri();
// musteri.isim //protected dışarıdan erişim izni yok
// console.log(musteri.soyisim)  //Public(default) heryerden erişim izni var
musteri.ad = "Mert";
console.log(musteri.ad);
musteri.ad = "Ozan";
console.log(musteri.ad);
musteri.kaydet();
musteri.satisYap();
var personel = new Personel();
personel.kaydet();
personel.maasOde();
