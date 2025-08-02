import React, { useState, useEffect } from 'react';
import { Smile, Mail, Wifi, Battery } from 'lucide-react';

interface LockScreenProps {
  onUnlock: () => void;
}

const LockScreen: React.FC<LockScreenProps> = ({ onUnlock }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: false
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleClick = () => {
    onUnlock();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      onUnlock();
    }
  };

  return (
    <div 
      className="min-h-screen w-full bg-cover bg-center relative cursor-pointer transition-all duration-1000 hover:brightness-110"
      style={{
        backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080"><defs><linearGradient id="sky" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:%2387CEEB"/><stop offset="100%" style="stop-color:%23FFA500"/></linearGradient></defs><rect width="1920" height="1080" fill="url(%23sky)"/><ellipse cx="300" cy="400" rx="120" ry="200" fill="%23D2691E" transform="rotate(-20 300 400)"/><ellipse cx="500" cy="350" rx="80" ry="150" fill="%23CD853F" transform="rotate(15 500 350)"/><ellipse cx="1200" cy="380" rx="100" ry="180" fill="%23D2691E" transform="rotate(-10 1200 380)"/><ellipse cx="1400" cy="320" rx="90" ry="160" fill="%23CD853F" transform="rotate(25 1400 320)"/><rect x="0" y="600" width="1920" height="200" fill="%23F4A460"/><ellipse cx="150" cy="550" rx="40" ry="80" fill="%23A0522D"/><circle cx="960" cy="200" r="50" fill="%23FFD700"/><path d="M0,700 Q480,650 960,680 T1920,700 L1920,1080 L0,1080 Z" fill="%2300CED1"/></svg>')`
      }}
      onClick={handleClick}
      onKeyDown={handleKeyPress}
      tabIndex={0}
      role="button"
      aria-label="Click or press any key to unlock"
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Status bar */}
      <div className="absolute top-4 right-4 flex items-center space-x-4 text-white z-10">
        <Wifi className="w-5 h-5" />
        <Battery className="w-5 h-5" />
        <span className="text-sm font-medium">100%</span>
      </div>

      {/* Left side indicators */}
      <div className="absolute top-4 left-4 flex items-center space-x-4 text-white z-10">
        <Mail className="w-5 h-5" />
        <span className="text-sm">10</span>
        <span className="text-sm">📷</span>
        <span className="text-sm">2</span>
        <span className="text-sm">⏰</span>
        <span className="text-sm">1</span>
      </div>

      {/* Main content */}
      <div className="absolute inset-0 flex flex-col items-start justify-center pl-8 md:pl-16 text-white z-10">
        {/* Greeting with smiley face */}
        <div className="flex items-center mb-4">
          <Smile className="w-12 h-12 mr-4 text-white" />
        </div>
        
        {/* Greeting text */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-light mb-2">
            Hello Miranda Vance
          </h1>
        </div>

        {/* Time display */}
        <div className="mb-8">
          <div className="text-8xl md:text-9xl font-light tracking-tight">
            {formatTime(currentTime)}
          </div>
          <div className="text-2xl md:text-3xl font-light mt-2">
            {formatDate(currentTime)}
          </div>
        </div>

        {/* Event notification */}
        <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 max-w-sm">
          <div className="text-sm font-medium mb-1">Lunch with Barbra</div>
          <div className="text-sm text-gray-200">Café</div>
          <div className="text-sm text-gray-200">11:00 AM—12:00 PM</div>
        </div>
      </div>

      {/* Unlock hint */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center z-10">
        <div className="animate-pulse">
          <div className="text-lg font-light mb-2">Click anywhere or press any key to unlock</div>
          <div className="w-16 h-1 bg-white/50 rounded-full mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default LockScreen;