var sayi = 10;
var sehir = "Ankara";
sayi = 11;
sehir = "İstanbul"
var sehir = "Adana"

let il = "Ankara"
il = "İstanbul"
// let il = "Adana" //Daha önce tanımlı olduğu için hata verir

function mesajVer() {
    var isim = "Mert"
    console.log("Şehir : " + sehir)
    console.log("İsim : " + isim) //İçerde tanımlandığı için dışardan erişim sağlanmaz
}
mesajVer()
// console.log("İsim : " + isim)   //İçerde tanımlandığı için dışardan erişim sağlanmaz

for (var i = 1; i < 10; i++){

}
console.log(i)  //For döngüsünün sonundaki "i" değerini yazar

const soyad = "Dede"
// soyad = "DEDE" //Const değer tiplide değiştirilemez olduğu için hata verir 
console.log(soyad);

const sehirler = ["Ankara","İstanbul"]
sehirler.push("İzmir") //Const referans tiplide değişikliğe izin verir 
// sehirler = ["Bursa","Muş"]  //Yeniden atama yapmaya çalışırsak hata verir
console.log(sehirler) 