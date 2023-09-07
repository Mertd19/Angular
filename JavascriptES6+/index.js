var kullanicilar = [{
        username: "admin",
        sifre: "admin"
    },
    {
        username: "mert",
        sifre: "mert"
    }
]

var tivitler = [{
        username: "admin",
        tivit: "Merhaba ilk tivit"
    },
    {
        username: "admin",
        tivit: "Merhaba ikinci tivit"
    },
    {
        username: "admin",
        tivit: "Merhaba ücüncü tivit"
    }
]

var username = prompt("Username ?")
var sifre = prompt("Şifre ?")

function giris() {
    if ((username == kullanicilar[0].username && sifre == kullanicilar[0].sifre)||
        (username == kullanicilar[1].username && sifre == kullanicilar[1].sifre)) {
            console.log(tivitler)
    }
    else{
        console.log("Kullanıcı adı veya Şifre hatalı.")
    }
}
giris(username,sifre)