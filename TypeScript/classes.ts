class Ev{
    public odaSayisi:number
    pencereSayisi:number
    kat:number
    private daireNo:number //sadece bu classta geçerli
    constructor(odaSayisi:number,pencereSayisi:number,kat:number,daireNo:number) {
        this.odaSayisi = odaSayisi
        this.pencereSayisi = pencereSayisi
        this.kat = kat
        this.daireNo = daireNo
    }
    yemekYe(){
        console.log(this.kat +". kattaki "+ this.daireNo + " nolu dairede yemek yenildi")
    }
    isikAc(){
        console.log("Işıklar açıldı.");
    }
}

let ev = new Ev(3,6,4,12)
console.log(ev);
ev.yemekYe()
class Kisi{
    private _ad:string

    get ad():string{
        return "Sayın : " + this._ad
    }
    set ad(ad:string){
        this._ad = ad
    }
    protected isim:string = "Mert"
    public soyisim:string = "Dede"
    kaydet(){
        console.log("Kişi kaydedildi.");
    }
}
class Musteri extends Kisi{
    satisYap(){
        console.log(this.isim +" "+ this.soyisim +" isimli müsteriye satış yapıldı.");
    }
}
class Personel extends Kisi{
    maasOde(){
        console.log("Maaş ödendi.");
    }
}
let musteri = new Musteri()
// musteri.isim //protected dışarıdan erişim izni yok
// console.log(musteri.soyisim)  //Public(default) heryerden erişim izni var
musteri.ad = "Mert"
console.log(musteri.ad)
musteri.kaydet()
musteri.satisYap()

let personel = new Personel()
personel.kaydet()
personel.maasOde()