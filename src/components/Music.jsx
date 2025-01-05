import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, Music2 } from "lucide-react";

// Import your audio files correctly
import halamadrid from "../assets/Hala Madrid...y nada más.mp3";
import openarms from "../assets/SZA - Open Arms.mp3";
import Aroundme from "../assets/Metro Boomin - Around Me.mp3";
import luther from "../assets/Kendrick Lamar - luther.mp3";
import Likethat from "../assets/Future, Metro Boomin, Kendrick Lamar - Like That.mp3";
import Escapism from "../assets/RAYE - Escapism. feat. 070 Shake.mp3";
import Highestontheroom from "../assets/Travis Scott - HIGHEST IN THE ROOM.mp3";
import Timeless from "../assets/The Weeknd, Playboi Carti - Timeless.mp3";
import sunflower from "../assets/Post Malone, Swae Lee - Sunflowerr.mp3";
import superhero from "../assets/Metro Boomin & Future - Superhero.mp3";

const Music = () => {
  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(80);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  
  const audioRef = useRef(null);

  const songs = [
    { id: 1, title: "Hala Madrid... y nada más", artist: "Real Madrid", duration: "4:29", audio: halamadrid },
    { id: 2, title: "Open Arms", artist: "SZA", duration: "4:01", audio: openarms },
    { id: 3, title: "Around Me", artist: "Metro Boomin", duration: "3:45", audio: Aroundme },
    { id: 4, title: "Luther", artist: "Kendrick Lamar", duration: "2:57", audio: luther },
    { id: 5, title: "Like That", artist: "Future, Metro Boomin, Kendrick Lamar", duration: "4:29", audio: Likethat },
    { id: 6, title: "Escapism", artist: "RAYE", duration: "4:32", audio: Escapism },
    { id: 7, title: "Highest in the Room", artist: "Travis Scott", duration: "2:57", audio: Highestontheroom },
    { id: 8, title: "Timeless", artist: "The Weeknd, Playboi Carti", duration: "4:16", audio: Timeless },
    { id: 9, title: "Sunflower", artist: "Post Malone, Swae Lee", duration: "2:41", audio: sunflower },
    { id: 10, title: "Superhero", artist: "Metro Boomin & Future", duration: "3:08", audio: superhero }
  ];

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(error => {
          console.error("Playback failed:", error);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentSong]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
      audioRef.current.muted = isMuted;
    }
  }, [volume, isMuted]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (value) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value;
      setCurrentTime(value);
    }
  };

  const handlePrevious = () => {
    setCurrentSong((prev) => (prev === 0 ? songs.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSong((prev) => (prev === songs.length - 1 ? 0 : prev + 1));
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="min-h-screen bg-transparent p-4 mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Header Section */}
        <div className="relative overflow-hidden rounded-3xl mb-12 p-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-white/10">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-yellow-500 rounded-full blur-3xl opacity-10 animate-pulse-slow"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-pink-500 rounded-full blur-3xl opacity-10 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-4">
              <Music2 className="w-12 h-12 text-yellow-400 animate-bounce" style={{ animationDuration: '2s' }} />
            </div>
            
            <h1 className="text-center">
              <span className="block text-6xl font-bold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-transparent bg-clip-text animate-gradient-x mb-2">
                How about listening to music?
              </span>
              <div className="h-1 w-32 mx-auto bg-gradient-to-r from-yellow-400 to-pink-600 rounded-full animate-pulse"></div>
            </h1>
            
            <h2 className="text-center mt-6 text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fade-in">
              While exploring my portfolio, feel free to enjoy some of my favorite songs. 
              <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
                Let the music inspire your journey.
              </span>
            </h2>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="backdrop-blur-lg bg-white/5 rounded-2xl shadow-2xl p-8 border border-white/10">
            <audio
              ref={audioRef}
              src={songs[currentSong].audio}
              onTimeUpdate={handleTimeUpdate}
              onEnded={handleNext}
            />

            {/* Visualizer */}
            <div className="flex justify-center gap-1 mb-8 h-16">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className={`w-2 bg-gradient-to-t from-pink-500 to-purple-500 rounded-full transform transition-all duration-150 ${
                    isPlaying ? 'animate-music-bar' : 'h-2'
                  }`}
                  style={{
                    animationDelay: `${i * 0.1}s`,
                    height: isPlaying ? '100%' : '8px'
                  }}
                />
              ))}
            </div>

            {/* Now Playing */}
            <div className="mb-8 text-center">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-pink-600 text-transparent bg-clip-text mb-2">
                Now Playing
              </h3>
              <p className="text-white text-lg">
                {songs[currentSong].title}
              </p>
              <p className="text-gray-400">
                {songs[currentSong].artist}
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
              <div className="relative">
                <input
                  type="range"
                  min="0"
                  max={duration || 100}
                  value={currentTime}
                  onChange={(e) => handleSeek(Number(e.target.value))}
                  className="w-full h-2 bg-gray-600/40 rounded-lg appearance-none cursor-pointer accent-pink-500"
                />
                <div 
                  className="absolute left-0 top-0 h-2 bg-gradient-to-r from-yellow-400 to-pink-600 rounded-lg pointer-events-none"
                  style={{ width: `${(currentTime / duration) * 100}%` }}
                />
              </div>
              <div className="flex justify-between text-sm mt-2 text-gray-400">
                <span>{formatTime(currentTime)}</span>
                <span>{songs[currentSong].duration}</span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-8 mb-8">
              <button 
                className="p-3 hover:bg-white/10 rounded-full transition-all transform hover:scale-110"
                onClick={handlePrevious}
              >
                <SkipBack className="w-6 h-6 text-white" />
              </button>
              <button 
                className="p-4 bg-gradient-to-r from-yellow-400 to-pink-600 rounded-full transition-all transform hover:scale-110 hover:shadow-lg hover:shadow-pink-500/30"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8 text-white" />
                ) : (
                  <Play className="w-8 h-8 text-white" />
                )}
              </button>
              <button 
                className="p-3 hover:bg-white/10 rounded-full transition-all transform hover:scale-110"
                onClick={handleNext}
              >
                <SkipForward className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Volume Control */}
            <div className="flex items-center gap-2 mb-8">
              <button 
                onClick={() => setIsMuted(!isMuted)}
                className="hover:bg-white/10 p-2 rounded-full transition-all"
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5 text-white" />
                ) : (
                  <Volume2 className="w-5 h-5 text-white" />
                )}
              </button>
              <input
                type="range"
                min="0"
                max="100"
                value={isMuted ? 0 : volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="w-24 h-2 bg-gray-600/40 rounded-lg appearance-none cursor-pointer accent-pink-500"
              />
            </div>

            {/* Playlist */}
            <div className="backdrop-blur-md bg-white/5 rounded-xl p-4">
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600 mb-4">
                Playlist
              </h3>
              <div className="space-y-2 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
                {songs.map((song, index) => (
                  <div
                    key={song.id}
                    className={`p-4 rounded-lg cursor-pointer transition-all hover:bg-white/10 flex justify-between items-center ${
                      currentSong === index ? 'bg-white/20 shadow-lg' : ''
                    }`}
                    onClick={() => {
                      setCurrentSong(index);
                      setIsPlaying(true);
                    }}
                  >
                    <div>
                      <p className="font-medium text-white">{song.title}</p>
                      <p className="text-sm text-gray-400">{song.artist}</p>
                    </div>
                    <span className="text-sm text-gray-400">{song.duration}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0% { background-size: 200% 100%; background-position: 0% 0%; }
          100% { background-size: 200% 100%; background-position: 200% 0%; }
        }

        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }

        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #EAB308, #EC4899);
          border-radius: 3px;
        }

        @keyframes music-bar {
          0%, 100% { height: 8px; }
          50% { height: 100%; }
        }
        
        .animate-music-bar {
          animation: music-bar 1s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Music;