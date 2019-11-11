var next = document.getElementById("next");
var home = document.getElementById("home");



//if user inputted data in the home page, prefill data for them.
document.getElementById("secondFirst").value = sessionStorage.getItem("first");
document.getElementById("lastName").value = sessionStorage.getItem("last");
document.getElementById("email").value = sessionStorage.getItem("email");
document.getElementById("number").value = sessionStorage.getItem("number");

//button functionality
next.addEventListener("click", function(){
    location.replace("../Second/second.html");
});

home.addEventListener("click", function(){
    location.replace("../../index.html");
});

