import React from 'react';
import { Navigation } from './components/Navigation';
import { VideoBackground } from './components/VideoBackground';
import { HeroContent } from './components/HeroContent';

function App() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="relative h-screen">
        <VideoBackground />
        <div className="relative h-full">
          <Navigation />
          <HeroContent />
        </div>
      </div>
    </main>
  );
}

export default App;