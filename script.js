var tus = document.getElementsByClassName("sayiButton");
var operator = document.getElementsByClassName("operatorButton");
var sil = document.getElementById("sil");
var goruntu = document.getElementById("goruntu");
var esittir = document.getElementById("esittir");
var sayi1 = 0;
var sayi2 = 0;
var islem, hesap, gelenSayi;

function tusBul() {
    var sayi = this.getAttribute("data-num");
    goruntu.innerHTML += sayi;
}

function hesapla() {
    var hangiOperator = this.getAttribute("data-islem");
    sayi1 = parseInt(goruntu.innerHTML);
    goruntu.innerHTML = "";
    switch (hangiOperator) {
        case "+":
            islem = "+";
            break;
        case "-":
            islem = "-";
            break;
        case "*":
            islem = "*";
            break;
        case "/":
            islem = "/";
            break;
        default:
            break;
    }
}

function sonucHesapla() {
    sayi2 = parseInt(goruntu.innerHTML);
    switch (islem) {
        case "+":
            hesap = sayi1 + sayi2;
            goruntu.innerHTML = hesap;
            break;
        case "-":
            hesap = sayi1 - sayi2;
            goruntu.innerHTML = hesap;
            break;
        case "*":
            hesap = sayi1 * sayi2;
            goruntu.innerHTML = hesap;
            break;
        case "/":
            hesap = sayi1 / sayi2;
            goruntu.innerHTML = hesap;
            break;
        default:
            break;
    }
}

function temizle() {
    goruntu.innerHTML = "";
    sayi1 = 0;
    sayi2 = 0;
    islem = "";
}

for (var i = 0; i < tus.length; i++) {
    tus[i].onclick = tusBul;
}

for (var j = 0; j < operator.length; j++) {
    operator[j].onclick = hesapla;
}

esittir.onclick = sonucHesapla;
sil.onclick = temizle;