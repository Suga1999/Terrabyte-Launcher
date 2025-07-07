export interface Game {
  id: string;
  title: string;
  image: string;
  installed: boolean;
  lastPlayed?: string;
  description: string;
  genre: string;
  size: string;
}

export interface Friend {
  id: string;
  name: string;
  status: 'online' | 'offline' | 'in-game';
  avatar: string;
  currentGame?: string;
}

export interface User {
  id: string;
  username: string;
  avatar: string;
  level: number;
  gamesOwned: number;
}