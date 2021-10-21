let flags = [
    'afghanistan',
    'aland-islands',
    'albania',
    'algeria',
    'american-samoa',
    'andorra'
]

document.addEventListener("DOMContentLoaded", function(){
    runGame()
})

function runGame() {
    let randomFlag = Math.floor(Math.random() * flags.length)
    document.getElementById("flag-image").src = "assets/images/flags/" + flags[randomFlag] + ".png"

    let num1 = Math.floor(Math.random() * flags.length);
    let num2 = Math.floor(Math.random() * flags.length);
    let num3 = Math.floor(Math.random() * flags.length);
    let num4 = Math.floor(Math.random() * flags.length);

    document.getElementById("answer1").innerText = flags[num1];
    document.getElementById("answer2").innerText = flags[num2];
    document.getElementById("answer3").innerText = flags[num3];
    document.getElementById("answer4").innerText = flags[num4];

    console.log(num1);
    console.log(num2);
    console.log(num3);
    console.log(num4);
}

