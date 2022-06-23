//  class Card {
//     constructor(cardSelector, handleCardClickFunction) {
//         this._cardSelector = cardSelector;
//         this._element = this._getElement();
//         this._handleCardClick = handleCardClickFunction;
//       }
// }

// class Field {

// }
const arrLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R'];

const arrCards = [...arrLetters, ...arrLetters];

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    console.log(array);
  }
  shuffle(arrCards); 
 
  function renderCard(letter) {
    return `<div class="cards__element">${letter}</div>`          
  } 

 function renderCards() {
 const listElement = document.getElementById('card-list');
 const cardsHtml = arrCards.map(renderCard).join('');
 listElement.innerHTML = cardsHtml;
 }
 renderCards();


// _getElement() {
//     const cardElement = document.querySelector(this._cardSelector).content.querySelector('.cards__element');
//     return cardElement;
// }


// const cards = document.querySelectorAll('.cards__element');
// console.log(cards);

// const arrCard = Array.from(document.querySelectorAll('.cards__element'))
// console.log(arrCard);

// arrCard.forEach(card => {
//         card.addEventListener("click", flipCard);
// })

// function flipCard() {
//     document.getElementById("back").style.display = "none";
//     document.getElementById("front").style.display = "flex";
//     }
// flipCard();

// (document.getElementById("back").style.display = "none") && (document.getElementById("front").style.display = "flex");



