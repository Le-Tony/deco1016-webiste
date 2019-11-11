
//grab username of user.
var name =sessionStorage.getItem("user");

//append user name.
var node=document.createElement("div");
var textNode =document.createTextNode(name);
node.appendChild(textNode);
document.getElementById("name").appendChild(node);

//button to return to home page
var home= document.getElementById("home");
home.addEventListener("click", function(){
    location.replace("../index.html");
});
