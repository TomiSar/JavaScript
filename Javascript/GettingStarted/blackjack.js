//Setup game
//Shuffle cards
//Calculating score
//Taking a Card or staying

//Card variables (Contains all cards in deck includimg cards for all suits)
let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
let values = ['Ace', 'Two', 'Three', 'Four', 'Five',
              'Six', 'Seven', 'Eight', 'Nine', 'Ten',
              'Jack', 'Queen', 'King'];

//#region printing all the cards for console           
//Print all cards
// console.log('\nPrint all card values from deck');
// for (let i = 0; i < suits.length; i++) {
//     for (let j = 0; j < values.length; j++) {
//         console.log(values[j] + ' of ' + suits[i]);
//     }
// }
// console.log();
// let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
// let values = ['Ace', 'King', 'Queen', 'Jack',
//     'Ten', 'Nine', 'Eight', 'Seven', 'Six',
//     'Five', 'Four', 'Three', 'Two'];
//#endregion

//DOM variables
let textArea = document.getElementById('text-area');
let newGameButton = document.getElementById('new-button');
let hitButton = document.getElementById('hit-button');
let stayButton = document.getElementById('stay-button');

//Game variables
let gameStarted = false;
gameOver = false
playerWon = false
dealerCards = []
playerCards = []
dealerScore = 0
playerScore = 0
deck = [];

//Hide buttons
hitButton.style.display = 'none';
stayButton.style.display = 'none';

//Game
newGameButton.addEventListener('click', function () {
    gameStarted = true;
    gameOver = false;
    playerWon = false;

    deck = createNewDeck();
    shuffleDeck(deck);
    
    //Dealer and player both get two cards at the beginning 
    dealerCards = [getNextCard(), getNextCard()];
    playerCards = [getNextCard(), getNextCard()];

    newGameButton.style.display = 'none';
    hitButton.style.display = 'inline';
    stayButton.style.display = 'inline';
    showStatus();
});

hitButton.addEventListener('click', function () {
    playerCards.push(getNextCard());
    showStatus();
})

stayButton.addEventListener('click', function () {
    gameOver = true;
    checkForTheEndOfGame();
    showStatus();
})

//Create new deck
function createNewDeck() {
    let deck = [] //local variable
    for (let suitIndex = 0; suitIndex < suits.length; suitIndex++) {
        for (let valueIndex = 0; valueIndex < values.length; valueIndex++) {
            let card = {
                suit: suits[suitIndex],
                value: values[valueIndex]
            }
            deck.push(card);
            //deck.push(values[valueIndex] + ' of ' + suits[suitIndex])
        }
    }
    return deck
}

//Swapping deck[i] with deck[swapIndex] for the whole deck
function shuffleDeck(deck) {
    for (let i = 0; i < deck.length; i++) {
        let swapIndex = Math.trunc(Math.random() * deck.length); //Random(deck length(52 cards)) --> swapindex
        let temp = deck[swapIndex];                              //deck[swapIndex] --> temp 
        deck[swapIndex] = deck[i];                               //deck[swapIndex] --> deck[i]
        deck[i] = temp;                                          //temp --> deck[i]
    }
}

//Get next card from deck
function getNextCard() {
    return deck.shift();
}

//object to string
function getCardString(card) {
    return card.value + ' of ' + card.suit;
}

//card string value to numeric for score count
function getNumericCardValue(card) {
    switch (card.value) {
        case 'Ace':
            return 1;
        case 'Two':
            return 2;
        case 'Three':
            return 3;
        case 'Four':
            return 4;
        case 'Five':
            return 5;
        case 'Six':
            return 6;
        case 'Seven':
            return 7;
        case 'Eight':
            return 8;
        case 'Nine':
            return 9;
        default:
            return 10;
    }
}

//calculation for scores
function getScore(cardArray) {
    let score = 0;
    let hasAce = false;
    for (let i = 0; i < cardArray.length; i++) {
        let card = cardArray[i];
        score += getNumericCardValue(card);

        if (card.value === 'Ace') {
            hasAce = true;
        }
    }
    if (hasAce && score + 10 <= 21) {
        return score + 10;
    }
    return score;
}

//update scores
function updateScores() {
    dealerScore = getScore(dealerCards);
    playerScore = getScore(playerCards);
}

function checkForTheEndOfGame() {
    updateScores();

    //let dealer take cards
    if (gameOver) {
        if (dealerScore < playerScore &&
            playerScore <= 21 && dealerScore <= 21) {
            dealerCards.push(getNextCard());
            updateScores();
        }
    }

    if (playerScore > 21) {
        playerWon = false;
        gameOver = true;
    } else if (dealerScore > 21) {
        playerWon = true;
        gameOver = true;
    }

    else if (gameOver) {
        if (playerScore > dealerScore) {
            playerWon = true;
        } else if (playerScore === dealerScore) {
            playerWon = false;
        } else {
            playerWon = false;
        }
    }
}


function showStatus() {
    if (!gameStarted) {
        textArea.innerText = "Welcome to blackjack";
        return;
    }

    let dealerCardsString = '';
    for (let i = 0; i < dealerCards.length; i++) {
        dealerCardsString += getCardString(dealerCards[i]) + '\n';
    }

    let playerCardsString = '';
    for (let i = 0; i < playerCards.length; i++) {
        playerCardsString += getCardString(playerCards[i]) + '\n';
    }

    updateScores();

    textArea.innerText =
        'Dealer has:\n' +
        dealerCardsString +
        '(score: ' + dealerScore + ')\n\n' +

        'Player has:\n' +
        playerCardsString +
        '(score ' + playerScore + ')\n\n';

    if (gameOver) {
        if (playerWon) {
            textArea.innerText += "YOU WIN!";
        } else {
            textArea.innerText += "DEALER WINS!";
        }
    }

    newGameButton.style.display = 'inline';
    // hitButton.style.display = 'none';
    // stayButton.style.display = 'none';
}

//print whole deck game after deck shuffling 
// for (var i = 0; i < deck.length; i++) {
//     textArea.innerText += '\n' + getCardString(deck[i])
// }

//let deck = createNewDeck();
//printDeck()

//print all deck cards 
// function printDeck() {
//     for (let i = 0; i < deck.length; i++) {
//         console.log(deck[i])
//     }
// }

// let playerCards = [getNextCard(), getNextCard(), getNextCard(), getNextCard()];
// console.log("\nWelcome to Blackjack")
// console.log("You are dealt:")
// console.log("   " + getCardString(playerCards[0]));
// console.log("   " + getCardString(playerCards[1]));
// for (let suitIndex = 0; suitIndex < suits.length; suitIndex++) {
//     for (let valueIndex = 0; valueIndex < values.length; valueIndex++) {
//         deck.push(values[valueIndex] + ' of ' + suits[suitIndex])
//     }
// }

// for (let i = 0; i < deck.length; i++) {
//     console.log(deck[i])
// }

//let playerCards = [];
// for (let i = 0; i < deck.length; i++) {
//     playerCards[i] = deck[i];
// }

//let playerCards = [deck[0], deck[2], deck[4]];
// console.log("Welcome to Blackjack")
// console.log("You are dealt:")
// console.log("   " + playerCards[0])
// console.log("   " + playerCards[2])
// console.log("   " + playerCards[4])

// let card1 = "Ace of spades";
// let card2 = "Queen of hearts";
// console.log("   " + card1)
// console.log("   " + card2)