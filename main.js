
// Filtras

// var filtras = document.getElementById("filtras");
var btn = document.getElementById("btn");
var sarasas = document. querySelectorAll(".card");
btn.addEventListener("click", function () {
    var item = document.getElementById("select").value;
    console.log (item);
    if (item == "vaisius") {
        darzove.setAttribute("class", "nematomas");
    } else {
        vaisius.setAttribute("class", "nematomas");
    }

})