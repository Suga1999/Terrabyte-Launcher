import { motion } from 'framer-motion';
import { GameCard } from './GameCard';
import { Game } from '../types';
import { Clock, TrendingUp, Star } from 'lucide-react';

interface HomeViewProps {
  games: Game[];
  onPlayGame: (game: Game) => void;
  onInstallGame: (game: Game) => void;
}

export function HomeView({ games, onPlayGame, onInstallGame }: HomeViewProps) {
  const recentGames = games.filter(g => g.installed && g.lastPlayed).slice(0, 3);
  const featuredGame = games[0];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-8"
      >
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-retro-purple via-retro-pink to-retro-cyan bg-clip-text text-transparent">
          Welcome to Terrabyte
        </h1>
        <p className="text-gray-400 text-lg">Your retro gaming universe awaits</p>
      </motion.section>

      {/* Featured Game */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="flex items-center space-x-2 mb-4">
          <Star className="w-5 h-5 text-retro-yellow" />
          <h2 className="text-xl font-bold">Featured Game</h2>
        </div>
        <GameCard
          game={featuredGame}
          onPlay={onPlayGame}
          onInstall={onInstallGame}
          featured
        />
      </motion.section>

      {/* Recent Games */}
      {recentGames.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center space-x-2 mb-4">
            <Clock className="w-5 h-5 text-retro-green" />
            <h2 className="text-xl font-bold">Recently Played</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentGames.map((game, index) => (
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
      )}

      {/* Quick Stats */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <div className="glass rounded-xl p-6 text-center">
          <TrendingUp className="w-8 h-8 text-retro-purple mx-auto mb-2" />
          <div className="text-2xl font-bold">{games.filter(g => g.installed).length}</div>
          <div className="text-sm text-gray-400 pixel-font">GAMES INSTALLED</div>
        </div>
        
        <div className="glass rounded-xl p-6 text-center">
          <Clock className="w-8 h-8 text-retro-green mx-auto mb-2" />
          <div className="text-2xl font-bold">42h</div>
          <div className="text-sm text-gray-400 pixel-font">TOTAL PLAYTIME</div>
        </div>
        
        <div className="glass rounded-xl p-6 text-center">
          <Star className="w-8 h-8 text-retro-yellow mx-auto mb-2" />
          <div className="text-2xl font-bold">15</div>
          <div className="text-sm text-gray-400 pixel-font">ACHIEVEMENTS</div>
        </div>
      </motion.section>
    </div>
  );
}