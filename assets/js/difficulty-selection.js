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