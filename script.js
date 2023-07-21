// Load games data
const games = window.games;

// Find the main element where the games will be added
const main = document.querySelector('main');

// Generate HTML for each game
games.forEach(game => {
    // Create a div for this game
    const gameDiv = document.createElement('div');
    gameDiv.className = 'game';

    // Create an image for this game
    const img = document.createElement('img');
    img.src = game.image;
    gameDiv.appendChild(img);

    // Create a h2 for the game's name
    const h2 = document.createElement('h2');
    h2.textContent = game.name;
    gameDiv.appendChild(h2);

    // Create a button for downloading the game
    const button = document.createElement('button');
    button.textContent = 'Download';
    button.onclick = () => {
        window.location.href = game.downloadLink;
    };
    gameDiv.appendChild(button);

    // Add this game to the main element
    main.appendChild(gameDiv);
});
