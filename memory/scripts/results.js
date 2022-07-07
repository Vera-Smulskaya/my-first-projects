class Result {
  constructor() {
    this._tableBody = document.querySelector("table__body");
    this._newRow = document.createElement("tr");
    this._cellName = document.createElement("td");
    this._cellName.innerText = "Name";
    this._cellResult = document.createElement("td");
    this._cellResult.innerText = "Result";

    this._tableBody.appendChild(this._newRow);
    this._newRow.appendChild(this._cellName);
    this._newRow.appendChild(this._cellResult);



  }

  get tableBody() {
    return this._tableBody
    }
}

//   const game = new Game(timer);
//   game.start();
// const result1 = new Result();
// console.log(result1.tableBody());

// const resultString = localStorage.getItem("gameResults");
// const result = JSON.parse(resultString);
// console.log(result[0]);


// _saveResults(playerName) {
//   const store = new Store("gameResults");
//   store.add({ name: playerName, time: this._timer.time });
// }
