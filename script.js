// Friend list data
const friends = [
  { name: "Jolan", status: "online" },
  { name: "Mykyta", status: "idle" },
  { name: "Wessel", status: "offline" },
  { name: "Max", status: "online" },
];

// Game list data
const games = [
  { title: 'Retro Racer', img: 'assets/games/retro-racer.png' },
  { title: 'Pixel Quest', img: 'assets/games/pixel-quest.png' },
  { title: 'Dungeon Crawler', img: 'assets/games/dungeon-crawler.png' },
  { title: 'Space Invaders', img: 'assets/games/space-invaders.png' },
  { title: 'Mystery Mansion', img: 'assets/games/mystery-mansion.png' }
];

// Render friends in friend list
function renderFriends() {
  const friendListEl = document.getElementById('friend-list');
  friendListEl.innerHTML = '';

  friends.forEach(friend => {
    const li = document.createElement('li');
    li.className = 'friend-item';
    li.innerHTML = `
      <span class="friend-status-dot ${friend.status}"></span>
      <span class="friend-name">${friend.name}</span>
    `;
    friendListEl.appendChild(li);
  });
}

// Render games in left sidebar
function renderGames() {
  const gameListEl = document.getElementById('game-list');
  gameListEl.innerHTML = '';

  games.forEach(game => {
    const li = document.createElement('li');
    li.className = 'game-tile';
    li.innerHTML = `
      <img src="${game.img}" alt="${game.title} Thumbnail" />
      <span class="game-title">${game.title}</span>
      <button class="play-btn" title="Start ${game.title}">Play</button>
    `;
    gameListEl.appendChild(li);
  });
}

// Initialize rendering
renderFriends();
renderGames();

// Collapsible friend list toggle
const sidebar = document.getElementById('sidebar');
const friendsHeader = document.getElementById('friends-header');

friendsHeader.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
});
