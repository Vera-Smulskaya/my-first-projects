(() => {
  function initBurgerMenu() {
    const menuButton = document.querySelector(".header__burger-button");

    const menu = document.getElementById("header__burger-menu");

    const visibleMenuClassName = "visible";

    function toggeMenu(flag) {
      menuButton.classList.toggle("header__burger-button_active", flag);
      menuButton
        .querySelector(".header__burger-button-item")
        .classList.toggle("header__burger-button-item_active", flag);
      menu.classList.toggle(visibleMenuClassName, flag);

      const menuIsOpened = menu.classList.contains(visibleMenuClassName);

      if (menuIsOpened) {
        document.documentElement.style.overflow = "hidden";
      } else {
        document.documentElement.style.overflow = "auto";
      }
    }

    menuButton.addEventListener("click", () => {
      toggeMenu();
    });

    const mobileMenuLinks = document.querySelectorAll(".mobile-menu__link");

    mobileMenuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        toggeMenu(false);
      });
    });
  }
  initBurgerMenu();

  function renderServices() {
    const servicesData = [
      {
        title: "Problemas digestivos",
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
      },

      {
        title: "Saúde Hormonal",
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
      },

      {
        title: "Bem-estar mental",
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
      },

      {
        title: "Cuidados Pediátricos",
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
      },

      {
        title: "Autoimune e Inflamação",
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
      },

      {
        title: "Saúde do Coração",
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
      },
    ];

    const servicesDataHtml = servicesData.map(({ title, text }) => {
      return `
        <a href="/" class="service__link">
                            <div class="service__block">
                                <div class="service__icon">
                                    <img src="assets/check.png" alt="icon">
                                </div>
                                <h3 class="service__subtitle">${title}</h3>
                                <p class="service__desc">
                                    ${text}
                                </p>
                            </div>
                        </a>
        `;
    });

    const container = document.querySelector(".service__container");

    container.innerHTML = servicesDataHtml.join("");
  }
  renderServices();

  function initModal() {
    const buttons = document.querySelectorAll("button");
    const modal = document.getElementById("modal");

    const closeButton = document.querySelector(".modal__close");
    const closeSubmit = document.querySelector(".modal__form-submit");

    closeButton.addEventListener("click", closeModal);
    closeSubmit.addEventListener("click", closeModal);

    function closeModal() {
      modal.classList.remove("modal_active");
    }

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        modal.classList.add("modal_active");
      });
    });
  }
  initModal();
})();
