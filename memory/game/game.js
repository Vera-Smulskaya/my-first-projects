class Game {
  constructor(timer) {
    this._timer = timer;
    this._openedCard = null;
    this._cardInProcess = false;
    this._finishedPairs = 0;
  }

  start() {
    this._createCards();
    this._timer.start();
  }

  _createCards() {
    const letters = [
      "A",
      "B",
      // "C",
      // "D",
      // "E",
      // "F",
      // "G",
      // "H",
      // "I",
      // "J",
      // "K",
      // "L",
      // "M",
      // "N",
      // "O",
      // "P",
      // "Q",
      // "R",
    ];
    const cardLetters = [...letters, ...letters];
    this._shuffle(cardLetters);
    this.cards = cardLetters.map((letter) => {
      return new Card(letter, (card) => {
        this._onCardClick(card);
      });
    });
    this._renderCards();
  }

  _renderCards() {
    const cardList = document.getElementById("cards-list");
    this.cards.forEach((card) => {
      cardList.appendChild(card.element);
    });
  }

  _shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  _saveResults(playerName) {
    const store = new Store("gameResults");
    store.add({ name: playerName, time: this._timer.time });
  }

  _finish() {
    this._timer.stop();
    const modal = new Modal(this._saveResults.bind(this));
    modal.open();
  }

  _checkFinishGame() {
    if (this._finishedPairs === this.cards.length / 2) {
      this._finish();
    }
  }

  _onCardClick(card) {
    if (card === this._openedCard || card.isFinished || this._cardInProcess) {
      return;
    }

    if (!this._openedCard) {
      card.open();
      this._openedCard = card;
      return;
    }

    if (card.key === this._openedCard.key) {
      card.open();
      card.markAsFinished();
      this._openedCard.markAsFinished();
      this._openedCard = null;
      this._finishedPairs++;
      this._checkFinishGame();
    } else {
      card.open();
      this._cardInProcess = true;
      setTimeout(() => {
        card.close();
        this._openedCard.close();
        this._openedCard = null;
        this._cardInProcess = false;
      }, 1000);
    }
  }
}

class Card {
  constructor(key, handleClick) {
    this._key = key;
    this._isFinished = false;
    this._element = document.createElement("div");
    this._element.className = "cards-list__back";
    this._element.onclick = () => {
      handleClick(this);
    };
  }

  get key() {
    return this._key;
  }

  get element() {
    return this._element;
  }

  get isFinished() {
    return this._isFinished;
  }

  markAsFinished() {
    this._isFinished = true;
  }

  open() {
    this._element.innerText = this._key;
  }

  close() {
    this._element.innerText = "";
  }
}

class Timer {
  constructor() {
    this._startTime = null;
    this._stopTime = null;
    this._element = document.querySelector(".timer__content");
    this.showTime();
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

  get formatedTime() {
    return new Date(this.time).toUTCString().split(" ")[4];
  }

  showTime() {
    this._element.innerText = this.formatedTime;
  }

  start() {
    this._stopTime = null;
    this._startTime = Date.now();
    this._showTimeInterval = setInterval(() => {
      this.showTime();
    }, 1000);
  }

  stop() {
    if (this._startTime) {
      this._stopTime = Date.now();
      clearInterval(this._showTimeInterval);
    }
  }

  reset() {
    this._startTime = null;
    this._stopTime = null;
  }
}

const timer = new Timer();
const game = new Game(timer);
game.start();

// _renderCards() {
//   const cardList = document.getElementById("cards-list");
//   this.cards.forEach((card) => {
//     cardList.appendChild(card.element);
//   });
// }
class Render {
  construstor() {
    //render()
  }
}

class Store {
  constructor(key) {
    this._key = key;
  }

  add(item) {
    const gameResults = this.getData();
    gameResults.push(item);
    const newGameResultsString = JSON.stringify(gameResults);
    localStorage.setItem(this._key, newGameResultsString);
  }

  getData() {
    const gameResultsString = localStorage.getItem(this._key);
    let gameResults = [];
    if (gameResultsString) {
      gameResults = JSON.parse(gameResultsString);
    }
    return gameResults;
  }
}

class Modal {
  constructor(onSendClick) {
    this._modalBlock = document.getElementById("modal");
    this._modalClose = document.querySelector(".modal__close");
    this._modalClose.onclick = () => this._close();
    this._buttonClick = document.querySelector(".modal__form-submit");
    const inputElement = document.getElementById("name");
    inputElement.oninput = (event) => {
      const nameIsEmpty = event.target.value === "";
      this.__buttonClick.disabled = nameIsEmpty;
    };
    this._buttonClick.onclick = () => {
      onSendClick(inputElement.value);
      this._close();
      return false;
    };
  }

  open() {
    this._modalBlock.classList.add("modal_active");
  }

  _close() {
    this._modalBlock.classList.remove("modal_active");
  }
}
