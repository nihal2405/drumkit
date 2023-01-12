var buttons = document.querySelectorAll('#maindiv button')
for (var i = 0; i < buttons.length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {

    var Inner = this.innerHTML;
    makeSound(Inner);
    animationn(Inner);
  });
}

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  animationn(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case "a":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
    case "s":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case "d":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case "j":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case "k":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case "l":
      var tom5 = new Audio('sounds/snare.mp3');
      tom5.play();
      break;
    default:
      console.log(Inner);

  }

}

function animationn(currentKey){
  var actButton = document.querySelector("." + currentKey);
  actButton.classList.add("pressed");
  setTimeout(function(){
    actButton.classList.remove("pressed");
  },100);

}
