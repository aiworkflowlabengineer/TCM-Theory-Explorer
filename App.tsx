
import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import TheoryExplorer from './components/TheoryExplorer';
import ChatBot from './components/ChatBot';
import GroundingTools from './components/GroundingTools';
import ImageEditor from './components/ImageEditor';
import VideoGenerator from './components/VideoGenerator';
import VoiceAssistant from './components/VoiceAssistant';
import MediaAnalysis from './components/MediaAnalysis';
import { AppView } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.EXPLORER);
  const [resetKey, setResetKey] = useState(0);

  const handleReset = () => {
    setResetKey(prev => prev + 1);
  };

  const renderView = () => {
    switch (currentView) {
      case AppView.EXPLORER:
        return <TheoryExplorer key={resetKey} />;
      case AppView.CHAT:
        return <ChatBot />;
      case AppView.GROUNDING:
        return <GroundingTools />;
      case AppView.IMAGE_EDITOR:
        return <ImageEditor />;
      case AppView.VEO_VIDEO:
        return <VideoGenerator />;
      case AppView.LIVE_VOICE:
        return <VoiceAssistant />;
      case AppView.ANALYSIS:
        return <MediaAnalysis />;
      default:
        return <TheoryExplorer key={resetKey} />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar 
        currentView={currentView} 
        setView={setCurrentView} 
        onReset={handleReset} 
      />
      
      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-5xl mx-auto">
            {renderView()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
