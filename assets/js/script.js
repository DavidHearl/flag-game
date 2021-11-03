// Run game on page load
document.addEventListener("DOMContentLoaded", function(){
    setupGame()
    timer()
    runGame()
})

let trigger = document.getElementById("select-difficulty");
let menu = document.getElementById("difficulty-menu");

trigger.addEventListener("click", function() {
    if (menu.style.opacity == 0) {
        menu.style.opacity = 1;
        menu.style.zIndex = 1;
        document.getElementById("select-difficulty").innerHTML = "Close Menu"
    } else {
        menu.style.opacity = 0;
        menu.style.zIndex = 0;
        document.getElementById("select-difficulty").innerHTML = "Select Difficulty"
    }
    
})

var correctAnswer;
var gameFlags = []
let gameNumber = 0
//var numberOfQuestions;

/**
 * Creates an array of 'x' random flags based on difficulty level selected
 */
function setupGame() {
    // Shuffles flag array
    var currentIndex = flags.length;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [flags[currentIndex],flags[randomIndex]] = [flags[randomIndex], flags[currentIndex]];
    }
    // Pushes random flags to the array
    for (i = 0; i<30; i++) {
        gameFlags.push({country: flags[i].country, image: flags[i].image})
    }
    console.log(gameFlags)
    runGame()
}

function runGame() {
    for (i=0; i<5; i++) {
    document.getElementsByClassName("user-choice")[i].style.background = "white";
    }
    
    var imageLocation = "assets/images/flags/" + gameFlags[gameNumber].image + ".png"
    document.getElementById("flag-image").src = imageLocation

    // Assigns random values to user-choice from the flag array
    for (i=0; i<5; i++) {
        document.getElementsByClassName("user-choice")[i].innerText = flags[Math.floor(Math.random() * flags.length)].country;
    }

    // Assigns the correct answer to a random use choice box
    let randomSelection = Math.floor(Math.random() * 5)
    document.getElementsByClassName("user-choice")[randomSelection].innerText = gameFlags[gameNumber].country

    // Sets the correct answer
    correctAnswer = gameFlags[gameNumber].country;
    document.getElementById("progress-bar").style.width = (gameNumber/29)*100 + "%"
    gameNumber++
}



// Turns difficulty boxes on home page opaique, signaling selection of difficulty.
let hover = document.getElementsByClassName("difficulty-box");

hover[0].addEventListener("click", event => {
    numberOfQuestions = 10
    setupGame()
})
hover[1].addEventListener("click", event => {
    numberOfQuestions = 20
    setupGame()
})
hover[2].addEventListener("click", event => {
    numberOfQuestions = 30
    setupGame()
})
hover[3].addEventListener("click", event => {
    numberOfQuestions = 50
    setupGame()
})

function timer() {
    let time = 8;
    let downloadTimer = setInterval(function(){

    if(time <= 0){
        clearInterval(downloadTimer);
        document.getElementById("timer").innerHTML = "0.00";
    } else {
        document.getElementById("timer").innerHTML = time.toFixed(2);
    }
    time -= 0.01;
    }, 10);
}

function changeColor() {
    for (i=0; i<5; i++) {
        if (document.getElementsByClassName("user-choice")[i].innerText === correctAnswer) {
            document.getElementsByClassName("user-choice")[i].style.background = "Green";
        } else {
            document.getElementsByClassName("user-choice")[i].style.background = "Red";
        }
    }
    setTimeout(function() {
        runGame();
    }, 750);
}