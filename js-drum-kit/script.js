(() => {
  const KEY_ELEMENT_CLASS_NAME = "keys__item";
  const KEY_ELEMENT_CLASS_NAME_ACTIVE = "keys__item_playing";

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(
      `.${KEY_ELEMENT_CLASS_NAME}[data-key="${e.keyCode}"]`
    );

    if (!audio) return;

    audio.currentTime = 0;
    audio.play();
    key.classList.add(KEY_ELEMENT_CLASS_NAME_ACTIVE);
  }

  function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove(KEY_ELEMENT_CLASS_NAME_ACTIVE);
  }

  function initEvents() {
    document.querySelectorAll(`.${KEY_ELEMENT_CLASS_NAME}`).forEach((key) => {
      key.addEventListener("transitionend", removeTransition);
    });

    window.addEventListener("keydown", playSound);
  }

  initEvents();
})();
