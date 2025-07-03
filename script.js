
// Friend list data
const friends = [
  { name: "OofTheMilkMan", status: "online" },
  { name: "Blnoob", status: "idle" },
  { name: "Potato", status: "offline" },
  { name: "Choki", status: "online" },
];

// Game list data
const games = [
  { title: 'Retro Racer', img: 'assets/game-icons/retro_racer.jpg' },
  { title: 'Pixel Quest', img: 'assets/game-icons/pixel_quest.jpg' },
  { title: 'Dungeon Crawler', img:'assets/game-icons/dungeon_crawler.jpg' },
  { title: 'Space Invaders', img: 'assets/game-icons/space_invaders.jpg' },
  { title: 'Mystery Mansion', img: 'assets/game-icons/mystery_mansion.jpg' }
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
