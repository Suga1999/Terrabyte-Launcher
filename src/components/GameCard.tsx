import { motion } from 'framer-motion';
import { Play, Download, Info, Clock, Star } from 'lucide-react';
import { Game } from '../types';

interface GameCardProps {
  game: Game;
  onPlay: (game: Game) => void;
  onInstall: (game: Game) => void;
  featured?: boolean;
}

export function GameCard({ game, onPlay, onInstall, featured = false }: GameCardProps) {
  return (
    <motion.div
      className="relative bg-dark-700/30 backdrop-blur-sm rounded-2xl overflow-hidden group cursor-pointer border border-white/5 hover:border-white/20 transition-all duration-300"
      whileHover={{ scale: 1.02, y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="aspect-[4/5] relative">
        <img
          src={game.image}
          alt={game.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
        
        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <div className={`pixel-font text-xs px-3 py-1.5 rounded-full backdrop-blur-sm border ${
            game.installed 
              ? 'bg-retro-green/20 text-retro-green border-retro-green/30' 
              : 'bg-retro-yellow/20 text-retro-yellow border-retro-yellow/30'
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
              onClick={(e) => {
                e.stopPropagation();
                game.installed ? onPlay(game) : onInstall(game);
              }}
              className="bg-gradient-to-r from-retro-purple to-retro-pink hover:from-retro-purple/80 hover:to-retro-pink/80 p-4 rounded-full transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {game.installed ? <Play className="w-6 h-6" /> : <Download className="w-6 h-6" />}
            </motion.button>
            
            <motion.button
              className="bg-dark-600/80 backdrop-blur-sm hover:bg-dark-500/80 p-4 rounded-full transition-all duration-300 border border-white/20"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Info className="w-6 h-6" />
            </motion.button>
          </div>
        </motion.div>

        {/* Bottom Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="font-bold text-lg mb-1 text-white">{game.title}</h3>
          <p className="text-sm text-gray-300 mb-2">{game.genre}</p>
          
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-400 pixel-font">{game.size}</span>
            {game.installed && game.lastPlayed && (
              <div className="flex items-center space-x-1 text-gray-400">
                <Clock className="w-3 h-3" />
                <span className="pixel-font">{game.lastPlayed}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}