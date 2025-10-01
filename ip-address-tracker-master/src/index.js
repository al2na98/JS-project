const ipInput = document.querySelector('.search-bar__input');
const btn = document.querySelector('button');



btn.addEventListener('click', getData);
ipInput.addEventListener('keydown', handleKey);

function getData () {
    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_eKshFWglnjQY87nkHmU8VpAAXT2h9&ipAddress=${ipInput.value}`;
    //проверка данных
    fetch(url)
        .then(response => response.json())
        .then(console.log)
}

function handleKey (e) {
    if (e.key === 'Enter') {
        getData();
    }
}

