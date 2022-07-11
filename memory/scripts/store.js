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
  
