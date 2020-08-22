// Variable Declarations
let deck = [
    "img/cards/2-of-clubs.jpg",
    "img/cards/2-of-diamonds.jpg",
    "img/cards/2-of-hearts.jpg",
    "img/cards/2-of-spades.jpg",
    "img/cards/3-of-clubs.jpg",
    "img/cards/3-of-diamonds.jpg",
    "img/cards/3-of-hearts.jpg",
    "img/cards/3-of-spades.jpg",
    "img/cards/4-of-clubs.jpg",
    "img/cards/4-of-diamonds.jpg",
    "img/cards/4-of-hearts.jpg",
    "img/cards/4-of-spades.jpg",
    "img/cards/5-of-clubs.jpg",
    "img/cards/5-of-diamonds.jpg",
    "img/cards/5-of-hearts.jpg",
    "img/cards/5-of-spades.jpg",
    "img/cards/6-of-clubs.jpg",
    "img/cards/6-of-diamonds.jpg",
    "img/cards/6-of-hearts.jpg",
    "img/cards/6-of-spades.jpg",
    "img/cards/7-of-clubs.jpg",
    "img/cards/7-of-diamonds.jpg",
    "img/cards/7-of-hearts.jpg",
    "img/cards/7-of-spades.jpg",
    "img/cards/8-of-clubs.jpg",
    "img/cards/8-of-diamonds.jpg",
    "img/cards/8-of-hearts.jpg",
    "img/cards/8-of-spades.jpg",
    "img/cards/9-of-clubs.jpg",
    "img/cards/9-of-diamonds.jpg",
    "img/cards/9-of-hearts.jpg",
    "img/cards/9-of-spades.jpg",
    "img/cards/10-of-clubs.jpg",
    "img/cards/10-of-diamonds.jpg",
    "img/cards/10-of-hearts.jpg",
    "img/cards/10-of-spades.jpg",
    "img/cards/jack-of-clubs.jpg",
    "img/cards/jack-of-diamonds.jpg",
    "img/cards/jack-of-hearts.jpg",
    "img/cards/jack-of-spades.jpg",
    "img/cards/queen-of-clubs.jpg",
    "img/cards/queen-of-diamonds.jpg",
    "img/cards/queen-of-hearts.jpg",
    "img/cards/queen-of-spades.jpg",
    "img/cards/king-of-clubs.jpg",
    "img/cards/king-of-diamonds.jpg",
    "img/cards/king-of-hearts.jpg",
    "img/cards/king-of-spades.jpg",
    "img/cards/ace-of-clubs.jpg",
    "img/cards/ace-of-diamonds.jpg",
    "img/cards/ace-of-hearts.jpg",
    "img/cards/ace-of-spades.jpg"
];

let deckAlt = [
    "2 of Clubs",
    "2 of Diamonds",
    "2 of Hearts",
    "2 of Spades",
    "3 of Clubs",
    "3 of Diamonds",
    "3 of Hearts",
    "3 of Spades",
    "4 of Clubs",
    "4 of Diamonds",
    "4 of Hearts",
    "4 of Spades",
    "5 of Clubs",
    "5 of Diamonds",
    "5 of Hearts",
    "5 of Spades",
    "6 of Clubs",
    "6 of Diamonds",
    "6 of Hearts",
    "6 of Spades",
    "7 of Clubs",
    "7 of Diamonds",
    "7 of Hearts",
    "7 of Spades",
    "8 of Clubs",
    "8 of Diamonds",
    "8 of Hearts",
    "8 of Spades",
    "9 of Clubs",
    "9 of Diamonds",
    "9 of Hearts",
    "9 of Spades",
    "10 of Clubs",
    "10 of Diamonds",
    "10 of Hearts",
    "10 of Spades",
    "Jack of Clubs",
    "Jack of Diamonds",
    "Jack of Hearts",
    "Jack of Spades",
    "Queen of Clubs",
    "Queen of Diamonds",
    "Queen of Hearts",
    "Queen of Spades",
    "King of Clubs",
    "King of Diamonds",
    "King of Hearts",
    "King of Spades",
    "Ace of Clubs",
    "Ace of Diamonds",
    "Ace of Hearts",
    "Ace of Spades"
]

let score = [
    2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 
    8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
    11, 11, 11, 11
];

let userCards = [];
let dealerCards = [];
let currentHand = [];


//Functions
function randomNumberGenerator(cardsArray) {
    let randomNumber = Math.floor((Math.random() * cardsArray.length));
    return randomNumber;
}

function cardRepeatChecker (array, card) {
    for (let i = 0; i < array.length; i++){
        if (array[i] == card) {
            return false;
        } //end if
    }//end for

    return true;
}


//function to return an array of four different numbers 
//four numbers represent four cards in initial deal
function fullDealCards(array) {
    let cardsDealt = [];

    //deals user card 1 and stores in cards dealt array
    let userCard1 = randomNumberGenerator(array);
    cardsDealt.push(userCard1);

    // deals dealer card 1 and ensures this card hasn't been dealt already
    let dealerCard1 = randomNumberGenerator(array);
    while (cardRepeatChecker(cardsDealt, dealerCard1) == false){
        dealerCard1 = randomNumberGenerator(array);
    }
    cardsDealt.push(dealerCard1);

    let userCard2 = randomNumberGenerator(array);
    while (cardRepeatChecker(cardsDealt, userCard2) == false){
        userCard2 = randomNumberGenerator(array);
    }
    cardsDealt.push(userCard2);

    let dealerCard2 = randomNumberGenerator(array);
    while (cardRepeatChecker(cardsDealt, dealerCard2) == false){
        dealerCard2 = randomNumberGenerator(array);
    }
    cardsDealt.push(dealerCard2);

    //17 maximum cards
    //13 extra cards after initial deal

    let extraCard1 = randomNumberGenerator(array);
    while (cardRepeatChecker(cardsDealt, extraCard1) == false){
        extraCard1 = randomNumberGenerator(array);
    }
    cardsDealt.push(extraCard1);

    let extraCard2 = randomNumberGenerator(array);
    while (cardRepeatChecker(cardsDealt, extraCard2) == false){
        extraCard2 = randomNumberGenerator(array);
    }
    cardsDealt.push(extraCard2);

    let extraCard3 = randomNumberGenerator(array);
    while (cardRepeatChecker(cardsDealt, extraCard3) == false){
        extraCard3 = randomNumberGenerator(array);
    }
    cardsDealt.push(extraCard3);
    
    let extraCard4 = randomNumberGenerator(array);
    while (cardRepeatChecker(cardsDealt, extraCard4) == false){
        extraCard4 = randomNumberGenerator(array);
    }
    cardsDealt.push(extraCard4);

    let extraCard5 = randomNumberGenerator(array);
    while (cardRepeatChecker(cardsDealt, extraCard5) == false){
        extraCard5 = randomNumberGenerator(array);
    }
    cardsDealt.push(extraCard5);

    let extraCard6 = randomNumberGenerator(array);
    while (cardRepeatChecker(cardsDealt, extraCard6) == false){
        extraCard6 = randomNumberGenerator(array);
    }
    cardsDealt.push(extraCard6);

    let extraCard7 = randomNumberGenerator(array);
    while (cardRepeatChecker(cardsDealt, extraCard7) == false){
        extraCard7 = randomNumberGenerator(array);
    }
    cardsDealt.push(extraCard7);

    let extraCard8 = randomNumberGenerator(array);
    while (cardRepeatChecker(cardsDealt, extraCard8) == false){
        extraCard8 = randomNumberGenerator(array);
    }
    cardsDealt.push(extraCard8);

    let extraCard9 = randomNumberGenerator(array);
    while (cardRepeatChecker(cardsDealt, extraCard9) == false){
        extraCard9 = randomNumberGenerator(array);
    }
    cardsDealt.push(extraCard9);

    let extraCard10 = randomNumberGenerator(array);
    while (cardRepeatChecker(cardsDealt, extraCard10) == false){
        extraCard10 = randomNumberGenerator(array);
    }
    cardsDealt.push(extraCard10);

    let extraCard11 = randomNumberGenerator(array);
    while (cardRepeatChecker(cardsDealt, extraCard11) == false){
        extraCard11 = randomNumberGenerator(array);
    }
    cardsDealt.push(extraCard11);

    let extraCard12 = randomNumberGenerator(array);
    while (cardRepeatChecker(cardsDealt, extraCard12) == false){
        extraCard12 = randomNumberGenerator(array);
    }
    cardsDealt.push(extraCard12);

    let extraCard13 = randomNumberGenerator(array);
    while (cardRepeatChecker(cardsDealt, extraCard13) == false){
        extraCard13 = randomNumberGenerator(array);
    }
    cardsDealt.push(extraCard13);

    //returns an array of four different numbers
    return cardsDealt;

}


//converts random number array to card img array
function fullDealCardsImgs(numberArray, imgArray){
    let cardImgs = [];

    for (let i = 0; i < numberArray.length; i++){
        cardImgs[i] = imgArray[numberArray[i]];
    }

    return cardImgs;
}

//converts random number array to card alt array
function fullDealCardsAlts(numberArray, altArray){
    let cardAlts = [];

    for (let i = 0; i < numberArray.length; i++){
        cardAlts[i] = altArray[numberArray[i]];
    }

    return cardAlts;
}

//converts number array to scores corresponding to cards dealt
function scoring(numberArray, scoreArray){
    let fullHandScoring = [];

    for (let i = 0; i < numberArray.length; i++){
        fullHandScoring[i] = scoreArray[numberArray[i]];
    }

    return fullHandScoring;
}




//runs when new hand button is clicked
function newHand(array, scoreArray, altArray){

    //variable declarations/initial function calls
    let newDeal = fullDealCards(array);
    let newDealImgs = fullDealCardsImgs(newDeal, array);
    let newDealAlts = fullDealCardsAlts(newDeal, altArray);
    let newDealScore = scoring(newDeal, scoreArray);
    let userScore = 0;
    let dealerScore = 0;
    let cardIncrementor = 0;
    let dealerIncrementor = 0;

    //increment user score for first 2 cards dealt
    userScore = userScore + newDealScore[0];
    userScore = userScore + newDealScore[2];

    //increment dealer score for first 2 cards dealt
    dealerScore = dealerScore + newDealScore[1];
    dealerScore = dealerScore + newDealScore[3];

    
    //trials
    console.log("Full Hand Random Number Array = " + newDeal);
    console.log("Full Hand Images = " + newDealImgs);
    console.log("Full Hand Alts = " + newDealAlts);
    console.log("Full Hand Scores = " + newDealScore);
    console.log("User Score = " + userScore);
    console.log("Dealer Score = " + dealerScore);
    

    // Hides User Cards
    document.getElementById("userCard1").style.visibility = "hidden";
    document.getElementById("userCard1").src = "#";

    document.getElementById("userCard2").style.visibility = "hidden";
    document.getElementById("userCard2").src = "#";

    document.getElementById("userCard3").style.visibility = "hidden";
    document.getElementById("userCard3").src = "#";

    document.getElementById("userCard4").style.visibility = "hidden";
    document.getElementById("userCard4").src = "#";

    document.getElementById("userCard5").style.visibility = "hidden";
    document.getElementById("userCard5").src = "#";

    document.getElementById("userCard6").style.visibility = "hidden";
    document.getElementById("userCard6").src = "#";

    document.getElementById("userCard7").style.visibility = "hidden";
    document.getElementById("userCard7").src = "#";

    document.getElementById("userCard8").style.visibility = "hidden";
    document.getElementById("userCard8").src = "#";

    document.getElementById("userCard9").style.visibility = "hidden";
    document.getElementById("userCard9").src = "#";

    document.getElementById("userCard10").style.visibility = "hidden";
    document.getElementById("userCard10").src = "#";

    document.getElementById("userCard11").style.visibility = "hidden";
    document.getElementById("userCard11").src = "#";

    //Hides Dealer Cards
    document.getElementById("dealerCard1").style.visibility = "hidden";
    document.getElementById("dealerCard1").src = "#";

    document.getElementById("dealerCard2").style.visibility = "hidden";
    document.getElementById("dealerCard2").src = "#";

    document.getElementById("dealerCard3").style.visibility = "hidden";
    document.getElementById("dealerCard3").src = "#";

    document.getElementById("dealerCard4").style.visibility = "hidden";
    document.getElementById("dealerCard4").src = "#";

    document.getElementById("dealerCard5").style.visibility = "hidden";
    document.getElementById("dealerCard5").src = "#";

    document.getElementById("dealerCard6").style.visibility = "hidden";
    document.getElementById("dealerCard6").src = "#";
    
    document.getElementById("dealerCard7").style.visibility = "hidden";
    document.getElementById("dealerCard7").src = "#";

    document.getElementById("dealerCard8").style.visibility = "hidden";
    document.getElementById("dealerCard8").src = "#";

    document.getElementById("dealerCard9").style.visibility = "hidden";
    document.getElementById("dealerCard9").src = "#";

    document.getElementById("dealerCard10").style.visibility = "hidden";
    document.getElementById("dealerCard10").src = "#";

    document.getElementById("dealerCard11").style.visibility = "hidden";
    document.getElementById("dealerCard11").src = "#";

    //hides buttons
    document.getElementById("hitBtn").style.visibility = "hidden";
    document.getElementById("stickBtn").style.visibility = "hidden";



    
    //deals first 4 cards with a 250ms second delay between cards
    setTimeout(function() {
        document.getElementById("userCard1").src = newDealImgs[0];
        document.getElementById("userCard1").alt = newDealAlts[0];
        document.getElementById("userCard1").style.visibility = "visible";   
    }, 250)

    setTimeout(function() {
        document.getElementById("dealerCard1").src = "img/cards/dealer-card-options/dealer-card-2.jpg";
        document.getElementById("dealerCard1").alt = "Harry Potter Card";
        document.getElementById("dealerCard1").style.visibility = "visible";
    }, 500)


    setTimeout(function() {
        document.getElementById("userCard2").src = newDealImgs[2];
        document.getElementById("userCard2").alt = newDealAlts[2];
        document.getElementById("userCard2").style.visibility = "visible";
    }, 750)

    setTimeout(function() {
        document.getElementById("dealerCard2").src = newDealImgs[3];
        document.getElementById("dealerCard2").alt = newDealAlts[3];
        document.getElementById("dealerCard2").style.visibility = "visible";
    }, 1000)



    //win message if user initial deal is blackjack
    if (userScore == 21){
        setTimeout(function(){
            alert("BLACKJACK! You Won!");
        }, 1500)
    } else {
        //makes hit/stick buttons visibile
        setTimeout(function() {
            document.getElementById("hitBtn").style.visibility = "visible";
        }, 1500)
        setTimeout(function() {
            document.getElementById("stickBtn").style.visibility = "visible";
        }, 1500)
    } //end if/else




    //set card incrementor to four since first 4 cards have been dealt
    cardIncrementor = 4


    //if hit button is pressed, deal new card, add to user score, increment hand cards
    document.getElementById("hitBtn").onclick = function(){
        document.getElementById("userCard" + (cardIncrementor - 1)).src = newDealImgs[cardIncrementor];
        document.getElementById("userCard" + (cardIncrementor - 1)).alt = newDealAlts[cardIncrementor];
        document.getElementById("userCard" + (cardIncrementor - 1) + "Large").src = newDealImgs[cardIncrementor];
        document.getElementById("userCard" + (cardIncrementor - 1)).style.visibility = "visible";
        userScore = userScore + newDealScore[cardIncrementor];

        cardIncrementor = cardIncrementor + 1;

        //if user score is over 21, alert lose message
        if (userScore > 21){
            setTimeout(function() {alert("You Lose"); }, 500);
        }

    };//end hit btn function

    
    //if stick button pressed, make dealer card visibile, determine who wins
    document.getElementById("stickBtn").onclick = function(){
        dealerIncrementor = 3
        document.getElementById("dealerCard1").src = newDealImgs[1];
        document.getElementById("dealerCard1").alt = newDealAlts[1];

        //while dealer score under 17, dealer must take new card
        while (dealerScore < 17) {
            document.getElementById("dealerCard" + dealerIncrementor).src = newDealImgs[cardIncrementor];
            document.getElementById("dealerCard" + dealerIncrementor).alt = newDealAlts[cardIncrementor];
            document.getElementById("dealerCard" + dealerIncrementor + "Large").src = newDealImgs[cardIncrementor];
            document.getElementById("dealerCard" + dealerIncrementor).style.visibility = "visible";
            dealerScore = dealerScore + newDealScore[cardIncrementor];
            cardIncrementor = cardIncrementor + 1;
            dealerIncrementor = dealerIncrementor + 1;
        }

        
        console.log("User Score = " + userScore);
        console.log("Dealer Score = " + dealerScore);
        
        if (userScore >= dealerScore){
        setTimeout(function() {alert("You Win"); }, 500);
        } else if (dealerScore > userScore && dealerScore < 22){
        setTimeout(function() {alert("You Lose"); }, 500);
        } else {
        setTimeout(function() {alert("You Win"); }, 500);
        }//end if/else
        
    };// end stick btn function


}//end function newhand()

//To-Do
//ace problem