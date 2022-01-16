const container = document.querySelector('.container')

const stacks = [
    'bootstrap',
    'css',
    'electron',
    'firebase',
    'html',
    'javascript',
    'jquery',
    'mongo',
    'node',
    'react'
]

let allCards = null;

startGame()

function startGame() {
    allCards = creatCards(stacks)
    suffle(allCards)
    displayCard(allCards)
}

function displayCard(allCards) {
    
    allCards.forEach(card =>{
        const cardElement = document.createElement('div')
        cardElement.id = card.id
        cardElement.classList.add('card')
        cardElement.dataset.icon = card.icon

        const cardFront = document.createElement('div')
        const imageFront = document.createElement('img')
        cardFront.classList.add('card__front')
        imageFront.setAttribute('src', `./public/assets/${card.icon}.png`)
        cardFront.appendChild(imageFront)
        cardElement.appendChild(cardFront)

        const cardBack = document.createElement('div')
        cardBack.classList.add('card__back')
        cardElement.appendChild(cardBack)
        
        container.appendChild(cardElement)

        cardElement.addEventListener('click', flip)
    })

    console.log(allCards)
}

function suffle(allCards) {
    let currentIndex = allCards.length
    let randomIndex = 0;

    while(currentIndex !== 0){

        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--;

        [allCards[randomIndex], allCards[currentIndex]] = [allCards[currentIndex], allCards[randomIndex]]
    }
}

function creatCards(stacks) {
    
    const cards = []

    stacks.forEach(stack =>{
        cards.push(creatPairOfStacks(stack))
    })

    return cards.flatMap(stack => stack)

}

function  creatPairOfStacks(stack) {
    return [{
        id: creatId(stack),
        icon: stack,
        flipped: false
    },{
        id: creatId(stack),
        icon: stack,
        flipped: false
    }]
}

function creatId(stack) {
    return stack + parseInt(Math.random() * 1000)
}

function flip() {
    this.classList.add('flip-card')
}

