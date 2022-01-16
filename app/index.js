const container = document.querySelector('.container')
const FRONT = 'card_front'
const BACK = 'card_back'

const stacks = ['boostrap',
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

    console.log(allCards)
}

function displayCard(allCards) {
    
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

