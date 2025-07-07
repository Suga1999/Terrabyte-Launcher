import { motion } from 'framer-motion';
import { Bell, Cloud, Users, Search, Settings } from 'lucide-react';
import { User } from '../types';

interface HeaderProps {
  user: User;
  onToggleFriends: () => void;
  friendsOpen: boolean;
}

export function Header({ user, onToggleFriends, friendsOpen }: HeaderProps) {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-20 right-0 h-20 bg-dark-800/60 backdrop-blur-xl border-b border-white/5 z-30"
    >
      <div className="flex items-center justify-between h-full px-8">
        {/* Logo and Search */}
        <div className="flex items-center space-x-6">
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-retro-purple to-retro-pink rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-retro-purple to-retro-pink bg-clip-text text-transparent">
              TERRABYTE
            </h1>
          </motion.div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search games..."
              className="w-80 pl-10 pr-4 py-2 bg-dark-700/50 border border-white/10 rounded-xl text-sm focus:outline-none focus:border-retro-purple/50 focus:bg-dark-700/70 transition-all"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Cloud Sync Status */}
          <motion.div
            className="flex items-center space-x-2 text-xs text-gray-400 bg-dark-700/30 px-3 py-2 rounded-lg"
            whileHover={{ scale: 1.05 }}
          >
            <Cloud className="w-3 h-3 text-retro-green" />
            <span className="pixel-font">Synced</span>
          </motion.div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            <motion.button
              className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Settings className="w-5 h-5" />
            </motion.button>

            <motion.button
              className="relative p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Bell className="w-5 h-5" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-retro-red rounded-full animate-pulse" />
            </motion.button>

            <motion.button
              onClick={onToggleFriends}
              className={`p-2 rounded-lg transition-all ${
                friendsOpen
                  ? 'bg-retro-purple/20 text-retro-purple'
                  : 'text-gray-400 hover:text-white hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Users className="w-5 h-5" />
            </motion.button>
          </div>

          {/* User Profile */}
          <motion.div
            className="flex items-center space-x-3 bg-dark-700/40 backdrop-blur-sm rounded-xl px-4 py-2 cursor-pointer border border-white/5"
            whileHover={{ scale: 1.02, backgroundColor: 'rgba(55, 55, 55, 0.6)' }}
          >
            <img
              src={user.avatar}
              alt={user.username}
              className="w-8 h-8 rounded-full border-2 border-retro-purple/50"
            />
            <div className="text-sm">
              <div className="font-medium">{user.username}</div>
              <div className="text-xs text-gray-400 pixel-font">LVL {user.level}</div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}