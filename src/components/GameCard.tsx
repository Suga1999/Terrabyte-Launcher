import { motion } from 'framer-motion';
import { Play, Download, Info, Clock } from 'lucide-react';
import { Game } from '../types';

interface GameCardProps {
  game: Game;
  onPlay: (game: Game) => void;
  onInstall: (game: Game) => void;
  featured?: boolean;
}

export function GameCard({ game, onPlay, onInstall, featured = false }: GameCardProps) {
  if (featured) {
    return (
      <motion.div
        className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer"
        whileHover={{ scale: 1.02 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <img
          src={game.image}
          alt={game.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="pixel-font text-retro-yellow text-sm mb-2">FEATURED</div>
            <h2 className="text-4xl font-bold mb-3">{game.title}</h2>
            <p className="text-gray-300 mb-6 max-w-md">{game.description}</p>
            
            <div className="flex items-center space-x-4">
              <motion.button
                onClick={() => game.installed ? onPlay(game) : onInstall(game)}
                className="bg-gradient-to-r from-retro-purple to-retro-pink px-8 py-3 rounded-full font-semibold flex items-center space-x-2 hover:shadow-lg hover:shadow-retro-purple/25 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {game.installed ? <Play className="w-5 h-5" /> : <Download className="w-5 h-5" />}
                <span>{game.installed ? 'PLAY NOW' : 'INSTALL'}</span>
              </motion.button>
              
              {game.installed && game.lastPlayed && (
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>Last played {game.lastPlayed}</span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="relative bg-dark-700/50 rounded-xl overflow-hidden group cursor-pointer glass"
      whileHover={{ scale: 1.03, y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="aspect-[3/4] relative">
        <img
          src={game.image}
          alt={game.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Status Badge */}
        <div className="absolute top-3 left-3">
          <div className={`pixel-font text-xs px-2 py-1 rounded ${
            game.installed 
              ? 'bg-retro-green/20 text-retro-green border border-retro-green/30' 
              : 'bg-retro-yellow/20 text-retro-yellow border border-retro-yellow/30'
          }`}>
            {game.installed ? 'INSTALLED' : 'NOT INSTALLED'}
          </div>
        </div>

        {/* Hover Overlay */}
        <motion.div
          className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        >
          <div className="flex space-x-3">
            <motion.button
              onClick={() => game.installed ? onPlay(game) : onInstall(game)}
              className="bg-retro-purple hover:bg-retro-purple/80 p-3 rounded-full transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {game.installed ? <Play className="w-5 h-5" /> : <Download className="w-5 h-5" />}
            </motion.button>
            
            <motion.button
              className="bg-dark-600 hover:bg-dark-500 p-3 rounded-full transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Info className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Game Info */}
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{game.title}</h3>
        <p className="text-sm text-gray-400 mb-2">{game.genre}</p>
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{game.size}</span>
          {game.installed && game.lastPlayed && (
            <span>Played {game.lastPlayed}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}