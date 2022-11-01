//Create two variables, firstCard and secondCard and set their values to a random number between 2-11

let firstCard = 6;
let secondCard = 4;
let cardsEl = document.getElementById("cards-el");
let cards = [firstCard, secondCard] //Array - ordered list of items
//Create a variable hasBlackjack as a Cash out!

let hasBlackjack = false;

//Create a variable called isAlive and assign it to true

let isAlive = true;

//Create a variable called message and assign it a value that is an empty string

let message = "";

//Create a variable messageEl to display the message 

let messageEl = document.querySelector("#message-el");

//Create a variable sum and set it to the sum of the two cards

let sumEl = document.getElementById("sum-el");
let sum = firstCard + secondCard;

//Onclick button calling a function startGame()
function startGame() {
    renderGame();
}

function renderGame() {
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    }else if (sum === 21) {
        message = "Yes!, you have got a Blackjack"
        hasBlackjack = true
    }else {
        message = "You are out of the game!"
        isAlive = false
    };

    messageEl.textContent = message;
    sumEl.textContent = "Score: " + sum;
    cardsEl.textContent = "Cards: " + cards[0] + " , " + cards[1];
};

function newCard() {
    let draw = 11;
    sum += draw;
    renderGame();
};



