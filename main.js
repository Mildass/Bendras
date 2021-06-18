
// Filtras

// var filtras = document.getElementById("filtras");
var btn = document.getElementsByClassName("navbar-toggler");

btn.addEventListener("change", function () {
    var darzove = document.getElementById("darzove");
    var vaisius = document.getElementById("vaisius");
    var item = document.getElementById("select").value;
    
    if (item == vaisius) {
        darzove.setAttribute("class", "nematomas");
    } else {
        vaisius.setAttribute("class", "nematomas");
    }

})