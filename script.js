window.addEventListener('DOMContentLoaded', (event) => {
    const gameList = document.getElementById('game-list');
    const popularGameList = document.getElementById('popular-game-list');
    const gameInfo = document.getElementById('game-info');

    if (gameList) {
        games.forEach(game => {
            const gameElement = document.createElement('div');
            gameElement.innerHTML = `<h2>${game.title}</h2><p>${game.description}</p><img src="${game.thumbnail}">`;
            gameList.appendChild(gameElement);
        });
    }

    if (popularGameList) {
        popularGames.forEach(game => {
            const gameElement = document.createElement('div');
            gameElement.innerHTML = `<h2>${game.title}</h2><p>${game.description}</p><img src="${game.thumbnail}">`;
            popularGameList.appendChild(gameElement);
        });
    }

    if (gameInfo) {
        // Here you could add code to display more detailed information about a specific game
    }
});
