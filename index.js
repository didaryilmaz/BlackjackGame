let player={
  name: "Didar",
  chips: 200
}

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let message = ""
let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
  let randomCard = Mathfloor(Mathrandom()*13)+1
  if ( randomCard > 10 ) {
    return 10
  } else if ( randomCard ===1) {
    return 11
  } else {
    return randomCard
  }
}

function startGame() {
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard , secondCard]
  sum = firstCard + secondCard
  renderGame()
}

function renderGame() {
  cardsEl.textContent = "Cards: "
  for (let i = 0 ; i < cards.length ; i++) {
    cardsEl.textContent += cards[i] + " "
  }

  sumEl.textContent = "Sum: " + sum
  if (sum <= 20){
    message = "Do you want to draw a new card?"
  } else if (sum === 21) {
    message = "You've got Blackjack!"
    hasBlackjack = true
  } else {
    message = "You're out of the game!"
    isAlive = false
  }
  messageEl.textContent = message
}

function newCard(){
  if (hasBlackjack === false && isAlive === true){
    let card = getRandomCard()
    cards.push(card)
    sum += card
    renderGame()
  }
}