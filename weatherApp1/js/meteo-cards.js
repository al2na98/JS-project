document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("meteo-root");
    if (!root) return;

    //Загрузка HTML-фрагмента
    fetch("components/meteo-cards.html")
    .then((res) => res.text())
    .then((html) => {
        root.innerHTML = html;
    })
    .catch((err) => {
        console.error("Не удалось загрузить meteo-cards.html", err);
    });
});
