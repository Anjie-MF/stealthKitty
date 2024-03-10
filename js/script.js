
//Use mouseover events to change the text of elements
var fans = document.querySelector(".fans");
fans.addEventListener("click", function () {
    fans.innerText = "123K";
});

var fish = document.querySelector(".fish");
fish.addEventListener("click", function () {
    fish.innerText = "47K";
});

var pets = document.querySelector(".pets");
pets.addEventListener("click", function () {
    pets.innerText = "20K";
});

//if and else statements to toggle Dark/Light when clicked on 
var input = document.querySelector("#toggle");
input.addEventListener("click", function () {
    if (body.classList.contains("light")) {
        body.classList.remove("light");
        ball.classList.remove("move-right");
        h1.innerText = "Stealth Quincy";
    } else {
        body.classList.add("light");
        ball.classList.add("move-right");
        h1.innerText = "Party Quincy";
    }
});
var div = document.querySelector(".ball");
var h1 = document.querySelector("h1");
var body = document.querySelector("body");