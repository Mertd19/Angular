class Personel{
    constructor(ad,soyad){
        this.ad = ad
        this.soyad = soyad
    }
    kaydet(){
        console.log("Personel kaydedildi.İsmi : " + this.ad + " " + this.soyad)
        console.log(`Personel kaydedildi : ${this.ad} ${this.soyad}`)
    }
}
// Personel.kaydet()  //Nesne oluşturmadığımız için hata verir .
const personel = new Personel("Mert","Dede")
personel.kaydet()
personel.ad = "Ozan"
personel.kaydet()
console.log(personel.ad);