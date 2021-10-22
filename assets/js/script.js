// Run game on page load
document.addEventListener("DOMContentLoaded", function(){
    runGame()
})

function runGame() {

    // Select a random value from the array
    let randomSelection = Math.floor(Math.random() * flags.length)

    // Open flag using array and random value above
    let imageLocation = "assets/images/flags/" + flags[randomSelection].image + ".png"
    document.getElementById("flag-image").src = imageLocation

    // Log the correct answer and get 3 incorrect answers
    let correctAnswer = flags[randomSelection].country
    console.log(correctAnswer)
    let wrong1 = flags[Math.floor(Math.random() * flags.length)].country;
    let wrong2 = flags[Math.floor(Math.random() * flags.length)].country;
    let wrong3 = flags[Math.floor(Math.random() * flags.length)].country;
    
    // Create an array with all the answers in
    let options = [correctAnswer, wrong1, wrong2, wrong3];
    console.log(options)

    // Randomly assign answers to the buttons
    document.getElementById("answer1").innerText = options[0];
    document.getElementById("answer2").innerText = options[1];
    document.getElementById("answer3").innerText = options[2];
    document.getElementById("answer4").innerText = options[3];

    console.log("./assets/images")
}