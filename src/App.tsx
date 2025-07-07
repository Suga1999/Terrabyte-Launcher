import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { FriendsList } from './components/FriendsList';
import { HomeView } from './components/HomeView';
import { LibraryView } from './components/LibraryView';
import { games } from './data/games';
import { friends } from './data/friends';
import { Game, User } from './types';

const mockUser: User = {
  id: '1',
  username: 'RetroGamer',
  avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=1',
  level: 42,
  gamesOwned: games.length
};

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [friendsOpen, setFriendsOpen] = useState(false);

  const handlePlayGame = (game: Game) => {
    console.log('Playing game:', game.title);
    // Here you would implement game launching logic
  };

  const handleInstallGame = (game: Game) => {
    console.log('Installing game:', game.title);
    // Here you would implement game installation logic
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <HomeView
            games={games}
            onPlayGame={handlePlayGame}
            onInstallGame={handleInstallGame}
          />
        );
      case 'library':
        return (
          <LibraryView
            games={games}
            onPlayGame={handlePlayGame}
            onInstallGame={handleInstallGame}
          />
        );
      case 'downloads':
        return (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold mb-4">Downloads</h2>
            <p className="text-gray-400">No active downloads</p>
          </div>
        );
      case 'settings':
        return (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold mb-4">Settings</h2>
            <p className="text-gray-400">Settings panel coming soon</p>
          </div>
        );
      case 'profile':
        return (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold mb-4">Profile</h2>
            <p className="text-gray-400">Profile management coming soon</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-screen w-screen bg-animated overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-retro-purple/5 via-transparent to-retro-pink/5 pointer-events-none" />
      
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      
      {/* Header */}
      <Header
        user={mockUser}
        onToggleFriends={() => setFriendsOpen(!friendsOpen)}
        friendsOpen={friendsOpen}
      />
      
      {/* Main Content */}
      <motion.main
        className="ml-20 mt-20 p-8 h-[calc(100vh-5rem)] overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {renderContent()}
      </motion.main>
      
      {/* Friends List */}
      <FriendsList
        friends={friends}
        isOpen={friendsOpen}
        onClose={() => setFriendsOpen(false)}
      />
    </div>
  );
}

export default App;