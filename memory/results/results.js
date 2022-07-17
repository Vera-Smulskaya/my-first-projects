class Results {
  constructor(render) {
    const store = new Store("gameResults");
    const resultsData = store.getData();
    resultsData.sort((a, b) => {
      if (a.time === b.time) return 0;
      return a.time > b.time ? 1 : -1;
    });

    const tableRowsStrings = resultsData.map(({ name, time }) => {
      const formatedTime = TimeFormater.formatTime(time);
      return `<tr class="table__row">
      <td class="table__data">${name}</td>
      <td class="table__data">${formatedTime}</td>
    </tr>`;
    });
    const tableBodyContent = tableRowsStrings.join("");
    const tableBody = render.createElement({tagName: "tbody", className: "table__body", content: tableBodyContent});
    render.renderElement(".page__table", tableBody);
  }
}

const render = new Render();
const results = new Results(render);



