var selamFonksiyonu = function selamVer() {
    console.log("Merhaba")
}
selamFonksiyonu()
var selamFonksiyonu2 = () => {
    console.log("Merhaba 2")
}
selamFonksiyonu2()
var selamFonksiyonu3 = (mesaj) => {
    console.log(mesaj)
}
selamFonksiyonu3("Merhaba 3")

var topla = (sayi1,sayi2) => {
    return sayi1+sayi2
}
let toplam = topla(15,15)
console.log(toplam);