let flags = [
    {country:'Afghanistan',     image:'afghanistan',        fact:''},
    {country:'Aland Islands',   image:'aland-islands',      fact:''},
    {country:'Albania',         image:'albania',            fact:''},
    {country:'Algeria',         image:'algeria',            fact:''},
    {country:'American Samoa',  image:'american-samoa',     fact:''},
    {country:'Andorra',         image:'andorra',            fact:''},
    {country:'Angola',          image:'angola',             fact:''}
]

document.addEventListener("DOMContentLoaded", function(){
    runGame()
})

function runGame() {
    let randomFlag = Math.floor(Math.random() * flags.length)
    document.getElementById("flag-image").src = "assets/images/flags/" + flags[randomFlag].image + ".png"
    console.log(flags[randomFlag])

    let num1 = Math.floor(Math.random() * flags.length);
    let num2 = Math.floor(Math.random() * flags.length);
    let num3 = Math.floor(Math.random() * flags.length);
    let num4 = Math.floor(Math.random() * flags.length);

    document.getElementById("answer1").innerText = flags[num1].country;
    document.getElementById("answer2").innerText = flags[num2].country;
    document.getElementById("answer3").innerText = flags[num3].country;
    document.getElementById("answer4").innerText = flags[num4].country;
}