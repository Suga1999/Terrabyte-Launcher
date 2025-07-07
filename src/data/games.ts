import { Game } from '../types';

export const games: Game[] = [
  {
    id: '1',
    title: 'Retro Racer',
    image: '/assets/game-icons/retro_racer.jpg',
    installed: true,
    lastPlayed: '2 hours ago',
    description: 'High-speed cyberpunk racing through neon-lit streets',
    genre: 'Racing',
    size: '2.1 GB'
  },
  {
    id: '2',
    title: 'Pixel Quest',
    image: '/assets/game-icons/pixel_quest.jpg',
    installed: true,
    lastPlayed: '1 day ago',
    description: 'Classic platformer adventure with modern twists',
    genre: 'Platformer',
    size: '1.5 GB'
  },
  {
    id: '3',
    title: 'Dungeon Crawler',
    image: '/assets/game-icons/dungeon_crawler.jpg',
    installed: false,
    description: 'Explore mysterious dungeons in this retro RPG',
    genre: 'RPG',
    size: '3.2 GB'
  },
  {
    id: '4',
    title: 'Space Invaders',
    image: '/assets/game-icons/space_invaders.jpg',
    installed: true,
    lastPlayed: '3 days ago',
    description: 'Defend Earth from alien invasion in this arcade classic',
    genre: 'Arcade',
    size: '800 MB'
  },
  {
    id: '5',
    title: 'Mystery Mansion',
    image: '/assets/game-icons/mystery_mansion.jpg',
    installed: false,
    description: 'Solve supernatural mysteries in this haunted adventure',
    genre: 'Adventure',
    size: '2.8 GB'
  }
];