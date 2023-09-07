interface Product{
    id:number
    name:string
    unitPrice:number
}
class Product2{
    id:number
    name:string
    unitPrice:number
}

function save(product:Product){
    console.log(product.name + " kaydedildi.")
}
function save2(product2:Product2){
    console.log(product2.name + " kaydedildi.")
}

save({id:1,name:"Laptop",unitPrice:19999.99})   //Tüm değerler girilmek zorundaysa interface

let mouse = new Product2()
mouse.name = "ATech"

save2(mouse)   //Tüm değerler girilmek zorunda değilse class

interface IPersonService{
    save()
}
class CustomerService implements IPersonService{
    save() {

    }
}