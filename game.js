var numerOfGuesses = 0;

var gamesYouWon = 0;

var gamesYouLoss = 0;
// returns random nuber between 1-10
function randomNumber() {
  var choosenBowl = Math.floor(Math.random() * 10 + 1);
  return choosenBowl;
}

var theBowl = randomNumber();
console.log("random bowl: " + theBowl);

bowlImages = document.querySelectorAll(".bowl");

for (var i = 0; i < bowlImages.length; i++) {
  bowlImages[i].addEventListener("click", function (event) {
    numerOfGuesses++;
    if (numerOfGuesses <= 4) {
      var playerChoose = parseInt(event.srcElement.classList[1]);
      console.log("player choose: " + playerChoose);
      event.srcElement.classList.add("rotate");
      console.log(event.srcElement.classList);
      if (theBowl === playerChoose) {
        document.querySelector(".win").classList.remove("hidden");
        setTimeout(function () {
          document.querySelector(".win").classList.add("hidden");
          gamesYouWon++;
          restart();
        }, 2000);
      } else if (numerOfGuesses === 4) {
        document.querySelector(".loss").classList.remove("hidden");
        setTimeout(function () {
          document.querySelector(".loss").classList.add("hidden");
          gamesYouLoss++;
          restart();
        }, 2000);
      }
      changeRemainingGuesses(numerOfGuesses, playerChoose);
    }
    else {
      restart();
    }
  });
}

function changeRemainingGuesses(numberGeusses, lastBowl) {
  document.querySelector(".guesses").innerHTML =
    "Remaining guesses: " + (4 - numberGeusses);
    if (lastBowl) {
          document.querySelector(".last-bowl").innerHTML =
    "last bowl you choose: " + lastBowl;
    }

}

function restart() {
  numerOfGuesses = 0;
  changeRemainingGuesses(numerOfGuesses);
  for (var i = 0; i < bowlImages.length; i++) {
    if (bowlImages[i].classList[2] === "rotate") {
      bowlImages[i].classList.remove("rotate");
    }
  }

  document.querySelector(".games-won").innerHTML =
    "Games you won: " + gamesYouWon;
  document.querySelector(".games-loss").innerHTML =
    "Games you loss: " + gamesYouLoss;
  document.querySelector(".last-random").innerHTML =
    "last random number: " + theBowl;
  theBowl = randomNumber();
  console.log("random bowl: " + theBowl);
}

var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})
