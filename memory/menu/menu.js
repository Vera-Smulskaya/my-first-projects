(() => {
 const startGameButton = document.querySelector(".menu__start-game");
 const menuResultsButton = document.querySelector(".menu__results");

 startGameButton.addEventListener("click", movePageGame);
 menuResultsButton.addEventListener("click", movePageResults);

 function movePageGame() {
   document.location.assign("file:///Users/Vera/Desktop/js/memory/game/game.html");
 }

 function movePageResults() {
    document.location.assign("file:///Users/Vera/Desktop/js/memory/results/%20results.html");
  }
})();



