// Assign Variables to HTML elements
let trigger = document.getElementById("select-difficulty");
let menu = document.getElementById("difficulty-menu");
let game = document.getElementById("game");
let userChoice = document.getElementsByClassName("user-choice");

// Assign global varables
var correctAnswer;
var gameFlags = [];
var gameNumber = 0;
var numberOfQuestions;
var time;

// Opens and closes difficulty menu when clicked
trigger.addEventListener("click", function () {
    if (menu.style.opacity == 0) {
        menu.style.opacity = 1;
        menu.style.zIndex = 1;
        trigger.innerHTML = "Close Menu";
    } else {
        menu.style.opacity = 0;
        menu.style.zIndex = 0;
        trigger.innerHTML = "Select Difficulty";
    }
})

// Turns difficulty boxes on, home page opaique, signaling selection of difficulty.
let hover = document.getElementsByClassName("difficulty-box");
let title = document.getElementById("difficulty-level")

hover[0].addEventListener("click", event => {
    numberOfQuestions = 10;
    title.innerText = "Easy"
    title.style.color = "green"
    hideMenu()
})
hover[1].addEventListener("click", event => {
    numberOfQuestions = 20;
    title.innerText = "Medium"
    title.style.color = "orange"
    hideMenu()
})
hover[2].addEventListener("click", event => {
    numberOfQuestions = 30;
    title.innerText = "Hard"
    title.style.color = "red"
    hideMenu()
})
hover[3].addEventListener("click", event => {
    numberOfQuestions = 50;
    title.innerText = "Extreme"
    title.style.color = "black"
    hideMenu()
})

function hideMenu() {
    document.getElementById("number-of-questions").textContent = "/" + numberOfQuestions;
    menu.style.zIndex = -2;
    menu.style.opacity = 0;
    setupGame()
}

/**
 * Creates an array of 'x' random flags based on difficulty level selected
 */
function setupGame() {
    // Gets number of elements in the flag array
    var currentIndex = flags.length;
    // Generates random number, steps down current index, shuffles array
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [flags[currentIndex], flags[randomIndex]] = [flags[randomIndex], flags[currentIndex]];
    }
    // Creates an array of random flags, called 'gameFlags'
    for (i = 0; i < numberOfQuestions; i++) {
        gameFlags.push({
            country: flags[i].country,
            image: flags[i].image
        })
    }
    console.log(gameFlags)
    runGame()
}

/**
 * Ends game if score limit has been reached and runs game.
 */
function runGame() {
    // Alerts the user that a the game has finished
    if (gameNumber >= numberOfQuestions) {
        alert(`You completed the game and scored: ${(score/numberOfQuestions)*100}%`)
        location.reload()
    }

    document.getElementById("timer-border").style.borderColor = "green"

    // Turns all answer boxes back to white
    for (i = 0; i < 5; i++) {
        userChoice[i].style.background = "white";
        userChoice[i].style.color = "rgb(62, 125, 197)"
    }

    // Grabs the correct flag from the assets folder
    var imageLocation = "assets/images/flags/" + gameFlags[gameNumber].image + ".png"
    document.getElementById("flag-image").src = imageLocation

    // Assigns random values to user-choice from the flag array
    for (i = 0; i < 5; i++) {
        userChoice[i].innerText = flags[Math.floor(Math.random() * flags.length)].country;
    }

    // Assigns the correct answer to a random use choice box
    let randomSelection = Math.floor(Math.random() * 5)
    userChoice[randomSelection].innerText = gameFlags[gameNumber].country

    // Sets the correct answer
    correctAnswer = gameFlags[gameNumber].country;
    gameNumber++
    document.getElementById("progress-bar").style.width = (gameNumber / numberOfQuestions) * 100 + "%"
    timer()
}

/**
 * Runs timer
 */
function timer() {
    
    if (numberOfQuestions == 10) {
        time = 15;
    } else if (numberOfQuestions == 20) {
        time = 12;
    } else if (numberOfQuestions == 30) {
        time = 10;
    } else {
        time = 8;
    }

    let downloadTimer = setInterval(function () {
        if (time <= 0) {
            clearInterval(downloadTimer);
            document.getElementById("timer").innerHTML = "0.00";
        } else {
            document.getElementById("timer").innerHTML = time.toFixed(2);
            time -= 0.01;
            if (time <= 5.5) {
                document.getElementById("timer-border").style.borderColor = "orange"
            } 
            if (time <= 3) {
                document.getElementById("timer-border").style.borderColor = "red"
            } 
            if (time <= 0.01) {
                clearInterval(downloadTimer)
                runGame()
            }
        }
    }, 5);
}

// Increase score if the user selects the correct answer
// Highlight the correct answer if the user selects the wrong one
let score = parseInt(document.getElementById("score").innerHTML)

let index;
userChoice[0].addEventListener("click", event => {
    index = 0;
    time = 1;
    validation()
})
userChoice[1].addEventListener("click", event => {
    index = 1;
    time = 1;
    validation()
})
userChoice[2].addEventListener("click", event => {
    index = 2;
    time = 1;
    validation()
})
userChoice[3].addEventListener("click", event => {
    index = 3;
    time = 1;
    validation()
})
userChoice[4].addEventListener("click", event => {
    index = 4;
    time = 1;
    validation()
})

function validation() {
    if (userChoice[index].innerText == correctAnswer) {
        document.getElementById("score").innerText = ++score;
        userChoice[index].style.background = "green";
        userChoice[index].style.color = "black";
    } else {
        userChoice[index].style.background = "red";
        userChoice[index].style.color = "white";
        for (a = 0; a < 5; a++) {
            if (userChoice[a].innerText == correctAnswer) {
                userChoice[a].style.background = "green";
                userChoice[a].style.color = "black"
            }
        }
    }
    //setTimeout(function () {
    //    runGame();
    //}, 900);
}