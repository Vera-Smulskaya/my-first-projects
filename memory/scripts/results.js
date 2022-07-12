class Results {
  constructor() {
    const store = new Store("gameResults");
    const resultsData = store.getData();
    resultsData.sort((a, b) => {
      if (a.time === b.time) return 0;
      return a.time > b.time ? 1 : -1;
    });

    this._tableBody = document.querySelector(".table__body");
    const tableRowsStrings = resultsData.map(({ name, time }) => {
      const formatedTime = new Date(time).toUTCString().split(" ")[4];
      return `<tr class="table__row">
      <td class="table__data">${name}</td>
      <td class="table__data">${formatedTime}</td>
    </tr>`;
    });
    this._tableBody.innerHTML = tableRowsStrings.join("");
  }
}

const results = new Results();

