const dizi = [1, 2, 3, 4, 5]
const kareDizi = []

dizi.forEach(sayi => {
    console.log("sayi : "+ sayi);
})

dizi.forEach(sayi => {
    kareDizi.push(sayi * sayi)
})
console.log("kareDizi : "+kareDizi);

// Map
// const mapDizi = dizi.map(sayi => {sayi * 3}) //Undefined dönderir
const mapDizi = dizi.map(sayi => sayi * 3) //Map kullanıyorsak tek satırda yazmamız gerekiyor
console.log("MapDizi : "+mapDizi);

// Filter
const filtreliDizi = dizi.filter(sayi => sayi % 2 == 0)
console.log("FiltreliDizi (Çift sayılar) : "+filtreliDizi)
const filtreDizi = dizi.filter(sayi => sayi % 2 == 1)
console.log("FiltreliDizi (Tek sayılar) : "+filtreDizi)

// Reduce
const toplam = dizi.reduce((acc,sayi) =>{
    return acc +sayi
},20)   // dizi elemanları toplamı + 20
console.log(toplam);