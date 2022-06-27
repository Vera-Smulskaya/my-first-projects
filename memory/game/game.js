//  class Card {
//     constructor(cardSelector, handleCardClickFunction) {
//         this._cardSelector = cardSelector;
//         this._element = this._getElement();
//         this._handleCardClick = handleCardClickFunction;
//       }
// }

// const arrLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R'];

// const arrCards = [...arrLetters, ...arrLetters];

// function shuffle(array) {
//     array.sort(() => Math.random() - 0.5);
//     console.log(array);
//   }
//   shuffle(arrCards);

//   function renderCard(letter) {
//     return `<div class="cards__front">${letter}</div>`
//   }

//  function renderCards() {
//  const listElement = document.getElementById('card-list');
//  const cardsHtml = arrCards.map(renderCard).join('');
//  listElement.innerHTML = cardsHtml;
//  }
//  renderCards();

// arrCards.forEach(card => {
//         card.addEventListener("click", flipCard);
// })

// function flipCard() {
//     // document.getElementById("back").style.display = "none";
//     // document.getElementById("front").style.display = "flex";
//     }
// flipCard();

class Game {
  constructor(timer) {
    this._timer = timer;
  }
  createCards() {
    const letters = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
    ];
    const cardLetters = [...letters, ...letters];
    this.shuffle(cardLetters);
  }

  shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    console.log(array);
  }
}

class Timer {
  constructor() {
    this._startTime = null;
    this._stopTime = null;
  }

  get time() {
    if (!this._startTime) {
      return 0;
    } else if (this._startTime && !this._stopTime) {
      return Date.now() - this._startTime;
    } else if (this._stopTime) {
      return this._stopTime - this._startTime;
    }
  }

  start() {
    this._stopTime = null;
    this._startTime = Date.now();
  }

  stop() {
    if(this._startTime) {
    this._stopTime = Date.now();
  }
  }

  reset() {
    this._startTime = null;
    this._stopTime = null;
  }
}

const timer = new Timer();
const game = new Game(timer);
game.createCards();

