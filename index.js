// alert("working");


function handleClick(){
    // var audio = new Audio("sounds/tom-1.mp3");
    // audio.play();
    // this.style.color = "white";
    var buttonInnerHML = this.innerHTML;

    makeSound(buttonInnerHML);
    buttonAnimation(buttonInnerHML);
}

var drumLength = document.querySelectorAll(".drum").length;
// document.querySelector("button").addEventListener("click", handleClick);
for(var i = 0; i < drumLength; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

document.addEventListener("keypress", function(e){
    makeSound(e.key);
    buttonAnimation(e.key);
})

function buttonAnimation(key){
    var animate = document.querySelector("." + key);
    animate.classList.add("pressed");

    setTimeout(() => {
        animate.classList.remove("pressed");
    }, 100);
}

function makeSound(key){

    switch(key){
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;

        case "a":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
        break;

        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;

        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;

        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;

        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;

        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;

        default: console.log(key);
    }
}