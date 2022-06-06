(() => {
  function initBurgerMenu() {
    const menuButton = document.querySelector(".header__burger-button");

    const menu = document.getElementById("header__burger-menu");

    const visibleMenuClassName = "visible";

    function toggleMenu(flag) {
      menuButton.classList.toggle("header__burger-button_active");
      menuButton
        .querySelector(".header__burger-button-item")
        .classList.toggle("header__burger-button-item_active");
      menu.classList.toggle(visibleMenuClassName);

      const menuIsOpened = menu.classList.contains(visibleMenuClassName);

      if (menuIsOpened) {
        document.documentElement.style.overflow = "hidden";
      } else {
        document.documentElement.style.overflow = "auto";
      }
    }

    menuButton.addEventListener("click", () => {
      toggleMenu();
    });

    const mobileMenuLinks = document.querySelectorAll(".mobile-menu__link");

    mobileMenuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        toggleMenu(false);
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
    const headerButton = document.getElementById("header__button");
    const headerMobileButton = document.getElementById("header__mobile-button");
    const startButton = document.getElementById("start__button");
    const contuctUsButton = document.getElementById("contact-us__button");
    const modal = document.getElementById("modal");

    const buttons = [
      headerButton,
      headerMobileButton,
      startButton,
      contuctUsButton,
    ];

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

  const anchors = document.querySelectorAll("a[id]");

  function getCurrentAnchor() {
    const underlinedClassName = "nav-menu__item_underlined";
    const scrollYTop = window.scrollY;
    const scrollYBottom = scrollYTop + window.innerHeight / 2;

    anchors.forEach((ancor) => {
      const ancorYTop = ancor.getBoundingClientRect().top + scrollYTop;
      const relatedLink = document.querySelector(
        `.nav-menu__link[href="#${ancor.id}"]`
      );
      relatedLink.classList.remove(underlinedClassName);

      if (ancorYTop >= scrollYTop && ancorYTop < scrollYBottom) {
        relatedLink.classList.add(underlinedClassName);
      }
    });
  }

  getCurrentAnchor();

  window.addEventListener("scroll", getCurrentAnchor);
})();
