
// Filtras

var btn = document.getElementById("select");


btn.addEventListener("click", function (e) {
    
        var x = e.target;
        var y = x.getAttribute("value");
        var vaisiai = document.getElementsByName("card-vaisius");
        var dar = document.getElementsByName("card-darzove")[0];
        var dar1 = document.getElementsByName("card-darzove")[1];
        var dar2 = document.getElementsByName("card-darzove")[2];

        console.log(dar,dar1,dar2);
        if (y == "vaisiai") {
            console.log("vaisiai");
            dar.style.display = "none";
            dar1.style.display = "none";
            dar2.style.display = "none";

            document.getElementsByName("card-vaisius")[0].style.display = "block";
            document.getElementsByName("card-vaisius")[1].style.display = "block";
            document.getElementsByName("card-vaisius")[2].style.display = "block";

        } else if (y == "darzoves"){
            console.log("darzoves");
            document.getElementsByName("card-vaisius")[0].style.display = "none";
            document.getElementsByName("card-vaisius")[1].style.display = "none";
            document.getElementsByName("card-vaisius")[2].style.display = "none";

            dar.style.display = "block";
            dar1.style.display = "block";
            dar2.style.display = "block";

        } else {
            dar.style.display = "block";
            dar1.style.display = "block";
            dar2.style.display = "block";

            document.getElementsByName("card-vaisius")[0].style.display = "block";
            document.getElementsByName("card-vaisius")[1].style.display = "block";
            document.getElementsByName("card-vaisius")[2].style.display = "block";
        }
     
    
})

// Paieska

var btn2 = document.getElementById("btn2");

btn2.addEventListener("click", function Search() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("div1");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("h5")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
})
