import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, UserPlus, X } from 'lucide-react';
import { Friend } from '../types';

interface FriendsListProps {
  friends: Friend[];
  isOpen: boolean;
  onClose: () => void;
}

const statusColors = {
  online: 'bg-retro-green',
  offline: 'bg-gray-500',
  'in-game': 'bg-retro-purple'
};

const statusLabels = {
  online: 'Online',
  offline: 'Offline',
  'in-game': 'In Game'
};

export function FriendsList({ friends, isOpen, onClose }: FriendsListProps) {
  const onlineFriends = friends.filter(f => f.status !== 'offline');
  const offlineFriends = friends.filter(f => f.status === 'offline');

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 z-40"
            onClick={onClose}
          />
          
          {/* Friends Panel */}
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-80 bg-dark-800/95 backdrop-blur-md border-l border-white/10 z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h2 className="text-xl font-bold">Friends</h2>
              <div className="flex items-center space-x-2">
                <motion.button
                  className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <UserPlus className="w-5 h-5" />
                </motion.button>
                <motion.button
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            {/* Friends List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-6">
              {/* Online Friends */}
              {onlineFriends.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 mb-3 pixel-font">
                    ONLINE — {onlineFriends.length}
                  </h3>
                  <div className="space-y-2">
                    {onlineFriends.map((friend, index) => (
                      <motion.div
                        key={friend.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors group cursor-pointer"
                      >
                        <div className="relative">
                          <img
                            src={friend.avatar}
                            alt={friend.name}
                            className="w-10 h-10 rounded-full"
                          />
                          <div className={`absolute -bottom-1 -right-1 w-4 h-4 ${statusColors[friend.status]} rounded-full border-2 border-dark-800`} />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="font-medium truncate">{friend.name}</div>
                          <div className="text-xs text-gray-400">
                            {friend.status === 'in-game' && friend.currentGame
                              ? `Playing ${friend.currentGame}`
                              : statusLabels[friend.status]
                            }
                          </div>
                        </div>
                        
                        <motion.button
                          className="opacity-0 group-hover:opacity-100 p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <MessageCircle className="w-4 h-4" />
                        </motion.button>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Offline Friends */}
              {offlineFriends.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 mb-3 pixel-font">
                    OFFLINE — {offlineFriends.length}
                  </h3>
                  <div className="space-y-2">
                    {offlineFriends.map((friend, index) => (
                      <motion.div
                        key={friend.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (onlineFriends.length + index) * 0.1 }}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors opacity-60"
                      >
                        <div className="relative">
                          <img
                            src={friend.avatar}
                            alt={friend.name}
                            className="w-10 h-10 rounded-full grayscale"
                          />
                          <div className={`absolute -bottom-1 -right-1 w-4 h-4 ${statusColors[friend.status]} rounded-full border-2 border-dark-800`} />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="font-medium truncate">{friend.name}</div>
                          <div className="text-xs text-gray-500">Offline</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}