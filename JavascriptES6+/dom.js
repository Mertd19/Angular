// document.getElementById("bio").innerHTML="Mert Dede : 1995";

// var intro1 = document.getElementById("intro1");
// var mesaj = document.getElementById("mesaj");

// mesaj.innerHTML = intro1.innerHTML;  //intro içeriğini mesaj içeriğine yazdırma

// var tumListeler = document.getElementsByTagName("ul");
// var sehirler = tumListeler[0];

// tumElemanlar = sehirler.getElementsByTagName("li");
// for (let index = 0; index < tumElemanlar.length; index++) {
//     alert(tumElemanlar[index].innerHTML)
// }

// var classElemanlari = document.getElementsByClassName("intro1");
// alert(classElemanlari[0].innerHTML);
// alert(classElemanlari.length);

// var queryElemanlari = document.querySelectorAll("p.intro1");
// alert(queryElemanlari.length);

// var isimElemanlari = document.getElementsByName("musteriAdi");
// alert(isimElemanlari[0].value);

// var mert = document.getElementById("mert").addEventListener("mouseover",rengiDegistir);
// function rengiDegistir(){
//     document.getElementById("div1").style.color = "red";
//     document.getElementById("div1").style.backgroundColor = "yellow";
//     var isimElemanlari = document.getElementsByName("musteriAdi");
//     isimElemanlari[0].value = "Dede Mert";
// }

// var node = document.getElementById("agac");
// alert(node.childNodes[0].nodeValue)

var baslik = document.createElement("h2");
var node = document.createTextNode("Merhaba JS");
baslik.appendChild(node);
var div1 = document.getElementById("div1");
var p2 = document.getElementById("p2");
div1.insertBefore(baslik,p2);

alert("p2 siliniyor");
div1.removeChild(p2);

var p1 = document.getElementById("p1");
div1.replaceChild(baslik,p1)


