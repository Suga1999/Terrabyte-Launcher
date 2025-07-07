import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { FriendsList } from './components/FriendsList';
import { HomeView } from './components/HomeView';
import { LibraryView } from './components/LibraryView';
import { games } from './data/games';
import { friends } from './data/friends';
import { User } from './types';

const currentUser: User = {
  id: '1',
  username: 'RetroGamer',
  avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=1',
  level: 42,
  gamesOwned: games.length
};

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [friendsOpen, setFriendsOpen] = useState(false);

  const handlePlayGame = (game: any) => {
    console.log(`Launching ${game.title}...`);
    // Game launch logic would go here
  };

  const handleInstallGame = (game: any) => {
    console.log(`Installing ${game.title}...`);
    // Game installation logic would go here
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
          <div className="p-8">
            <h1 className="text-3xl font-bold gradient-text mb-6">Downloads</h1>
            <div className="glass rounded-2xl p-8 text-center">
              <p className="text-gray-400">No active downloads</p>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="p-8">
            <h1 className="text-3xl font-bold gradient-text mb-6">Settings</h1>
            <div className="glass rounded-2xl p-8">
              <p className="text-gray-400">Settings panel coming soon...</p>
            </div>
          </div>
        );
      case 'profile':
        return (
          <div className="p-8">
            <h1 className="text-3xl font-bold gradient-text mb-6">Profile</h1>
            <div className="glass rounded-2xl p-8">
              <p className="text-gray-400">Profile management coming soon...</p>
            </div>
          </div>
        );
      default:
        return (
          <HomeView 
            games={games} 
            onPlayGame={handlePlayGame}
            onInstallGame={handleInstallGame}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-retro-purple/10 via-transparent to-retro-cyan/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-20 left-20 w-2 h-2 bg-retro-purple rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-retro-cyan rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-retro-pink rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-20 right-20 w-1 h-1 bg-retro-yellow rounded-full animate-pulse delay-3000"></div>
        </div>
      </div>

      {/* Sidebar */}
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Header */}
      <Header 
        user={currentUser}
        onToggleFriends={() => setFriendsOpen(!friendsOpen)} 
        friendsOpen={friendsOpen}
      />

      {/* Main Content */}
      <main className="ml-20 mt-20 min-h-[calc(100vh-5rem)] overflow-y-auto relative z-10 p-8">
        {renderContent()}
      </main>

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