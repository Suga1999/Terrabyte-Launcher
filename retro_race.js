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
  const friendList = document.getElementById('friend-list');
  friendList.innerHTML = '';

  friends.forEach(friend => {
    const li = document.createElement('li');
    li.classList.add('friend-item');

    const statusDot = document.createElement('span');
    statusDot.classList.add('friend-status-dot', friend.status);

    const nameSpan = document.createElement('span');
    nameSpan.textContent = friend.name;

    li.appendChild(statusDot);
    li.appendChild(nameSpan);
    friendList.appendChild(li);
  });
}

// Render games in game list
function renderGames() {
  const gameList = document.getElementById('game-list');
  gameList.innerHTML = '';

  games.forEach(game => {
    const li = document.createElement('li');
    li.classList.add('game-tile');

    const img = document.createElement('img');
    img.src = game.img;
    img.alt = game.title;

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('game-title');
    titleDiv.textContent = game.title;

    const playBtn = document.createElement('button');
    playBtn.classList.add('play-btn');
    playBtn.textContent = "Play";

    li.appendChild(img);
    li.appendChild(titleDiv);
    li.appendChild(playBtn);
    gameList.appendChild(li);
  });
}

// Sidebar toggle
document.getElementById('friends-header').addEventListener('click', () => {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('collapsed');
});

// Initialize on load
renderFriends();
renderGames();
