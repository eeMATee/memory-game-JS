document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardsArray = [

        {
            name: 'cheeseburger',
            img: '/images/cheeseburger.png'
        },
        {
            name: 'cheeseburger',
            img: '/images/cheeseburger.png'
        },
        {
            name: 'fries',
            img: '/images/fries.png'
        },
        {
            name: 'fries',
            img: '/images/fries.png'
        },
        {
            name: 'hotdog',
            img: '/images/hotdog.png'
        },
        {
            name: 'hotdog',
            img: '/images/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: '/images/ice-cream.png'
        },
        {
            name: 'ice-cream',
            img: '/images/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: '/images/milkshake.png'
        },
        {
            name: 'milkshake',
            img: '/images/milkshake.png'
        },
        {
            name: 'pizza',
            img: '/images/pizza.png'
        },
        {
            name: 'pizza',
            img: '/images/pizza.png'
        },    
    ];
    let cartChosen = [];
    let cartChosenID = [];
    let cardsWon = [];

const gridPlate = document.querySelector('.grid');
const resultSpan = document.querySelector('#result');

//Randoming positon of cards 
cardsArray.sort(() => 0.5 - Math.random());

//Create bord
function createBoard () {
    for(let i = 0; i < cardsArray.length; i++) {
        let card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gridPlate.appendChild(card);
    }
}

function checkForMatch () {
    let cards = document.querySelectorAll('img');
    const firstChosenCard = cartChosenID[0];
    const secondChosenCard = cartChosenID[1];
    if(cartChosen[0] === cartChosen[1]) {
        alert('You found a match')
        cards[firstChosenCard].setAttribute('src', 'images/white.png');
        cards[secondChosenCard].setAttribute('src', 'images/white.png');
        cardsWon.push(cartChosen);
    } else {
        cards[firstChosenCard].setAttribute('src', 'images/blank.png');
        cards[secondChosenCard].setAttribute('src', 'images/blank.png');
        // alert('Sorry, try again');
    }   
    // clears arrays of chosen card 
    cartChosen = [];
    cartChosenID = [];
    resultSpan.textContent = cardsWon.length;
    if(cardsWon.length === (cardsArray.length / 2)) {
        resultSpan.textContent = 'Congratulations you have woned'
    }

}


function flipCard () {
    let cardId = this.getAttribute('data-id');
    cartChosen.push(cardsArray[cardId].name);
    cartChosenID.push(cardId);
    // adding attribute to src 
    this.setAttribute('src', cardsArray[cardId].img);

    // checking for match
    if(cartChosen.length === 2) {
        setTimeout(checkForMatch, 500);
    }
}





createBoard();





});