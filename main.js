// List of games
const games = [
    {title: 'Cyberpunk 2077', description: 'A open world, action-adventure story set in Night City.', thumbnail: 'cyberpunk2077.jpg'},
    {title: 'Rocket League', description: 'Soccer meets driving in this award-winning, physics-based multiplayer-focused mash-up!', thumbnail: 'rocketleague.jpg'},
    {title: 'Apex Legends', description: 'A free-to-play Battle Royale where legendary characters battle for glory, fame, and fortune on the fringes of the Frontier.', thumbnail: 'apexlegends.jpg'},
    {title: 'Overwatch', description: 'A vibrant team-based shooter set on a near-future earth.', thumbnail: 'overwatch.jpg'},
    {title: 'Call of Duty: Warzone', description: 'A free-to-play battle royale video game.', thumbnail: 'codwarzone.jpg'},
    {title: 'PUBG', description: 'PlayerUnknown\'s Battlegrounds is a competitive survival shooter.', thumbnail: 'pubg.jpg'},
    {title: 'Rainbow Six Siege', description: 'Master the art of destruction and gadgetry.', thumbnail: 'rainbowsix.jpg'},
    {title: 'The Witcher 3: Wild Hunt', description: 'A story-driven, next-generation open world role-playing game set in a visually stunning fantasy universe.', thumbnail: 'witcher3.jpg'},
    {title: 'Dota 2', description: 'A competitive game of action and strategy, played both professionally and casually by millions of passionate fans worldwide.', thumbnail: 'dota2.jpg'},
    {title: 'Animal Crossing: New Horizons', description: 'Escape to a deserted island and create your own paradise as you explore, create, and customize.', thumbnail: 'animalcrossing.jpg'}
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
