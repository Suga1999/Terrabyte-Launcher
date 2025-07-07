import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { FriendsList } from './components/FriendsList';
import { HomeView } from './components/HomeView';
import { LibraryView } from './components/LibraryView';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [friendsOpen, setFriendsOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomeView />;
      case 'library':
        return <LibraryView />;
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
        return <HomeView />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      {/* Sidebar */}
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Header */}
      <Header 
        onToggleFriends={() => setFriendsOpen(!friendsOpen)} 
        friendsOpen={friendsOpen}
      />

      {/* Main Content */}
      <main className="ml-20 mt-16 min-h-[calc(100vh-4rem)] overflow-y-auto">
        {renderContent()}
      </main>

      {/* Friends List */}
      <FriendsList 
        isOpen={friendsOpen} 
        onClose={() => setFriendsOpen(false)} 
      />
    </div>
  )
  );
}

export default App;