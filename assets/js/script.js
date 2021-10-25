// Run game on page load
document.addEventListener("DOMContentLoaded", function(){
    setupGame()
    runGame()
})

var correctAnswer;
var gameFlags = []
let gameNumber = 0

let play = document.getElementById("play")
play.addEventListener("click", function(){
    runGame()
});

function setupGame() {
    // Gets number of items in flag array
    // Shuffles flags array
    var currentIndex = flags.length;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [flags[currentIndex],flags[randomIndex]] = [flags[randomIndex], flags[currentIndex]];
    }
    // Logs first 20 flags
    for (i = 0; i<30; i++) {
        gameFlags.push({country: flags[i].country, image: flags[i].image})
    }
    console.log(gameFlags)
}

function runGame() {
    var imageLocation = "assets/images/flags/" + gameFlags[gameNumber].image + ".png"
    document.getElementById("flag-image").src = imageLocation

    // Assigns random values to user-choice from the flag array
    for (i=0; i<5; i++) {
        document.getElementsByClassName("user-choice")[i].innerText = flags[Math.floor(Math.random() * flags.length)].country;
    }

    // Assigns the correct answer to a random use choice box
    let randomSelection = Math.floor(Math.random() * 5)
    document.getElementsByClassName("user-choice")[randomSelection].innerText = gameFlags[gameNumber].country

    correctAnswer = gameFlags[gameNumber].country;
    console.log(correctAnswer)
    gameNumber++
}


function changeColor() {
    for (i=0; i<5; i++) {
        if (document.getElementsByClassName("user-choice")[i].innerText === correctAnswer) {
            document.getElementsByClassName("user-choice")[i].style.background = "Green";
        } else {
            document.getElementsByClassName("user-choice")[i].style.background = "Red";
        }
    }
    updateScores();
    setTimeout(function() {
        runGame();
    }, 800);
}
function updateScores() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

function easy() {
    document.getElementById("easy").style.opacity = "1";
    document.getElementById("medium").style.opacity = "0.5";
    document.getElementById("hard").style.opacity = "0.5";
}
function medium() {
    document.getElementById("easy").style.opacity = "0.5";
    document.getElementById("medium").style.opacity = "1";
    document.getElementById("hard").style.opacity = "0.5";
}
function hard() {
    document.getElementById("easy").style.opacity = "0.5";
    document.getElementById("medium").style.opacity = "0.5";
    document.getElementById("hard").style.opacity = "1";
}
