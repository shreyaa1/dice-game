

// lets start





// dice = Math.floor(Math.random() * 6) + 1;
// document.querySelector('#current-' + currentPlayer).textContent = dice;
// document.querySelector('#current-' + currentPlayer).innerHTML = '<span>' + dice + '</span>';
var gamePlay = true;
init();

document.querySelector(".btn-roll").addEventListener("click", function () {
    if (gamePlay) {
        dice = Math.floor(Math.random() * 6) + 1;
        var selector = document.querySelector('.dice');
        selector.style.display = "block";
        selector.src = "dice" + dice + ".png";

        if (dice > 1) {
            roundScore = roundScore + dice;
            document.querySelector("#current-" + currentPlayer).textContent = roundScore;
        }
        else {
            nextFunction()
        }
    }

})

document.querySelector(".btn-hold").addEventListener("click", function () {
    if (gamePlay) {
        scores[currentPlayer] = scores[currentPlayer] + roundScore;
        console.log(scores[currentPlayer])
        document.querySelector("#score-" + currentPlayer).textContent = scores[currentPlayer]

        if (scores[currentPlayer] >= 10) {
            console.log("winner")
            document.querySelector("#name-" + currentPlayer).textContent = "Winner!!";
            gamePlay = false;
        }
        else {
            nextFunction()
        }

    }



})
document.querySelector(".btn-new").addEventListener("click", init);
function nextFunction() {
    currentPlayer === 0 ? currentPlayer = 1 : currentPlayer = 0;
    roundScore = 0;
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

}


function init() {
    scores = [0, 0];
    currentPlayer = 0;
    roundScore = 0;
    gamePlay = true;
    document.querySelector('.dice').style.display = "none";
    document.getElementById("score-0").textContent = "0"
    document.getElementById("score-1").textContent = "0"
    document.getElementById("current-0").textContent = "0"
    document.getElementById("current-1").textContent = "0"
    document.querySelector("#name-0").textContent = "Player 1";
    document.querySelector("#name-1").textContent = "Player 2";
    document.querySelector(".player-0-panel").classList.add("active");
    document.querySelector(".player-1-panel").classList.remove("active");
} 