// Run game on page load
document.addEventListener("DOMContentLoaded", function(){
    runGame()
})

function runGame() {
    let currentIndex = flags.length, randomIndex;

    // Shuffles Whole Index
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [flags[currentIndex],flags[randomIndex]] = [flags[randomIndex], flags[currentIndex]]
    }
    // Assign random selection to answer box
    for (i=0; i<4; i++) {
        document.getElementsByClassName("answers")[i].innerText = flags[i].country;
    }
    
    // Select a random value from the array above
    let randomSelection = Math.floor(Math.random() * 4)

    // Open flag using array and random value above
    let imageLocation = "assets/images/flags/" + flags[randomSelection].image + ".png"
    document.getElementById("flag-image").src = imageLocation

    // Log the correct answer and get 3 incorrect answers
    let correctAnswer = flags[randomSelection].country
    console.log(correctAnswer)
}

function checkAnswer() {
    
}