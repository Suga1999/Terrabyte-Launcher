import { motion } from 'framer-motion';
import { Home, Library, Download, Settings, User, Gamepad2 } from 'lucide-react';
import { clsx } from 'clsx';

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
      className="fixed left-0 top-0 h-full w-20 bg-dark-800/90 backdrop-blur-md border-r border-white/10 z-30"
    >
      {/* Logo */}
      <div className="flex items-center justify-center h-20 border-b border-white/10">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-10 h-10 bg-gradient-to-br from-retro-purple to-retro-pink rounded-lg flex items-center justify-center"
        >
          <Gamepad2 className="w-6 h-6 text-white" />
        </motion.div>
      </div>

      {/* Navigation Items */}
      <nav className="flex flex-col items-center py-8 space-y-6">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <motion.button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={clsx(
                'relative group w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300',
                isActive
                  ? 'bg-retro-purple/20 text-retro-purple'
                  : 'text-gray-400 hover:text-white hover:bg-white/10'
              )}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-6 h-6" />
              
              {/* Active indicator */}
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -right-1 top-1/2 -translate-y-1/2 w-1 h-8 bg-retro-purple rounded-full"
                />
              )}
              
              {/* Tooltip */}
              <div className="absolute left-full ml-4 px-3 py-2 bg-dark-700 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap pixel-font">
                {item.tooltip}
              </div>
            </motion.button>
          );
        })}
      </nav>
    </motion.div>
  );
}