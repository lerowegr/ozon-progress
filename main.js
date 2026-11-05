class Progress {
  constructor(element) {
    this.element = element;
    this.circle = element.querySelector(".progress__circle");
    this.value = 60;
  }

  setValue(value) {
    this.value = Math.min(100, Math.max(0, Number(value) || 0));
    this.circle.style.setProperty("--value", this.value);
    this.element.setAttribute("aria-valuenow", this.value);
  }

  setAnimated(isAnimated) {
    this.circle.classList.toggle("progress__circle--animated", isAnimated);
  }

  setHidden(isHidden) {
    this.element.classList.toggle("progress--hidden", isHidden);
  }
}

const progress = new Progress(document.querySelector("#progress"));
const valueInput = document.querySelector("#value");
const animateInput = document.querySelector("#animate");
const hideInput = document.querySelector("#hide");

valueInput.addEventListener("input", () => {
  progress.setValue(valueInput.value);
});

valueInput.addEventListener("change", () => {
  progress.setValue(valueInput.value);
  valueInput.value = progress.value;
});

animateInput.addEventListener("change", () => {
  progress.setAnimated(animateInput.checked);
});

hideInput.addEventListener("change", () => {
  progress.setHidden(hideInput.checked);
});
