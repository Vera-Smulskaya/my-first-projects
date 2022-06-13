const dataTransactions = [
  {
    applicationName: "Figma",
    applicationIcon: "assets/figma.png",
    applicationUrl: "www.figma.com/",
    typeCard: "Visa",
    numberCard: "***** 2468",
    userName: "Itai Brach",
    emailUser: "ItaiBracha31@gmail.com",
    dateLastTransaction: "Jan 2,2022",
    sumLastTransaction: "$783.22",
    statusTransaction: "Done",
    dateEndTransaction: "Jan 12,2022",
    totalSum: "$783.22",
    iconDots: "assets/dots.png",
  },
  {
    applicationName: "Adobe XD",
    applicationIcon: "assets/adobe-xd.png",
    applicationUrl: "https://www.adobe.com/",
    typeCard: "Visa",
    numberCard: "***** 2468",
    userName: "Natali Bolgar",
    emailUser: "ItaiBracha31@gmail.com",
    dateLastTransaction: "Jan 5,2022",
    sumLastTransaction: "$783.22",
    statusTransaction: "Done",
    dateEndTransaction: "Jan 20,2022",
    totalSum: "$783.22",
    iconDots: "assets/dots.png",
  },
  {
    applicationName: "Mailchimp",
    applicationIcon: "assets/mailchimp.png",
    applicationUrl: "https://mailchimp.com/",
    typeCard: "Visa",
    numberCard: "***** 2468",
    userName: "Iren Parady",
    emailUser: "ItaiBracha31@gmail.com",
    dateLastTransaction: "Feb 2,2022",
    sumLastTransaction: "$783.22",
    statusTransaction: "Done",
    dateEndTransaction: "Feb 12,2022",
    totalSum: "$783.22",
    iconDots: "assets/dots.png",
  },
  {
    applicationName: "WIX",
    applicationIcon: "assets/wix.png",
    applicationUrl: "https://wix.com/",
    typeCard: "Visa",
    numberCard: "***** 2468",
    userName: "Itai Brach",
    emailUser: "ItaiBracha31@gmail.com",
    dateLastTransaction: "Apr 9,2022",
    sumLastTransaction: "$783.22",
    statusTransaction: "Pending",
    dateEndTransaction: "Apr 29,2022",
    totalSum: "$683.22",
    iconDots: "assets/dots.png",
  },
  {
    applicationName: "Youtube",
    applicationIcon: "assets/youtube.png",
    applicationUrl: "mailto:Itaibracha31@gmail.com",
    typeCard: "Visa",
    numberCard: "***** 2468",
    userName: "Itai Brach",
    emailUser: "ItaiBracha31@gmail.com",
    dateLastTransaction: "Jan 2,2022",
    sumLastTransaction: "$783.22",
    statusTransaction: "Done",
    dateEndTransaction: "Jan 12,2022",
    totalSum: "$883.22",
    iconDots: "assets/dots.png",
  },
];

function fillTable(data) {
  const dataTransactionsTable = data.map(
    ({
      applicationName,
      applicationIcon,
      applicationUrl,
      typeCard,
      numberCard,
      userName,
      emailUser,
      dateLastTransaction,
      sumLastTransaction,
      statusTransaction,
      dateEndTransaction,
      totalSum,
      iconDots,
    }) => {
      const classNameStatus =
        statusTransaction === "Done" ? "status_done" : "status_pending";
      return `
        <tr>
            <td rowspan="2">
                <div class="table__square"></div>
            </td>
            <td rowspan="2" class="table__icon">
                <img src="${applicationIcon}" alt="icon"/>
            </td>
            <td>${applicationName}</td>
            <td>${typeCard}</td>
            <td>${userName}</td>
            <td>${dateLastTransaction}</td>
            <td rowspan="2" class="table__status status ${classNameStatus}">
                <div class="status__icon"></div>
                <div>${statusTransaction}</div>
            </td>
            <td rowspan="2">${dateEndTransaction}</td>
            <td rowspan="2" class="table__total-sum">${totalSum}</td>
            <td rowspan="2" class="table__dots">
                <img src="${iconDots}" alt="icon"/>
            </td>
        </tr>
        <tr>
            <td>
                <a href="//www.figma.com/" class="table__details">${applicationUrl}</a>
            </td>
            <td class="table__details">${numberCard}</td>
            <td class="table__details"><a href="mailto:Itaibracha31@gmail.com"
                    class="table__user-mail">${emailUser}</a></td>
            <td class="table__details">${sumLastTransaction}</td>
        </tr>
        `;
    }
  );

  const tableData = document.querySelector("tbody");
  tableData.innerHTML = dataTransactionsTable.join("");
}
fillTable(dataTransactions);

function initFilters() {
  const elementSearch = document.getElementById("search-transaction-name");
  elementSearch.addEventListener("input", (event) => {
    filter(event.target.value, "applicationName");
    console.log(event.target.value, "applicationName");
  });

  const elementUserName = document.getElementById("filter-user-name");
  elementUserName.addEventListener("input", (event) => {
    filter(event.target.value, "userName");
  });

  const elementStatus = document.getElementById("filter-status-transaction");
  elementStatus.addEventListener("input", (event) => {
    filter(event.target.value, "statusTransaction");
  });
}
initFilters();

function filter(searchValue, field) {
  const filteredData = dataTransactions.filter((item) => {
    return item[field].toLowerCase().includes(searchValue.toLowerCase());
  });
  fillTable(filteredData);
}

function initFiltersDate() {
  const elementDateStart = document.getElementById(
    "filter-date-start-transaction"
  );
  elementDateStart.addEventListener("input", () => {
    filterDate();
  });

  const elementDateEnd = document.getElementById("filter-date-end-transaction");
  elementDateEnd.addEventListener("input", () => {
    filterDate();
  });
}
initFiltersDate();

function filterDate() {
  const dateStart = document.getElementById(
    "filter-date-start-transaction"
  ).value;
  const dateEnd = document.getElementById("filter-date-end-transaction").value;
  const dateStartSeconds = new Date(dateStart).getTime();
  console.log(dateEnd);
  const dataEndSeconds = new Date(dateEnd).getTime();

  console.log({ dateStart, dateEnd });
  const filteredData = dataTransactions.filter((item) => {
    const date = item.dateLastTransaction;
    const dateSeconds = new Date(date).getTime();
    return dateStartSeconds <= dateSeconds && dateSeconds <= dataEndSeconds;
  });
  fillTable(filteredData);
}

const elementSelect = document.getElementById("sort");
const dataTransactionsCopy = [...dataTransactions];

const SORTING_OFF_CLASS = "filtres__sorting_off";
const SORTING_ASC_CLASS = "filtres__sorting_asc";
const SORTING_DESC_CLASS = "filtres__sorting_desc";

const sortButton = document.getElementById("button-sorting");

function initSelect() {
  elementSelect.addEventListener("change", (event) => {
    sortTable();
  });

  sortButton.addEventListener("click", () => {
    const classList = sortButton.classList;
    if (classList.contains(SORTING_OFF_CLASS)) {
      classList.replace(SORTING_OFF_CLASS, SORTING_ASC_CLASS);
      sortTable(true);
    } else if (classList.contains(SORTING_ASC_CLASS)) {
      classList.replace(SORTING_ASC_CLASS, SORTING_DESC_CLASS);
      sortTable(false);
    } else {
      classList.replace(SORTING_DESC_CLASS, SORTING_OFF_CLASS);
      sortTable();
    }
  });
}
initSelect();

function sortTable(isAsc) {
  const sortField = elementSelect.value;

  if (isAsc === undefined) {
    fillTable(dataTransactions);

    return;
  }

  dataTransactionsCopy.sort((a, b) => {
    if (a[sortField] === b[sortField]) return 0;

    let result;

    if (
      sortField === "dateLastTransaction" ||
      sortField === "dateEndTransaction"
    ) {
      const aDateSeconds = new Date(a[sortField]).getTime();
      const bDateSeconds = new Date(b[sortField]).getTime();

      result = aDateSeconds > bDateSeconds ? 1 : -1;
    } else {
      result = a[sortField] > b[sortField] ? 1 : -1;
    }
    
    if (!isAsc) {
      result = -result;
    }

    return result;
  });

  fillTable(dataTransactionsCopy);
}
