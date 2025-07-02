// Wallpapers array — you can replace these URLs with your own images
const wallpapers = [
  'assets/wallpapers/Nature%20wallpaper.jpg',
  'assets/wallpapers/retro-space-arcade%20wallpaper.jpg',
  'assets/wallpapers/Space%20wallpaper.jpg',
];

const wallpaperElement = document.querySelector('.wallpaper');
const friendListElement = document.getElementById('friend-list');
const gameButtons = document.querySelectorAll('.game-btn');

function setWallpaper() {
  const now = new Date();
  const hours = now.getHours();
  const index = Math.floor(hours / 4) % wallpapers.length;
  wallpaperElement.style.backgroundImage = `url('${wallpapers[index]}')`;
}

setWallpaper();
setInterval(setWallpaper, 3600 * 1000); // Update every hour

// Mock friend list
const friends = [
  { name: 'Blnoob', online: true },
  { name: 'OofTheMilkMan', online: false },
  { name: 'Charlie', online: true },
  { name: 'Diana', online: false },
];

function renderFriends() {
  friendListElement.innerHTML = '';
  friends.forEach(friend => {
    const li = document.createElement('li');
    li.className = 'friend-item';
    li.innerHTML = `
      <span>${friend.name}</span>
      <span class="friend-status ${friend.online ? 'online' : 'offline'}">
        ${friend.online ? 'Online' : 'Offline'}
      </span>
    `;
    friendListElement.appendChild(li);
  });
}

renderFriends();

gameButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert(`Launching ${button.dataset.game}...`);

    const startBtn = document.querySelector('.start-btn');
startBtn.addEventListener('click', () => {
  alert('Starting the featured game...');
  // TODO: Replace with actual launch code
});

  });
});
