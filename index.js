//Create two variables, firstCard and secondCard and set their values to a random number between 2-11

let firstCard = getRandomCard();
let secondCard = getRandomCard();
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

//Create the function that generate a random number

function getRandomCard() {
    //if AS(1) return 11
    //if J(11), Q(12) or K(13) return 10
    num = Math.floor((Math.random() *13) + 1);
    if (num === 1) {
        return 11;
    } else if (num > 1 && num < 10) {
        return num;
    }else if (num >= 10) {
        return 10;
    };
};

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
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + ", ";
    }
};

function newCard() {
    let draw = getRandomCard();
    sum += draw;
    cards.push(draw) //Push the new card to the cards array
    renderGame();
};



