function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      document.querySelector(".advice-id").textContent =
        `ADVICE #${data.slip.id}`;
      document.querySelector(".advice-text").textContent =
        `"${data.slip.advice}"`;
    })
    .catch((err) => console.error("API error:", err));
}

getAdvice();

document.querySelector(".dice-button").addEventListener("click", getAdvice);
