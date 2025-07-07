import { motion } from 'framer-motion';
import { GameCard } from './GameCard';
import { Game } from '../types';

interface LibraryViewProps {
  games: Game[];
  onPlayGame: (game: Game) => void;
  onInstallGame: (game: Game) => void;
}

export function LibraryView({ games, onPlayGame, onInstallGame }: LibraryViewProps) {
  const featuredGame = games[0]; // First game as featured
  const otherGames = games.slice(1);

  return (
    <div className="space-y-8">
      {/* Featured Game */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <GameCard
          game={featuredGame}
          onPlay={onPlayGame}
          onInstall={onInstallGame}
          featured
        />
      </motion.section>

      {/* Game Library Grid */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Your Library</h2>
          <div className="pixel-font text-sm text-gray-400 bg-dark-700 px-3 py-1 rounded">
            {games.filter(g => g.installed).length} / {games.length} INSTALLED
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {otherGames.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <GameCard
                game={game}
                onPlay={onPlayGame}
                onInstall={onInstallGame}
              />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}