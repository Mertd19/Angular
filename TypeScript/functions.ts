function topla(x,y){
    return x+y
}
function topla2(x:number,y:number):number{
    return x+y
}
let topla3 = function(x:number,y:number):number{
    return x+y
}

console.log(topla(9,10))
console.log("Çorum",19)
console.log(topla2(9,10))
console.log(topla3(9,10))

function topla4(x:number,y:number=10):number{
    return x+y
}
console.log(topla4(9))

function topla5(x:number,y?:number):number{   //x?:number dediğimizde topla5(3) burda x mi y mi anlamıyor Defaultlar hep sonda olmalı
    if(y){
        return x+y   //y tanımlı ise toplamı değilse x değerini dönderir
    }
    return x
    // return x+y    //NaN dönderir
}
console.log(topla5(9))
console.log(topla5(9,10))

//Rest
function davetEt(ilkDavetli:string,...digerleri:string[]):string{
    return ilkDavetli + "," + digerleri.join(",")
}
console.log(davetEt("Mert Dede","Ozan","Rıza","Halil","Muharrem","Osman","Ali"));

function davetEt2(...digerleri:string[]):string{
    return digerleri.join(",")
}
console.log(davetEt("Mert Dede","Ozan","Rıza","Halil","Muharrem","Osman","Ali"));