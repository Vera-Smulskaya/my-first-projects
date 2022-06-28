
class Game {
  constructor(timer) {
    this._timer = timer;
    this._openedCard = null;
    this._cardInProcess = false;
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
    this.cards = cardLetters.map((letter) => {
      return new Card(letter, (card) => {this.onCardClick(card)});
    });
    this.renderCards();
  }

  renderCards() {
    const cardList = document.getElementById("card-list");
    this.cards.forEach((card) => {
      cardList.appendChild(card.element);
    });
  }

  shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  start() {
    this.createCards();
    this._timer.start();
  }

  onCardClick(card) {
    if (card === this._openedCard || card.isFinished || this._cardInProcess) {
      return;
    }

    if (!this._openedCard) {
      card.open();
      this._openedCard = card;
      return;
    } 

    if (card._id === this._openedCard._id) {
      card.open();
      card.isFinished = true;
      this._openedCard.isFinished = true;
      this._openedCard = null;
    } else {
      card.open();
      this._cardInProcess = true;
      setTimeout(() => {
        card.close();
        this._openedCard.close();
        this._openedCard = null;
        this._cardInProcess = false;
      }, 1000)  
    }
    
  }
}

class Card {
  constructor(id, handleClick) {
    this._id = id;
    this._isFinished = false;
    this._element = document.createElement("div");
    this._element.onclick = () => {
      handleClick(this);
    };
    this._element.className = "cards__back";
  }

  get element() {
    return this._element;
  }

  get isFinished() {
    return this._isFinished;
  }

  set isFinished(flag) {
    this._isFinished = flag;
  }

  open() {
    this._element.innerText = this._id;
  }

  close() {
    this._element.innerText = "";
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
    if (this._startTime) {
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
