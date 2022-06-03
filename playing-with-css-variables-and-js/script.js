(() => {
  const CONTROLS_CLASS_NAME = "page__controls";
  const INPUT_CLASS_NAME = "page__input";

  const inputs = document.querySelectorAll(
    `.${CONTROLS_CLASS_NAME}, .${INPUT_CLASS_NAME}`
  );

  function handleUpdate(e) {
    const suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(
      `--${this.name}`,
      this.value + suffix
    );
  }

  inputs.forEach((input) => input.addEventListener("change", handleUpdate));
  inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
})();
