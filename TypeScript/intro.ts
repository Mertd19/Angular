function selamVer(isim:string){
    return "Merhaba " + isim
}
let mesaj = selamVer("Mert")
console.log(mesaj)

let sayi:number
sayi = 10
console.log(sayi)
sayi = 10.4
console.log(sayi)

let sehir:string = "Çorum"
console.log(sehir)
sehir = "Ankara"
console.log(sehir)
sehir = "İstanbul"
console.log(sehir)

let dogruMu:boolean = true
console.log(dogruMu)
dogruMu = false
console.log(dogruMu)

let sayilar:Number[] = [1,2,3,4]
console.log(sayilar);
console.log(sayilar[1]);

let sayilar2: Array<number> = [1,2,3,4]
console.log(sayilar2)
console.log(sayilar2[2])

let dizi:[number,string] = [6,"Ankara"]
console.log(dizi)

enum Renk {Kirmizi=1,Sari,Mavi}
let renk:Renk = Renk.Kirmizi
console.log(renk)

let notSure: any = "Ankara"
console.log(notSure)
notSure = 2
console.log(notSure)
notSure =  {}
console.log(notSure)

let deger: void = undefined
console.log(deger)

function selamVer2(){
    console.log("Merhaba 2")
    return 5;
}
selamVer2()
function selamVer3():void{
    console.log("Merhaba 3")
    // return 5; //Void olduğu için return kullanılmaz
}
selamVer3()