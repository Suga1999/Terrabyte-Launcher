import { motion } from 'framer-motion';
import { Bell, Cloud, Users } from 'lucide-react';
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
      className="fixed top-0 left-20 right-0 h-20 bg-dark-800/80 backdrop-blur-md border-b border-white/10 z-20"
    >
      <div className="flex items-center justify-between h-full px-8">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4">
          <motion.h1
            className="text-2xl font-bold bg-gradient-to-r from-retro-purple to-retro-pink bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            TERRABYTE
          </motion.h1>
          <div className="pixel-font text-xs text-gray-400 bg-dark-700 px-2 py-1 rounded">
            v2.1.0
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-6">
          {/* Cloud Sync Status */}
          <motion.div
            className="flex items-center space-x-2 text-sm text-gray-400"
            whileHover={{ scale: 1.05 }}
          >
            <Cloud className="w-4 h-4 text-retro-green" />
            <span className="pixel-font">Synced 2m ago</span>
          </motion.div>

          {/* Notifications */}
          <motion.button
            className="relative p-2 text-gray-400 hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Bell className="w-5 h-5" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-retro-red rounded-full animate-pulse" />
          </motion.button>

          {/* Friends Toggle */}
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

          {/* User Profile */}
          <motion.div
            className="flex items-center space-x-3 bg-dark-700/50 rounded-full px-4 py-2 cursor-pointer"
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(55, 55, 55, 0.7)' }}
          >
            <img
              src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=1"
              alt={user.username}
              className="w-8 h-8 rounded-full border-2 border-retro-purple"
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