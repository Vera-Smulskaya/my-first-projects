(() => {
  function initBurgerMenu() {
    const menuButton = document.querySelector(".header__burger-button");

    const menu = document.getElementById("header-burger-menu");

    const visibleMenuClassName = "visible";

    function toggleMenu() {
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
    const headerButton = document.getElementById("header-button");
    const headerMobileButton = document.getElementById("header-mobile-button");
    const startButton = document.getElementById("start-button");
    const contuctUsButton = document.getElementById("contact-us-button");
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

  function initHeaderLinks() {
    const anchors = document.querySelectorAll("a[id]");

    function getCurrentAnchor() {
      const underlinedClassName = "nav-menu__item_underlined";

      let maxHeight = 0;
      let activeMenuItem;

      function getAnchorScreenHeight(anchor) {
        const rect = anchor.getBoundingClientRect();
        const elementIsOutTop = rect.y + rect.height <= 0;
        const elementIsOutBottom = rect.y > window.innerHeight;
        const elementWholeIsIn =
          rect.y > 0 && rect.y + rect.height < window.innerHeight;

        if (elementIsOutTop || elementIsOutBottom) {
          return 0;
        }

        if (elementWholeIsIn) {
          return rect.height;
        }

        return rect.y > 0 ? window.innerHeight - rect.y : rect.height + rect.y;
      }

      anchors.forEach((anchor) => {
        const relatedLink = document.querySelector(
          `.nav-menu__link[href="#${anchor.id}"]`
        );
        relatedLink.classList.remove(underlinedClassName);

        const anchorScreenHeight = getAnchorScreenHeight(anchor);

        if (anchorScreenHeight > maxHeight) {
          maxHeight = anchorScreenHeight;
          activeMenuItem = relatedLink;
        }
      });

      activeMenuItem.classList.add(underlinedClassName);
    }

    getCurrentAnchor();

    window.addEventListener("scroll", getCurrentAnchor);
  }

  initHeaderLinks();

  const header = document.querySelector("header");
  const addClassOnScroll = () => header.classList.remove("header_light");
  const removeClassOnScroll = () => header.classList.add("header_light");

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 1) {
      addClassOnScroll();
    } else {
      removeClassOnScroll();
    }
  });
})();
