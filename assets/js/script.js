// Run game on page load
document.addEventListener("DOMContentLoaded", function(){
    runGame()
})

var correctAnswer;

function runGame() {
     

    var currentIndex = flags.length; //, randomIndex

    // Shuffles Whole Index
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [flags[currentIndex],flags[randomIndex]] = [flags[randomIndex], flags[currentIndex]];
    }

    // Assign random selection to answer box
    for (i=0; i<4; i++) {
        document.getElementsByClassName("user-choice")[i].innerText = flags[i].country;
    }

    // Select a random value from the array above
    var randomSelection = Math.floor(Math.random() * 4)

    // Open flag using array and random value above
    var imageLocation = "assets/images/flags/" + flags[randomSelection].image + ".png"
    document.getElementById("flag-image").src = imageLocation

    // Log the correct answer
    correctAnswer = flags[randomSelection].country;
    console.log(correctAnswer)

    for (c=0; c<4; c++) {
        document.getElementsByClassName("user-choice")[c].style.background = "rgb(48, 121, 230)";
    }  
}

function changeColor() {
    for (i=0; i<4; i++) {
        if (document.getElementsByClassName("user-choice")[i].innerText === correctAnswer) {
            document.getElementsByClassName("user-choice")[i].style.background = "Green";
        } else {
            document.getElementsByClassName("user-choice")[i].style.background = "Red";
        }
    }   
    setTimeout(function() {
        runGame();
        }, 1500);
}