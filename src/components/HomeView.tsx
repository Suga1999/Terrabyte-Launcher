import { motion } from 'framer-motion';
import { GameCard } from './GameCard';
import { Game } from '../types';
import { Clock, TrendingUp, Star, Zap, Trophy, Users } from 'lucide-react';

interface HomeViewProps {
  games: Game[];
  onPlayGame: (game: Game) => void;
  onInstallGame: (game: Game) => void;
}

export function HomeView({ games, onPlayGame, onInstallGame }: HomeViewProps) {
  const recentGames = games.filter(g => g.installed && g.lastPlayed).slice(0, 3);
  const featuredGame = games[0];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Hero Section with Featured Game */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative"
      >
        <div className="relative h-96 rounded-3xl overflow-hidden group">
          <img
            src={featuredGame.image}
            alt={featuredGame.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="p-12 max-w-2xl">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center space-x-2 mb-4">
                  <Star className="w-5 h-5 text-retro-yellow" />
                  <span className="pixel-font text-retro-yellow text-sm font-bold">FEATURED GAME</span>
                </div>
                
                <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {featuredGame.title}
                </h1>
                
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  {featuredGame.description}
                </p>
                
                <div className="flex items-center space-x-4">
                  <motion.button
                    onClick={() => featuredGame.installed ? onPlayGame(featuredGame) : onInstallGame(featuredGame)}
                    className="bg-gradient-to-r from-retro-purple to-retro-pink px-8 py-4 rounded-2xl font-bold text-lg flex items-center space-x-3 hover:shadow-2xl hover:shadow-retro-purple/25 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Zap className="w-6 h-6" />
                    <span>{featuredGame.installed ? 'PLAY NOW' : 'INSTALL'}</span>
                  </motion.button>
                  
                  <motion.button
                    className="bg-dark-700/60 backdrop-blur-sm border border-white/20 px-6 py-4 rounded-2xl font-semibold hover:bg-dark-600/60 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Quick Stats */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6"
      >
        <div className="glass rounded-2xl p-6 text-center group hover:bg-white/15 transition-all duration-300">
          <div className="w-12 h-12 bg-gradient-to-br from-retro-purple to-retro-pink rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <div className="text-2xl font-bold mb-1">{games.filter(g => g.installed).length}</div>
          <div className="text-sm text-gray-400 pixel-font">GAMES INSTALLED</div>
        </div>
        
        <div className="glass rounded-2xl p-6 text-center group hover:bg-white/15 transition-all duration-300">
          <div className="w-12 h-12 bg-gradient-to-br from-retro-green to-retro-cyan rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
            <Clock className="w-6 h-6 text-white" />
          </div>
          <div className="text-2xl font-bold mb-1">42h</div>
          <div className="text-sm text-gray-400 pixel-font">TOTAL PLAYTIME</div>
        </div>
        
        <div className="glass rounded-2xl p-6 text-center group hover:bg-white/15 transition-all duration-300">
          <div className="w-12 h-12 bg-gradient-to-br from-retro-yellow to-retro-red rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
            <Trophy className="w-6 h-6 text-white" />
          </div>
          <div className="text-2xl font-bold mb-1">15</div>
          <div className="text-sm text-gray-400 pixel-font">ACHIEVEMENTS</div>
        </div>

        <div className="glass rounded-2xl p-6 text-center group hover:bg-white/15 transition-all duration-300">
          <div className="w-12 h-12 bg-gradient-to-br from-retro-pink to-retro-purple rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
            <Users className="w-6 h-6 text-white" />
          </div>
          <div className="text-2xl font-bold mb-1">8</div>
          <div className="text-sm text-gray-400 pixel-font">FRIENDS ONLINE</div>
        </div>
      </motion.section>

      {/* Recent Games */}
      {recentGames.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <Clock className="w-6 h-6 text-retro-green" />
              <h2 className="text-2xl font-bold">Continue Playing</h2>
            </div>
            <button className="text-retro-purple hover:text-retro-pink transition-colors text-sm font-medium">
              View All
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentGames.map((game, index) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
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

      {/* News & Updates */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="glass rounded-2xl p-8"
      >
        <h2 className="text-2xl font-bold mb-6">Latest Updates</h2>
        <div className="space-y-4">
          <div className="flex items-start space-x-4 p-4 bg-dark-700/30 rounded-xl hover:bg-dark-700/50 transition-colors cursor-pointer">
            <div className="w-2 h-2 bg-retro-green rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 className="font-semibold mb-1">New Game Added: Mystery Mansion</h3>
              <p className="text-gray-400 text-sm">Explore supernatural mysteries in this haunted adventure</p>
              <span className="text-xs text-gray-500 pixel-font">2 hours ago</span>
            </div>
          </div>
          
          <div className="flex items-start space-x-4 p-4 bg-dark-700/30 rounded-xl hover:bg-dark-700/50 transition-colors cursor-pointer">
            <div className="w-2 h-2 bg-retro-yellow rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 className="font-semibold mb-1">Retro Racer Update v1.2</h3>
              <p className="text-gray-400 text-sm">New tracks and improved physics engine</p>
              <span className="text-xs text-gray-500 pixel-font">1 day ago</span>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}