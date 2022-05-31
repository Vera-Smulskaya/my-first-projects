(() => {
    const HOURS_BLOCK = "clock__hours";
    const MINUTES_BLOCK = "clock__minutes";
    const SECONDS_BLOCK = "clock__seconds";

function clock() {
  const hoursArrow = document.querySelector(`.${HOURS_BLOCK}`);
  const minutesArrow = document.querySelector(`.${MINUTES_BLOCK}`);
  const secondsArrow = document.querySelector(`.${SECONDS_BLOCK}`);
  const deg = 6;

  setInterval(() => {
    const day = new Date();

    const hours = day.getHours() * 30;
    const minutes = day.getMinutes() * deg;
    const seconds = day.getSeconds() * deg;

    hoursArrow.style.transform = `rotateZ(${hours + minutes / 12}deg)`;
    minutesArrow.style.transform = `rotateZ(${minutes}deg)`;
    secondsArrow.style.transform = `rotateZ(${seconds}deg)`;
  }, 0);
}

clock();
})();
