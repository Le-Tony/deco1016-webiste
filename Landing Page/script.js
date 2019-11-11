//slide show start
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("my-slides");
    //if slides go over specificed number of slides, go back to original
    if(n>slides.length){slideIndex=1}

    //if you go over the opposite direction, go to the starting slide
    if(n < 1){slideIndex = slides.length}

    //set not wanted slides to be invisible
    for(i = 0; i < slides.length;i++){
        slides[i].style.display = "none";
    }

    //set slide you want to see to be visible
    slides[slideIndex-1].style.display = "block";
}

//buttons to transition

var firstButton = document.getElementById("button1");

firstButton.addEventListener("click", function(){
    location.replace("../Sign Up/First/first.html");
});

var secondButton= document.getElementById("button2");
secondButton.addEventListener("click", function(){
    location.replace("../Sign Up/First/first.html");
})

var thirdButton= document.getElementsByName("button3")[0];
thirdButton.addEventListener("click", function(){
    
    //store data value to be used over other pages.
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var email = document.getElementById("email");
    var number = document.getElementById("number");

    sessionStorage.setItem("first", firstName.value);
    sessionStorage.setItem("last", lastName.value);
    sessionStorage.setItem("email", email.value);
    sessionStorage.setItem("number", number.value);
    
    location.replace("../Sign Up/First/first.html");
})
