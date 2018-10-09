// create a rock, paper, scissors game where 
// -user inputs rock, paper, or scissors, 
// -and bot generates either rock, paper, scissors as well. 
// -After ever round have the winning score and a message announcing who won that round


// rock, paper, scissors game
// we need two variables bot and user
var botScore = 0,
    playerScore = 0;


// in order to make bot random we need to use the Math.random()

// for the user we need a onClick() for them to input the value of the user variable
document.getElementById("rock").onclick = playerThrowsRock;

function playerThrowsRock() {
    var botsWeapon = getRandomWeapon();
    checkWhoWon(botsWeapon, "rock");
    console.log(botsWeapon);
    displayResult(`The steam powered bot used ${botsWeapon} as a weapon`);
}


document.getElementById("scissors").onclick = playerThrowsScissors;

function playerThrowsScissors() {
    var botsWeapon = getRandomWeapon();
    checkWhoWon(botsWeapon, "scissors");
    console.log(botsWeapon);
    displayResult(`The steam powered bot used ${botsWeapon} as a weapon`);
}

document.getElementById("paper").onclick = playerThrowsPaper;

function playerThrowsPaper() {
    var botsWeapon = getRandomWeapon();
    checkWhoWon(botsWeapon, "paper");
    console.log(botsWeapon);
    displayResult(`The steam powered bot used ${botsWeapon} as a weapon`);
}

document.getElementById("lizard").onclick = playerThrowsLizard;

function playerThrowsLizard() {
    var botsWeapon = getRandomWeapon();
    checkWhoWon(botsWeapon, "lizard");
    console.log(botsWeapon);
    displayResult(`The steam powered bot used ${botsWeapon} as a weapon`);
}

document.getElementById("spock").onclick = playerThrowsSpock;

function playerThrowsSpock() {
    var botsWeapon = getRandomWeapon();
    checkWhoWon(botsWeapon, "spock");
    console.log(botsWeapon);
    displayResult(`The steam powered bot used ${botsWeapon} as a weapon`);
}

// conditional to check if rock, paper, or scissors wins (including a draw)
function getRandomWeapon() {
    var randomNumber = Math.random();
    var botsWeapon = "rock";
    if (randomNumber < .2) {
        botsWeapon = "scissors";
    }
    else if (randomNumber < .4) {
        botsWeapon = "paper";
    }
    else if (randomNumber < .6) {
        botsWeapon = "lizard";
    }
    else if (randomNumber < .8) {
        botsWeapon = "spock";
    }

    return botsWeapon;
}



// console.log(checkWhoWon(botsWeapon));
// console.log(checkWhoWon(playersWeapon));

// if draw console.log("it's a draw") neither bot or user get a point
function checkWhoWon(botsWeapon, playersWeapon) {
    if (botsWeapon === playersWeapon) {
        displayCompleteMessage("There was a tie");
    }
    // if bot wins console.log ("bot wins") bot score is updates ++1	
    else if (
        (botsWeapon === "scissors" && playersWeapon === "paper") ||
        (botsWeapon === "scissors" && playersWeapon === "lizard") ||
        (botsWeapon === "paper" && playersWeapon === "rock") ||
        (botsWeapon === "paper" && playersWeapon === "spock") ||
        (botsWeapon === "rock" && playersWeapon === "scissors") ||
        (botsWeapon === "rock" && playersWeapon === "lizard") ||
        (botsWeapon === "lizard" && playersWeapon === "paper") ||
        (botsWeapon === "lizard" && playersWeapon === "spock") ||
        (botsWeapon === "spock" && playersWeapon === "scissors") ||
        (botsWeapon === "spock" && playersWeapon === "rock")
    ) {
        increaseBotScore();
    }
    // if user wins console.log ("you win") user score is updated ++1   
    else if (
        (playersWeapon === "scissors" && botsWeapon === "paper") ||
        (playersWeapon === "scissors" && botsWeapon === "lizard") ||
        (playersWeapon === "paper" && botsWeapon === "rock") ||
        (playersWeapon === "paper" && botsWeapon === "spock") ||
        (playersWeapon === "rock" && botsWeapon === "scissors") ||
        (playersWeapon === "rock" && botsWeapon === "lizard") ||
        (playersWeapon === "lizard" && botsWeapon === "paper") ||
        (playersWeapon === "lizard" && botsWeapon === "spock") ||
        (playersWeapon === "spock" && botsWeapon === "scissors") ||
        (playersWeapon === "spock" && botsWeapon === "rock")
    ) {
        increasePlayerScore();
    }
}


function increaseBotScore() {
    botScore += 1;
    document.getElementById("computerScore").innerHTML = botScore;
    displayCompleteMessage("Sorry, you're a loser");

}
function increasePlayerScore() {
    playerScore += 1;
    document.getElementById("humanScore").innerHTML = playerScore;
    displayCompleteMessage("Congradulations! You're a winner");
}
function displayCompleteMessage(msg) {
    document.getElementById("status").innerHTML = msg;
}
function displayResult(msg) {
    document.getElementById("showResult").innerHTML = msg;
}
// stack
// var storagedHighScore = localStorage.getItem("highscore");
// if (storagedHighScore || score > parseInt(storagedHighScore)) {
// 	localStorage.setItem("highscore", score);

// session and local storage

var trees = ["willow", "cherry", "birch", "red wood"];

trees.forEach(function() {
    trees[i] = el.toUpperCase();
});

console.log(trees);