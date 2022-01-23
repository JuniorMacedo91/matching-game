const container = document.querySelector('.container')

const stacks = [
    'bootstrap','css','electron','firebase','html','javascript','jquery','mongo','node','react'
]

let allCards = ' ';
let firstCard, secondCard;
let blockCard = false;

playGame()

function playGame() {
    suffle(stacks)
    displayCards()
}

function displayCards() {
    stacks.forEach(stack =>{
        allCards += `<div class="card" data-icon="${stack}">
                        <div class="card__front">
                            <img src="./public/assets/${stack}.png">
                        </div>
                        <div class="card__back"></div>
                    </div>`
    })
    container.innerHTML = allCards + allCards
}

function suffle(stacks) {
    let currentIndex = stacks.length
    let randomIndex = 0;

    while(currentIndex !== 0){

        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--;

        [stacks[randomIndex], stacks[currentIndex]] = [stacks[currentIndex], stacks[randomIndex]]
    }
}

const cards = document.querySelectorAll('.card')

cards.forEach(card => card.addEventListener('click', flip))

function flip() {
    if(blockCard){
        return false
    }
    this.classList.add('flip-card')
    if(!firstCard){
        firstCard = this
        return false
    }
    secondCard = this
    checkMatch()
}

function checkMatch() {
    if(firstCard.dataset.icon === secondCard.dataset.icon){
        resetCards()
    }
    disabledCard()
}

function disabledCard() {
    setTimeout(() => {
        firstCard.classList.remove('flip-card')
        secondCard.classList.remove('flip-card')
        
        resetCards()
    }, 1000);
}

function  resetCards() {
    firstCard = null;
    secondCard = null;
    blockCard = false
}
