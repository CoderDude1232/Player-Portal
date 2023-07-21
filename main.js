// List of games
const games = [
    {title: 'Game 1', description: 'This is Game 1', thumbnail: 'game1.jpg'},
    {title: 'Game 2', description: 'This is Game 2', thumbnail: 'game2.jpg'},
    // Add more games as needed
];

// Get the game list element
const gameList = document.querySelector('#game-list');

// Create a listing for each game
for (const game of games) {
    const gameElement = document.createElement('div');
    gameElement.innerHTML = `
        <h2>${game.title}</h2>
        <img src="${game.thumbnail}" alt="${game.title}">
        <p>${game.description}</p>
        <a href="game.html?title=${encodeURIComponent(game.title)}">Go to game</a>
    `;
    gameList.appendChild(gameElement);
}
