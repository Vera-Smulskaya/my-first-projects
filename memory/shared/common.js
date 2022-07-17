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
  
  class Render {
    renderList(selector, listItems) {
      const listElement = document.querySelector(selector);
  
      listItems.forEach((item) => {
        listElement.appendChild(item);
      });
    }
  
    createElement({tagName, className, content, onclick}) {
      const element = document.createElement(tagName);
      element.className = className;
  
      element.innerHTML = content;
  
      element.onclick = onclick;
  
      return element;
    }

    renderElement(parentSelector, element) {
      const parentElement = document.querySelector(parentSelector);

      parentElement.appendChild(element);
    }
  }

  class TimeFormater {
    static formatTime(time) {
      return new Date(time).toUTCString().split(" ")[4];
    } 
  }
  
  