(() => {
  const dataTransactions = [
    {
      applicationName: "Figma",
      applicationIcon: "assets/figma.png",
      applicationUrl: "www.figma.com/",
      typeCard: "Visa",
      numberCard: "***** 2468",
      userName: "Itai Brach",
      emailUser: "ItaiBracha31@gmail.com",
      dateLastTransaction: 1641074400000,
      sumLastTransaction: "$783.22",
      statusTransaction: "Done",
      dateEndTransaction: 1641938400000,
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
      dateLastTransaction: 1641333600000,
      sumLastTransaction: "$783.22",
      statusTransaction: "Done",
      dateEndTransaction: 1642629600000,
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
      dateLastTransaction: 1643752800000,
      sumLastTransaction: "$783.22",
      statusTransaction: "Done",
      dateEndTransaction: 1644616800000,
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
      dateLastTransaction: 1649451600000,
      sumLastTransaction: "$783.22",
      statusTransaction: "Pending",
      dateEndTransaction: 1651179600000,
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
      dateLastTransaction: 1641074400000,
      sumLastTransaction: "$783.22",
      statusTransaction: "Done",
      dateEndTransaction: 1641938400000,
      totalSum: "$883.22",
      iconDots: "assets/dots.png",
    },
  ];

  const ELEMENT_SELECT = document.getElementById("sort");
  const SORTING_OFF_CLASS = "filters__sorting_off";
  const SORTING_ASC_CLASS = "filters__sorting_asc";
  const SORTING_DESC_CLASS = "filters__sorting_desc";
  const SORT_BUTTON = document.getElementById("button-sorting");
  const SORT_DIRECTION = {
    ASC: 0,
    DSC: 1,
    DEFAULT: 2,
  };
  const ELEMENT_SEARCH = document.getElementById("search-transaction-name");
  const ELEMENT_USER_NAME = document.getElementById("filter-user-name");
  const ELEMENT_STATUS = document.getElementById("filter-status-transaction");

  function fillTable(data) {
    if (data.length === 0) {
      fillNoData();

      return;
    }

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

        const formatDate = (date) =>
          new Date(date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          });

        return `
        <tr>
            <td rowspan="2">
                <div class="table__square"></div>
            </td>
            <td rowspan="2" class="table__icon">
                <img src="${applicationIcon}" alt="icon"/>
            </td>
            <td class="table__item-name">${applicationName}</td>
            <td class="table__item-name">${typeCard}</td>
            <td class="table__item-name">${userName}</td>
            <td class="table__item-name">${formatDate(dateLastTransaction)}</td>
            <td rowspan="2" class="${classNameStatus}">
              <div class="table__status status">
                <div class="status__icon"></div>
                <div>${statusTransaction}</div>
              </div>
            </td>
            <td rowspan="2">${formatDate(dateEndTransaction)}</td>
            <td rowspan="2" class="table__total-sum">${totalSum}</td>
            <td rowspan="2" class="table__dots">
                <img src="${iconDots}" alt="icon"/>
            </td>
        </tr>
        <tr>
            <td class="table__details">
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

    document.querySelector("tbody").innerHTML = dataTransactionsTable.join("");
  }
  fillTable(dataTransactions);

  function fillNoData() {
    document.querySelector("tbody").innerHTML = `<td colspan="9">
                         <div class="table__no-data">there is no such data in the table</div>
                         </td>`;
  }

  function initFilters() {
    [ELEMENT_SEARCH, ELEMENT_USER_NAME, ELEMENT_STATUS].forEach((element) =>
      element.addEventListener("input", filter)
    );
  }
  initFilters();

  function filter() {
    const isIncludes = (value, element) =>
      value.toLowerCase().includes(element.value.toLowerCase());

    const filteredData = dataTransactions.filter((item) => {
      return (
        isIncludes(item.applicationName, ELEMENT_SEARCH) &&
        isIncludes(item.userName, ELEMENT_USER_NAME) &&
        isIncludes(item.statusTransaction, ELEMENT_STATUS)
      );
    });

    filterDate(filteredData);
  }

  function initFiltersDate() {
    ["filter-date-start-transaction", "filter-date-end-transaction"].forEach(
      (id) => document.getElementById(id).addEventListener("input", filter)
    );
  }
  initFiltersDate();

  const dataObj = {
    data: dataTransactions,
    sortDirection: SORT_DIRECTION.DEFAULT,
  };

  function filterDate(data) {
    const dateStart = document.getElementById(
      "filter-date-start-transaction"
    ).value;
    const dateEnd = document.getElementById(
      "filter-date-end-transaction"
    ).value;
    const dateStartSeconds = new Date(dateStart).getTime();
    const dataEndSeconds = new Date(dateEnd).getTime();

    const cases = {
      onlyStartDate: 0,
      onlyEndDate: 1,
      noDates: 2,
      bothDates: 3,
    };
    const currentCase =
      !dateStart && !dateEnd
        ? cases.noDates
        : !dateStart
        ? cases.onlyEndDate
        : !dateEnd
        ? cases.onlyStartDate
        : cases.bothDates;

    switch (currentCase) {
      case cases.onlyStartDate:
        filterTableByDate((item) => {
          return dateStartSeconds <= item.dateLastTransaction;
        });
        break;

      case cases.onlyEndDate:
        filterTableByDate((item) => {
          return item.dateLastTransaction <= dataEndSeconds;
        });
        break;

      case cases.noDates:
        dataObj.data = data;
        sortTable();
        break;

      case cases.bothDates:
        filterTableByDate((item) => {
          const dateSeconds = item.dateLastTransaction;
          return (
            dateStartSeconds <= dateSeconds && dateSeconds <= dataEndSeconds
          );
        });
        break;
    }

    function filterTableByDate(filterByDate) {
      const filteredData = data.filter(filterByDate);
      dataObj.data = filteredData;
      sortTable();
    }
  }

  function initSelect() {
    ELEMENT_SELECT.addEventListener("change", () => {
      sortTable();
    });

    SORT_BUTTON.addEventListener("click", () => {
      const classList = SORT_BUTTON.classList;
      if (classList.contains(SORTING_OFF_CLASS)) {
        classList.replace(SORTING_OFF_CLASS, SORTING_ASC_CLASS);
        dataObj.sortDirection = SORT_DIRECTION.ASC;
      } else if (classList.contains(SORTING_ASC_CLASS)) {
        classList.replace(SORTING_ASC_CLASS, SORTING_DESC_CLASS);
        dataObj.sortDirection = SORT_DIRECTION.DSC;
      } else {
        classList.replace(SORTING_DESC_CLASS, SORTING_OFF_CLASS);
        dataObj.sortDirection = SORT_DIRECTION.DEFAULT;
      }

      sortTable();
    });
  }

  initSelect();

  function sortTable() {
    const sortDirection = dataObj.sortDirection;
    const sortField = ELEMENT_SELECT.value;

    if (sortDirection === SORT_DIRECTION.DEFAULT) {
      fillTable(dataObj.data);

      return;
    }

    const dataCopy = [...dataObj.data];

    dataCopy.sort((a, b) => {
      if (a[sortField] === b[sortField]) return 0;

      let result = a[sortField] > b[sortField] ? 1 : -1;

      if (sortDirection === SORT_DIRECTION.DSC) {
        result = -result;
      }

      return result;
    });

    fillTable(dataCopy);
  }
})();
