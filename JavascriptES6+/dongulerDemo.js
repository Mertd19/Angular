var kullanicilar = [
    {username: "admin", sifre: "admin"},
    {username: "mert", sifre: "mert"}]
var tivitler = [
    {username: "admin", tivit: "Merhaba ilk tivit"},
    {username: "admin", tivit: "Merhaba ikinci tivit"},
    {username: "admin", tivit: "Merhaba ücüncü tivit"}]

var username = prompt("Username ?")
var sifre = prompt("Şifre ?")

function kullaniciVarmi(username,sifre){
    for (let index = 0; index < kullanicilar.length; index++) {
        if(kullanicilar[index].username == username && kullanicilar[index].sifre == sifre){
            return true;
        }
    }
    return false;
}
function kullaniciTivit(){
    for (let index = 0; index < tivitler.length; index++) {
        if(tivitler[index].username == username){
            console.log(tivitler[index].tivit);
        }
        else{
            console.log("Tivit bulunamadı.");
        }
    }
}
function giris() {
if (kullaniciVarmi(username,sifre)) {
    kullaniciTivit()
}
else{
    console.log("Kullanıcı adı veya Şifre hatalı.")
}
}
giris(username,sifre)