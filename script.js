const wallpapers = [
  "assets/wallpapers/1.jpg",
  "assets/wallpapers/2.jpg",
  "assets/wallpapers/3.jpg"
];

const today = new Date().getDate();
const bg = wallpapers[today % wallpapers.length];
document.body.style.backgroundImage = `url('${bg}')`;
