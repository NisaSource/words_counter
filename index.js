(function() {
  const wording = [
    "Do you like JavaScript?",
    "Hope you like it as much as I do.",
    "Enjoy the time!."
  ];
  let startTime, endTime;
  const message = document.querySelector(".message");
  const playText = document.querySelector("textArea");
  const button = document.querySelector("button");

  function playGame() {
    let randomNum = Math.floor(Math.random() * wording.length);
    message.innerText = wording[randomNum];
    let date = new Date();
    startTime = date.getTime();
    button.innerText = "Done";
  }

  function wordCounter(strWords) {
    let response = strWords.split(" ").length;
    return response;
  }

  function compareWords(str1, str2) {
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let cnt = 0;
    words1.forEach((item, index) => {
      if (item === words2[index]) {
        cnt++;
      }
    });
    return `${cnt} correct out of ${words1.length} words`;
  }

  function endPlay() {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = (endTime - startTime) / 1000;
    let str = playText.value;
    let wordCount = wordCounter(str);
    let speed = Math.round((wordCount / totalTime) * 60);
    let finalMessage = "You typed at " + speed + " words per minute.";
    finalMessage += "<br>" + compareWords(message.innerText, str);
    message.innerHTML = finalMessage;
  }

  button.addEventListener("click", function() {
    if (this.innerText == "Start!") {
      playText.disabled = false;
      playGame();
    } else if (this.innerText == "Done") {
      playText.disabled = true;
      button.innerText = "Start!";
      endPlay();
    }
  });
})();
