import { motion } from 'framer-motion';
import { Home, Library, Download, Settings, User, Gamepad2 } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const sidebarItems = [
  { id: 'home', icon: Home, label: 'Home', tooltip: 'Home' },
  { id: 'library', icon: Library, label: 'Library', tooltip: 'My Games' },
  { id: 'downloads', icon: Download, label: 'Downloads', tooltip: 'Downloads' },
  { id: 'settings', icon: Settings, label: 'Settings', tooltip: 'Settings' },
  { id: 'profile', icon: User, label: 'Profile', tooltip: 'Profile' },
];

export function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="fixed left-0 top-0 h-full w-20 bg-dark-800/60 backdrop-blur-xl border-r border-white/5 z-40"
    >
      {/* Logo */}
      <div className="flex items-center justify-center h-20 border-b border-white/5">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="w-12 h-12 bg-gradient-to-br from-retro-purple to-retro-pink rounded-2xl flex items-center justify-center shadow-lg"
        >
          <Gamepad2 className="w-7 h-7 text-white" />
        </motion.div>
      </div>

      {/* Navigation Items */}
      <nav className="flex flex-col items-center py-8 space-y-4">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <motion.button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`relative group w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                isActive
                  ? 'bg-gradient-to-br from-retro-purple/20 to-retro-pink/20 text-retro-purple border border-retro-purple/30'
                  : 'text-gray-400 hover:text-white hover:bg-white/10 border border-transparent'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-6 h-6" />
              
              {/* Active indicator */}
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -right-1 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-retro-purple to-retro-pink rounded-full"
                />
              )}
              
              {/* Tooltip */}
              <div className="absolute left-full ml-4 px-3 py-2 bg-dark-700/90 backdrop-blur-sm text-white text-sm rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap pixel-font border border-white/10">
                {item.tooltip}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-dark-700/90 rotate-45 border-l border-b border-white/10"></div>
              </div>
            </motion.button>
          );
        })}
      </nav>

      {/* Bottom Decoration */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-8 h-1 bg-gradient-to-r from-retro-purple to-retro-pink rounded-full opacity-50"></div>
      </div>
    </motion.div>
  );
}