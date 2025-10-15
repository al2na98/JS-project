const cityInput = document.getElementById("citySearch");

// событие при нажатии Enter (поиск)
cityInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault(); // чтобы форма не отправлялась
    console.log("Город:", cityInput.value);
  }
});
