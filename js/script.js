
var allproducts = document.querySelectorAll(".section-two .card button");
var div1 = document.querySelector("#productsName");
var div2 = document.querySelector("#productsPrice");
var btn1 = document.querySelector("#btn1");
var totalprice = 0;


allproducts.forEach(function (item) {
    item.onclick = function () {

        totalprice += +(item.getAttribute("price"));

        div1.innerHTML += item.getAttribute("value") +"&";


        if (div1.innerHTML != ""){
            btn1.style.display = "block";
        }
        if (div1.innerHTML != ""){
            div2.style.display = "block";
        }
        if (div1.innerHTML != ""){
            div1.style.display = "block";
        }
         
    }
    })

    btn1.onclick = function () {
        div2.innerHTML = totalprice + " $";
    }


