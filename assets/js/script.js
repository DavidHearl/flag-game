// Run game on page load
document.addEventListener("DOMContentLoaded", function(){
    setupGame()
    runGame()
    runTimer()
})

// Turns difficulty boxes opaque
hover = document.getElementsByClassName("difficulty-box");
hover[0].addEventListener("click", function() {
    hover[0].style.opacity = "1";
    hover[1].style.opacity = "0.4";
    hover[2].style.opacity = "0.4";
    hover[3].style.opacity = "0.4";
})
hover[1].addEventListener("click", function() {
    hover[0].style.opacity = "0.4";
    hover[1].style.opacity = "1";
    hover[2].style.opacity = "0.4";
    hover[3].style.opacity = "0.4";
})
hover[2].addEventListener("click", function() {
    hover[0].style.opacity = "0.4";
    hover[1].style.opacity = "0.4";
    hover[2].style.opacity = "1";
    hover[3].style.opacity = "0.4";
})
hover[3].addEventListener("click", function() {
    hover[0].style.opacity = "0.4";
    hover[1].style.opacity = "0.4";
    hover[2].style.opacity = "0.4";
    hover[3].style.opacity = "1";
})


/*
var correctAnswer;
var gameFlags = []
let gameNumber = 0

let play = document.getElementById("play")
play.addEventListener("click", function(){
    runGame()
});

function runTimer() {
    let time = 10;
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



// Shuffles flag array and creates a new array of 30 flags.

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
    console.log((gameNumber/30)*100)
    //console.log(correctAnswer)
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

function easy() {
    document.getElementById("difficulty-easy").style.opacity = "1";
    document.getElementById("difficulty-medium").style.opacity = "0.3";
    document.getElementById("difficulty-hard").style.opacity = "0.3";
    document.getElementById("difficulty-extreme").style.opacity = "0.3";
}
function medium() {
    document.getElementById("difficulty-easy").style.opacity = "0.3";
    document.getElementById("difficulty-medium").style.opacity = "1";
    document.getElementById("difficulty-hard").style.opacity = "0.3";
    document.getElementById("difficulty-extreme").style.opacity = "0.3";
}
function hard() {
    document.getElementById("difficulty-easy").style.opacity = "0.3";
    document.getElementById("difficulty-medium").style.opacity = "0.3";
    document.getElementById("difficulty-hard").style.opacity = "1";
    document.getElementById("difficulty-extreme").style.opacity = "0.3";
}
function extreme() {
    document.getElementById("difficulty-easy").style.opacity = "0.3";
    document.getElementById("difficulty-medium").style.opacity = "0.3";
    document.getElementById("difficulty-hard").style.opacity = "0.3";
    document.getElementById("difficulty-extreme").style.opacity = "1";
}*/
