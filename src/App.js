import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  Play, Pause, Square, Activity, Heart, Zap, Target, Crown, Star,
  TrendingUp, BarChart3, Brain, Settings, Music, Trophy, Award,
  Compass, Map, Users, Globe, Rocket, Shield, Gem, Sword,
  Briefcase, DollarSign, MapPin, Clock, CheckCircle, Flame,
  Guitar, Piano, Mic, Volume2, Headphones, Radio, Eye,
  Building, Sparkles, Lock, Unlock, Medal, Gift, Bell,
  ChevronRight, Plus, Minus, RotateCcw, Share2, Download,
  Home, User, Menu, X, ChevronLeft, Calendar, Mail, Coffee,
  Camera, Utensils, Gamepad2, Sunrise, Moon, Mountain, Trees,
  Bot, MessageCircle, Send
} from 'lucide-react';

const CompleteRPGEcosystem = () => {
  const [currentView, setCurrentView] = useState('landing');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [practiceActive, setPracticeActive] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [language, setLanguage] = useState('english');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Enhanced mouse tracking for immersive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Musical Instruments (20 instruments)
  const instruments = {
    guitar: { name: 'Guitar', icon: '🎸', category: 'String', difficulty: 'Medium' },
    piano: { name: 'Piano', icon: '🎹', category: 'Keys', difficulty: 'Medium' },
    violin: { name: 'Violin', icon: '🎻', category: 'String', difficulty: 'Hard' },
    drums: { name: 'Drums', icon: '🥁', category: 'Percussion', difficulty: 'Medium' },
    saxophone: { name: 'Saxophone', icon: '🎷', category: 'Wind', difficulty: 'Hard' },
    trumpet: { name: 'Trumpet', icon: '🎺', category: 'Brass', difficulty: 'Hard' },
    bass: { name: 'Bass Guitar', icon: '🎸', category: 'String', difficulty: 'Medium' },
    flute: { name: 'Flute', icon: '🪈', category: 'Wind', difficulty: 'Medium' },
    cello: { name: 'Cello', icon: '🎻', category: 'String', difficulty: 'Hard' },
    harmonica: { name: 'Harmonica', icon: '🎵', category: 'Wind', difficulty: 'Easy' },
    ukulele: { name: 'Ukulele', icon: '🎸', category: 'String', difficulty: 'Easy' },
    voice: { name: 'Voice/Vocals', icon: '🎤', category: 'Vocal', difficulty: 'Medium' },
    synthesizer: { name: 'Synthesizer', icon: '🎛️', category: 'Electronic', difficulty: 'Hard' },
    banjo: { name: 'Banjo', icon: '🪕', category: 'String', difficulty: 'Medium' },
    accordion: { name: 'Accordion', icon: '🪗', category: 'Keys', difficulty: 'Hard' },
    djing: { name: 'DJ/Turntables', icon: '🎧', category: 'Electronic', difficulty: 'Medium' },
    marimba: { name: 'Marimba', icon: '🎶', category: 'Percussion', difficulty: 'Hard' },
    harp: { name: 'Harp', icon: '🎵', category: 'String', difficulty: 'Hard' },
    clarinet: { name: 'Clarinet', icon: '🎶', category: 'Wind', difficulty: 'Medium' },
    tuba: { name: 'Tuba', icon: '🎺', category: 'Brass', difficulty: 'Hard' }
  };

  const [playerData, setPlayerData] = useState({
    name: "Alex Mwangi",
    username: "@alexmusic_ke",
    avatar: "🎸",
    level: 12,
    xp: 8450,
    nextLevelXP: 10000,
    totalPracticeTime: 847,
    skillPoints: 45,
    unlockedRegions: 3,
    completedQuests: 15,
    activeGigs: 3,
    totalEarnings: 2450000,
    reputation: 4.7,
    instruments: ['guitar', 'piano', 'voice', 'drums', 'saxophone', 'violin'],
    badges: ['First Practice', 'Week Warrior', 'Rhythm Master', 'Melody Maker', 'Multi-Instrumentalist', 'Jazz Pioneer'],
    currentStreak: 23,
    weeklyGoal: { current: 18, target: 20 },
    energy: 85,
    focus: 92,
    motivation: 78,
    joinDate: "March 2024",
    skills: {
      rhythm: 85,
      melody: 72,
      harmony: 68,
      technique: 91,
      performance: 78,
      composition: 65,
      improvisation: 70,
      collaboration: 82,
      reading: 55,
      production: 45
    }
  });

  const [practiceSession, setPracticeSession] = useState({
    active: false,
    duration: 0,
    instrument: 'guitar',
    exercise: 'Jazz Scales Mastery',
    difficulty: 'Advanced',
    realTimeMetrics: {
      rhythmAccuracy: 94,
      pitchAccuracy: 87,
      consistency: 91,
      focus: 85,
      energy: 78,
      tonalClarity: 82,
      expressiveness: 76
    },
    sessionXP: 0,
    skillGains: { technique: 2, rhythm: 1 },
    combos: { current: 12, best: 47 }
  });

  const [questData, setQuestData] = useState({
    activeQuests: [
      {
        id: 'jazz_mastery',
        title: 'Jazz Fusion Mastery Campaign',
        description: 'Master jazz fusion across 5 legendary venues in Nairobi',
        progress: 60,
        xpReward: 1500,
        timeLeft: '2 weeks',
        difficulty: 'Epic',
        instrument: 'saxophone',
        location: 'Nairobi Jazz Circuit'
      },
      {
        id: 'multi_instrument',
        title: 'Multi-Instrument Virtuoso',
        description: 'Master 3 different instrument categories',
        progress: 35,
        xpReward: 2500,
        timeLeft: '1 month',
        difficulty: 'Legendary',
        instruments: ['piano', 'drums', 'violin']
      },
      {
        id: 'african_beats',
        title: 'Rhythms of Africa Heritage',
        description: 'Explore traditional East African rhythms',
        progress: 75,
        xpReward: 1800,
        timeLeft: '1 week',
        difficulty: 'Master',
        instrument: 'drums'
      }
    ],
    dailyChallenges: [
      { title: 'Perfect Pitch Challenge', xp: 50, timeLeft: '4h 23m', difficulty: 'Easy', instrument: 'piano' },
      { title: 'Drum Fill Mastery', xp: 120, timeLeft: '2h 45m', difficulty: 'Hard', instrument: 'drums' },
      { title: 'Jazz Improvisation', xp: 80, timeLeft: '6h 12m', difficulty: 'Medium', instrument: 'saxophone' }
    ]
  });

  const [careerData, setCareerData] = useState({
    activeGigs: [
      {
        id: 'hotel_residency',
        title: 'Serena Hotel - Weekly Jazz Nights',
        client: 'Serena Hotels Kenya',
        type: 'Hotel Residency',
        earnings: 45000,
        status: 'active',
        nextDate: '2025-06-08',
        progress: 85,
        instrument: 'piano',
        venue: 'Serena Hotel Nairobi',
        frequency: 'Every Saturday'
      },
      {
        id: 'wedding_season',
        title: 'Premium Wedding Season',
        client: 'Elite Weddings Kenya',
        type: 'Wedding Contracts',
        earnings: 85000,
        status: 'active',
        nextDate: '2025-06-15',
        progress: 62,
        instrument: 'guitar',
        remaining: 5,
        total: 12
      }
    ],
    opportunities: [
      {
        id: 'villa_rosa',
        title: 'Villa Rosa Kempinski - Piano Lounge',
        client: 'Villa Rosa Kempinski',
        type: 'Hotel Performance',
        earnings: 80000,
        prestige: 'Elite',
        deadline: '10 days',
        competition: 'Medium',
        instrument: 'piano',
        schedule: 'Tuesday-Saturday, 7-11 PM',
        location: 'Westlands, Nairobi'
      },
      {
        id: 'safaricom_jazz',
        title: 'Safaricom Jazz Festival - Main Stage',
        client: 'Safaricom Events',
        type: 'Jazz Festival',
        earnings: 500000,
        prestige: 'Elite',
        deadline: '15 days',
        competition: 'Extreme',
        instrument: 'saxophone',
        audience: '15,000+ jazz enthusiasts',
        location: 'Uhuru Gardens, Nairobi'
      }
    ]
  });

  // Add notification
  const addNotification = (message, type = 'info') => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 3000);
  };

  // Practice timer
  useEffect(() => {
    let interval;
    if (practiceActive) {
      interval = setInterval(() => {
        setPracticeSession(prev => ({
          ...prev,
          duration: prev.duration + 1,
          sessionXP: Math.floor(prev.duration / 60) * 15
        }));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [practiceActive]);

  // 3D Holographic Button Component
  const HolographicButton = ({ 
    children, 
    onClick, 
    variant = 'primary', 
    size = 'medium', 
    className = '', 
    glowIntensity = 'medium',
    ...props 
  }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isPressed, setIsPressed] = useState(false);
    const [ripples, setRipples] = useState([]);

    const handleClick = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const newRipple = {
        id: Date.now(),
        x,
        y
      };
      
      setRipples(prev => [...prev, newRipple]);
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id));
      }, 600);
      
      if (onClick) onClick(e);
    };

    const variants = {
      primary: {
        base: 'from-cyan-400/90 via-blue-500/90 to-purple-600/90',
        hover: 'from-cyan-300/95 via-blue-400/95 to-purple-500/95',
        glow: 'shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:shadow-[0_0_50px_rgba(34,211,238,0.7)]',
        border: 'border-cyan-300/60 hover:border-cyan-200/80'
      },
      secondary: {
        base: 'from-purple-500/90 via-pink-500/90 to-red-500/90',
        hover: 'from-purple-400/95 via-pink-400/95 to-red-400/95',
        glow: 'shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_50px_rgba(168,85,247,0.7)]',
        border: 'border-purple-300/60 hover:border-purple-200/80'
      },
      success: {
        base: 'from-emerald-400/90 via-green-500/90 to-teal-600/90',
        hover: 'from-emerald-300/95 via-green-400/95 to-teal-500/95',
        glow: 'shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:shadow-[0_0_50px_rgba(16,185,129,0.7)]',
        border: 'border-emerald-300/60 hover:border-emerald-200/80'
      },
      warning: {
        base: 'from-yellow-400/90 via-orange-500/90 to-red-500/90',
        hover: 'from-yellow-300/95 via-orange-400/95 to-red-400/95',
        glow: 'shadow-[0_0_30px_rgba(251,191,36,0.4)] hover:shadow-[0_0_50px_rgba(251,191,36,0.7)]',
        border: 'border-yellow-300/60 hover:border-yellow-200/80'
      }
    };

    const sizes = {
      small: 'px-4 py-2 text-sm',
      medium: 'px-6 py-3 text-base',
      large: 'px-8 py-4 text-lg',
      xl: 'px-12 py-6 text-2xl'
    };

    const currentVariant = variants[variant];

    return (
      <button
        {...props}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setIsPressed(false);
        }}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        className={`
          relative overflow-hidden font-black tracking-wider transition-all duration-300 ease-out
          transform-gpu cursor-pointer select-none rounded-2xl border-2 backdrop-blur-xl
          bg-gradient-to-br ${isHovered ? currentVariant.hover : currentVariant.base}
          ${currentVariant.glow} ${currentVariant.border}
          ${isHovered ? 'scale-105 rotate-y-2' : 'scale-100'}
          ${isPressed ? 'scale-95' : ''}
          ${sizes[size]} ${className}
        `}
        style={{
          fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
          textShadow: '0 2px 8px rgba(0,0,0,0.5)',
          transformStyle: 'preserve-3d',
          perspective: '1000px'
        }}
      >
        {/* Holographic background effect */}
        <div className={`
          absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
          transform -skew-x-12 transition-transform duration-700
          ${isHovered ? 'translate-x-full' : '-translate-x-full'}
        `} />
        
        {/* Inner glow layer */}
        <div className={`
          absolute inset-1 rounded-xl bg-gradient-to-br from-white/10 to-transparent
          transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}
        `} />
        
        {/* Ripple effects */}
        {ripples.map((ripple) => (
          <div
            key={ripple.id}
            className="absolute rounded-full bg-white/30 animate-ping"
            style={{
              left: ripple.x - 10,
              top: ripple.y - 10,
              width: 20,
              height: 20,
              animation: 'ripple 0.6s ease-out forwards'
            }}
          />
        ))}
        
        {/* Content */}
        <span className="relative z-10 flex items-center justify-center gap-2 text-white">
          {children}
        </span>
      </button>
    );
  };

  // Floating Card Component with Parallax
  const FloatingCard = ({ children, className = '', intensity = 'medium', ...props }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [transform, setTransform] = useState('');

    const handleMouseMove = (e) => {
      if (!isHovered) return;
      
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      setTransform('');
    };

    return (
      <div
        {...props}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className={`
          relative transition-all duration-500 ease-out transform-gpu
          bg-black/40 backdrop-blur-2xl border border-white/10 rounded-2xl
          hover:border-white/30 hover:shadow-2xl
          ${isHovered ? 'shadow-[0_25px_50px_rgba(0,0,0,0.3)]' : 'shadow-xl'}
          ${className}
        `}
        style={{
          transform,
          transformStyle: 'preserve-3d',
          perspective: '1000px'
        }}
      >
        {/* Animated border gradient */}
        <div className={`
          absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-cyan-400/20
          transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}
        `} />
        
        {/* Holographic shine effect */}
        <div className={`
          absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-white/5 to-transparent
          transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}
        `} />
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    );
  };

  // Animated Typography Component
  const AnimatedText = ({ 
    children, 
    variant = 'title', 
    className = '', 
    glowColor = 'cyan',
    ...props 
  }) => {
    const [isHovered, setIsHovered] = useState(false);

    const variants = {
      title: `text-4xl md:text-6xl font-black tracking-wider`,
      subtitle: `text-xl md:text-2xl font-bold tracking-wide`,
      body: `text-base md:text-lg font-medium`,
      hero: `text-6xl md:text-8xl font-black tracking-wider`
    };

    const glowColors = {
      cyan: isHovered ? 'drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]' : 'drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]',
      purple: isHovered ? 'drop-shadow-[0_0_20px_rgba(168,85,247,0.8)]' : 'drop-shadow-[0_0_10px_rgba(168,85,247,0.4)]',
      emerald: isHovered ? 'drop-shadow-[0_0_20px_rgba(16,185,129,0.8)]' : 'drop-shadow-[0_0_10px_rgba(16,185,129,0.4)]',
      yellow: isHovered ? 'drop-shadow-[0_0_20px_rgba(251,191,36,0.8)]' : 'drop-shadow-[0_0_10px_rgba(251,191,36,0.4)]'
    };

    return (
      <div
        {...props}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          transition-all duration-300 ease-out transform-gpu cursor-default
          ${isHovered ? 'scale-105' : 'scale-100'}
          ${variants[variant]} ${glowColors[glowColor]} ${className}
        `}
        style={{
          fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
          background: `linear-gradient(135deg, 
            ${glowColor === 'cyan' ? 'rgb(34, 211, 238), rgb(147, 51, 234)' :
              glowColor === 'purple' ? 'rgb(168, 85, 247), rgb(236, 72, 153)' :
              glowColor === 'emerald' ? 'rgb(16, 185, 129), rgb(6, 182, 212)' :
              'rgb(251, 191, 36), rgb(245, 101, 101)'}
          )`,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          textShadow: isHovered ? `0 0 30px ${
            glowColor === 'cyan' ? 'rgba(34,211,238,0.5)' :
            glowColor === 'purple' ? 'rgba(168,85,247,0.5)' :
            glowColor === 'emerald' ? 'rgba(16,185,129,0.5)' :
            'rgba(251,191,36,0.5)'
          }` : 'none'
        }}
      >
        {children}
      </div>
    );
  };

  // Particle System Component
  const ParticleField = ({ density = 'medium' }) => {
    const particleCount = density === 'low' ? 20 : density === 'high' ? 80 : 50;
    
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: particleCount }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    );
  };

  // Enhanced Landing Page
  const LandingPage = () => {
    const [currentInstrumentIndex, setCurrentInstrumentIndex] = useState(0);
    const featuredInstruments = [
      { id: 'trumpet', name: 'TRUMPET', icon: '🎺' },
      { id: 'saxophone', name: 'SAXOPHONE', icon: '🎷' },
      { id: 'violin', name: 'VIOLIN', icon: '🎻' },
      { id: 'guitar', name: 'GUITAR', icon: '🎸' },
      { id: 'piano', name: 'PIANO', icon: '🎹' },
      { id: 'drums', name: 'DRUMS', icon: '🥁' },
      { id: 'flute', name: 'FLUTE', icon: '🪈' },
      { id: 'voice', name: 'VOCALS', icon: '🎤' }
    ];

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentInstrumentIndex((prev) => (prev + 1) % featuredInstruments.length);
      }, 3000);
      return () => clearInterval(interval);
    }, [featuredInstruments.length]);

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/30 to-cyan-900/30 overflow-hidden relative">
        <ParticleField density="medium" />
        
        {/* Dynamic background based on mouse position */}
        <div 
          className="absolute inset-0 bg-gradient-radial from-cyan-500/5 to-transparent transition-all duration-1000"
          style={{
            transform: `translate(${(mousePosition.x - window.innerWidth/2) * 0.01}px, ${(mousePosition.y - window.innerHeight/2) * 0.01}px)`
          }}
        />

        {/* Header */}
        <header className="relative z-10 flex items-center justify-between p-6">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-2xl hover:shadow-cyan-400/50 transition-all duration-300 animate-pulse">
              <span className="text-white text-2xl font-bold">🐒</span>
            </div>
            <AnimatedText variant="title" className="text-3xl" glowColor="cyan">
              doba
            </AnimatedText>
          </div>
        </header>

        {/* Main Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="text-center lg:text-left">
              <AnimatedText variant="hero" className="mb-6 leading-tight" glowColor="cyan">
                The free fun way to
                <br />
                <span className="block bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
                  learn music
                </span>
              </AnimatedText>
              
              <AnimatedText variant="body" className="text-xl text-gray-300 mb-8 leading-relaxed" glowColor="purple">
                Master any instrument through RPG-style adventures. Practice, complete quests, and build your music career in Kenya's most engaging learning platform.
              </AnimatedText>

              <div className="space-y-4">
                <HolographicButton 
                  onClick={() => {
                    setIsLoggedIn(true);
                    setCurrentView('home');
                    addNotification('🎉 Welcome to DOBA! Your musical journey begins now!', 'success');
                  }}
                  variant="primary"
                  size="xl"
                  className="w-full lg:w-auto"
                  glowIntensity="high"
                >
                  <Sparkles className="mr-2" size={24} />
                  GET STARTED
                </HolographicButton>
                
                <HolographicButton 
                  onClick={() => setShowLogin(true)}
                  variant="secondary"
                  size="large"
                  className="w-full lg:w-auto lg:ml-4"
                >
                  <User className="mr-2" size={20} />
                  I ALREADY HAVE AN ACCOUNT
                </HolographicButton>
              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                {[
                  { icon: Activity, title: 'Smart Practice', desc: 'AI-powered practice sessions that adapt to your learning style', color: 'emerald' },
                  { icon: Compass, title: 'Musical Quests', desc: 'Adventure through Kenya\'s music scene with epic challenges', color: 'purple' },
                  { icon: Trophy, title: 'Real Gigs', desc: 'Unlock actual paying opportunities as you level up', color: 'yellow' }
                ].map((feature, index) => (
                  <FloatingCard key={index} className="text-center p-6">
                    <div className={`w-16 h-16 bg-gradient-to-br from-${feature.color}-400 to-${feature.color}-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg hover:animate-bounce transition-all duration-300`}>
                      <feature.icon className="text-white" size={24} />
                    </div>
                    <AnimatedText variant="subtitle" className="text-lg mb-2" glowColor={feature.color}>
                      {feature.title}
                    </AnimatedText>
                    <p className="text-gray-300 text-sm">{feature.desc}</p>
                  </FloatingCard>
                ))}
              </div>
            </div>

            {/* Right Side - Mascot & Instruments */}
            <div className="relative">
              {/* Main Mascot */}
              <div className="text-center mb-8">
                <div className="w-80 h-80 mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-200 to-purple-200 rounded-full opacity-20 animate-pulse"></div>
                  <div className="absolute inset-4 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full flex items-center justify-center shadow-2xl hover:animate-bounce transition-all duration-300">
                    <span className="text-9xl animate-pulse">🐒</span>
                  </div>
                  
                  {/* Musical Notes Around Mascot */}
                  {[
                    { top: '0', left: '25%', delay: 0, note: '♪' },
                    { top: '25%', right: '0', delay: 0.5, note: '♫' },
                    { bottom: '25%', left: '0', delay: 1, note: '♪' },
                    { bottom: '0', right: '25%', delay: 1.5, note: '♫' }
                  ].map((note, index) => (
                    <div 
                      key={index}
                      className="absolute text-4xl text-cyan-500 animate-bounce"
                      style={{
                        ...note,
                        animationDelay: `${note.delay}s`,
                        animationDuration: '2s'
                      }}
                    >
                      {note.note}
                    </div>
                  ))}
                </div>
              </div>

              {/* Instruments Showcase */}
              <div className="mt-8">
                <AnimatedText variant="subtitle" className="text-2xl text-center mb-6" glowColor="purple">
                  Master Any Instrument
                </AnimatedText>
                <div className="relative">
                  <div className="flex items-center justify-center gap-8 overflow-hidden">
                    {featuredInstruments.slice(currentInstrumentIndex, currentInstrumentIndex + 5).map((instrument, index) => (
                      <FloatingCard 
                        key={instrument.id}
                        className={`text-center p-4 transition-all duration-500 ${
                          index === 2 ? 'scale-125 opacity-100' : 'scale-100 opacity-70'
                        }`}
                      >
                        <div className="text-3xl mb-2 hover:animate-spin transition-all duration-300">{instrument.icon}</div>
                        <AnimatedText variant="body" className="text-sm font-bold" glowColor="cyan">
                          {instrument.name}
                        </AnimatedText>
                      </FloatingCard>
                    ))}
                  </div>
                  
                  {/* Navigation Arrows */}
                  <HolographicButton 
                    onClick={() => setCurrentInstrumentIndex((prev) => (prev - 1 + featuredInstruments.length) % featuredInstruments.length)}
                    variant="secondary"
                    size="medium"
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full w-12 h-12 p-0"
                  >
                    <ChevronLeft size={20} />
                  </HolographicButton>
                  
                  <HolographicButton 
                    onClick={() => setCurrentInstrumentIndex((prev) => (prev + 1) % featuredInstruments.length)}
                    variant="secondary"
                    size="medium"
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full w-12 h-12 p-0"
                  >
                    <ChevronRight size={20} />
                  </HolographicButton>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
            {[
              { value: '20+', label: 'Instruments', color: 'cyan' },
              { value: '100+', label: 'Quests', color: 'purple' },
              { value: '500+', label: 'Real Gigs', color: 'emerald' },
              { value: '50K+', label: 'Musicians', color: 'yellow' }
            ].map((stat, index) => (
              <FloatingCard key={index} className="text-center p-6 hover:animate-pulse">
                <AnimatedText variant="title" className={`text-3xl mb-2`} glowColor={stat.color}>
                  {stat.value}
                </AnimatedText>
                <p className="text-gray-400">{stat.label}</p>
              </FloatingCard>
            ))}
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-20 fill-current text-blue-500/10">
            <path d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,133.3C672,117,768,107,864,112C960,117,1056,139,1152,144C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>
    );
  };

  // Enhanced Home Page
const HomePage = () => (
  <div className="min-h-screen bg-gray-50">
    {/* Elegant Header */}
    <header className="bg-white border-b border-gray-100 py-6">
      <div className="max-w-6xl mx-auto px-8 flex justify-between items-center">
        <div className="text-2xl font-light tracking-wide text-gray-900">DOBA</div>
        <nav className="flex gap-12 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-gray-900 transition-colors">Dashboard</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Practice</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Career</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Analytics</a>
        </nav>
      </div>
    </header>

    {/* Hero Section */}
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-8">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-light text-gray-900 mb-6 leading-tight">
            Welcome back,<br />
            <span className="font-medium">{playerData.name}</span>
          </h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            Your AI agent has been optimizing your music career while you were away.
          </p>
        </div>
      </div>
    </section>

    {/* Stats Section */}
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-4 gap-12">
          {[
            { value: '94', suffix: '%', label: 'Success Rate' },
            { value: '125', suffix: 'K', label: 'Earnings (KSH)' },
            { value: '15', suffix: '', label: 'Opportunities' },
            { value: '8', suffix: '', label: 'Applications' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-light text-gray-900 mb-2">
                {stat.value}<span className="text-2xl">{stat.suffix}</span>
              </div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Recent Activity */}
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-3xl font-light text-gray-900 mb-12">Recent Activity</h2>
        <div className="space-y-8">
          {[
            {
              title: "Applied to Serena Hotel Jazz Nights",
              description: "91% skill compatibility match",
              time: "2 hours ago",
              status: "Pending"
            },
            {
              title: "Practice Session Optimized",
              description: "Evening sessions show 23% better performance",
              time: "4 hours ago", 
              status: "Completed"
            },
            {
              title: "Network Connection Made",
              description: "Producer James Maina - similar genre focus",
              time: "1 day ago",
              status: "Interview Scheduled"
            }
          ].map((item, index) => (
            <div key={index} className="flex justify-between items-start py-6 border-b border-gray-100 last:border-0">
              <div className="flex-1">
                <h3 className="font-medium text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-600 mb-2">{item.description}</p>
                <span className="text-sm text-gray-400">{item.time}</span>
              </div>
              <div className="text-sm font-medium text-gray-500 ml-8">
                {item.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Recommendations */}
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-3xl font-light text-gray-900 mb-12">Recommendations</h2>
        <div className="grid grid-cols-2 gap-12">
          <div className="bg-white p-8 border border-gray-100">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-xl font-medium text-gray-900">Villa Rosa Kempinski</h3>
              <span className="text-sm font-medium text-gray-500">96% Match</span>
            </div>
            <p className="text-gray-600 mb-6">Weekend piano performances at premium venue. Perfect for your classical-jazz fusion style.</p>
            <div className="text-2xl font-light text-gray-900 mb-6">KSH 80,000</div>
            <button className="bg-gray-900 text-white px-6 py-3 text-sm font-medium hover:bg-gray-800 transition-colors">
              Auto Apply
            </button>
          </div>
          
          <div className="bg-white p-8 border border-gray-100">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-xl font-medium text-gray-900">Skill Development</h3>
              <span className="text-sm font-medium text-gray-500">89% Impact</span>
            </div>
            <p className="text-gray-600 mb-6">Focus on advanced improvisation. Market data shows 15% increase in opportunities.</p>
            <div className="text-2xl font-light text-gray-900 mb-6">+15% Opportunities</div>
            <button className="bg-gray-900 text-white px-6 py-3 text-sm font-medium hover:bg-gray-800 transition-colors">
              Start Training
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
);

  // Enhanced Practice Page
  const PulsePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900/20 to-cyan-900/20 p-8">
      <ParticleField density="high" />
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Practice Control Panel */}
        <FloatingCard className="border-emerald-400/30 p-8 mb-8">
          <div className="text-center mb-8">
            <AnimatedText variant="hero" className="text-5xl mb-4" glowColor="emerald">
              PULSE STUDIO
            </AnimatedText>
            <AnimatedText variant="body" className="text-emerald-200 text-lg mb-6">
              Biometric Practice Mastery
            </AnimatedText>
            
            <div className="flex items-center justify-center gap-4 mb-6 hover:animate-bounce transition-all duration-300">
              <div className="text-4xl animate-pulse">{instruments[practiceSession.instrument].icon}</div>
              <div className="text-left">
                <AnimatedText variant="subtitle" className="text-2xl text-emerald-300" glowColor="emerald">
                  {instruments[practiceSession.instrument].name}
                </AnimatedText>
                <div className="text-emerald-400">{practiceSession.exercise}</div>
              </div>
            </div>
            
            {/* Practice Timer */}
            <AnimatedText 
              variant="hero" 
              className="text-6xl font-mono text-emerald-300 mb-4" 
              glowColor="emerald"
              style={{ fontFamily: '"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace' }}
            >
              {Math.floor(practiceSession.duration / 60)}:{(practiceSession.duration % 60).toString().padStart(2, '0')}
            </AnimatedText>

            {/* Practice Controls */}
            <div className="flex justify-center gap-4 mb-6">
              <HolographicButton
                onClick={() => {
                  setPracticeActive(!practiceActive);
                  setPracticeSession(prev => ({ ...prev, active: !practiceActive }));
                  addNotification(practiceActive ? '⏸️ Practice paused' : '▶️ Practice started!', 'info');
                }}
                variant={practiceActive ? 'warning' : 'success'}
                size="large"
                className="hover:animate-pulse"
              >
                {practiceActive ? <Pause size={24} /> : <Play size={24} />}
                {practiceActive ? 'Pause Practice' : 'Start Practice'}
              </HolographicButton>
              
              <HolographicButton 
                onClick={() => {
                  setPracticeActive(false);
                  setPracticeSession(prev => ({ ...prev, duration: 0, sessionXP: 0 }));
                  addNotification('🔄 Practice session reset', 'info');
                }}
                variant="secondary"
                size="large"
                className="hover:animate-spin"
              >
                <RotateCcw size={24} />
                Reset
              </HolographicButton>
            </div>

            <AnimatedText variant="body" className="text-lg text-cyan-400" glowColor="cyan">
              +{practiceSession.sessionXP} XP earned this session
            </AnimatedText>
          </div>

          {/* Real-time Metrics */}
          {practiceActive && (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {Object.entries(practiceSession.realTimeMetrics).map(([metric, value], index) => (
                <FloatingCard key={metric} className={`p-4 text-center border-emerald-400/20 hover:animate-pulse ${
                  value >= 85 ? 'bg-green-500/10 border-green-400/30' :
                  value >= 70 ? 'bg-yellow-500/10 border-yellow-400/30' :
                  value >= 50 ? 'bg-orange-500/10 border-orange-400/30' :
                  'bg-red-500/10 border-red-400/30'
                }`}>
                  <AnimatedText variant="subtitle" className={`text-2xl mb-1 ${
                    value >= 85 ? 'text-green-400' :
                    value >= 70 ? 'text-yellow-400' :
                    value >= 50 ? 'text-orange-400' :
                    'text-red-400'
                  }`} glowColor={
                    value >= 85 ? 'emerald' :
                    value >= 70 ? 'yellow' :
                    value >= 50 ? 'yellow' :
                    'yellow'
                  }>
                    {Math.round(value)}%
                  </AnimatedText>
                  <div className="text-xs text-gray-400 capitalize mb-2">
                    {metric.replace(/([A-Z])/g, ' $1')}
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-300 ${
                        value >= 85 ? 'bg-gradient-to-r from-green-400 to-emerald-400' :
                        value >= 70 ? 'bg-gradient-to-r from-yellow-400 to-orange-400' :
                        value >= 50 ? 'bg-gradient-to-r from-orange-400 to-red-400' :
                        'bg-gradient-to-r from-red-400 to-pink-400'
                      }`}
                      style={{ width: `${value}%` }}
                    />
                  </div>
                </FloatingCard>
              ))}
            </div>
          )}
        </FloatingCard>

        {/* Skills Progress */}
        <FloatingCard className="p-6">
          <AnimatedText variant="subtitle" className="text-2xl mb-6 flex items-center gap-2" glowColor="emerald">
            <Target size={24} />
            Skill Development
          </AnimatedText>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {Object.entries(playerData.skills).map(([skill, level], index) => (
              <div key={skill} className="text-center hover:animate-pulse transition-all duration-300">
                <AnimatedText variant="subtitle" className={`text-lg mb-2 ${
                  level >= 75 ? 'text-green-400' :
                  level >= 50 ? 'text-yellow-400' :
                  'text-red-400'
                }`} glowColor={
                  level >= 75 ? 'emerald' :
                  level >= 50 ? 'yellow' :
                  'yellow'
                }>
                  {level}%
                </AnimatedText>
                <div className="text-sm text-gray-300 capitalize mb-2">{skill}</div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-500 ${
                      level >= 75 ? 'bg-gradient-to-r from-green-400 to-emerald-400' :
                      level >= 50 ? 'bg-gradient-to-r from-yellow-400 to-orange-400' :
                      'bg-gradient-to-r from-red-400 to-pink-400'
                    }`}
                    style={{ width: `${level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </FloatingCard>
      </div>
    </div>
  );

  // Enhanced Quests Page
  const SafariPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 p-8">
      <ParticleField density="medium" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <AnimatedText variant="hero" className="text-5xl mb-4" glowColor="purple">
            SAFARI XP
          </AnimatedText>
          <AnimatedText variant="body" className="text-purple-200 text-lg">
            Musical Quest Adventures
          </AnimatedText>
        </div>

        {/* Daily Challenges */}
        <div className="mb-8">
          <AnimatedText variant="subtitle" className="text-2xl text-purple-200 mb-4 flex items-center gap-2" glowColor="purple">
            <Clock size={24} />
            Daily Challenges
          </AnimatedText>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {questData.dailyChallenges.map((challenge, index) => (
              <FloatingCard key={index} className="border-purple-400/30 p-4 hover:animate-pulse">
                <div className="flex justify-between items-center mb-2">
                  <AnimatedText variant="subtitle" className="text-lg text-purple-200" glowColor="purple">
                    {challenge.title}
                  </AnimatedText>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    challenge.difficulty === 'Easy' ? 'bg-green-500/20 text-green-300 border border-green-400/30' :
                    challenge.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-400/30' :
                    'bg-red-500/20 text-red-300 border border-red-400/30'
                  }`}>
                    {challenge.difficulty}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl animate-bounce">{instruments[challenge.instrument].icon}</span>
                  <span className="text-purple-300">{instruments[challenge.instrument].name}</span>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-yellow-400 font-bold">+{challenge.xp} XP</span>
                  <span className="text-gray-400 text-sm">{challenge.timeLeft}</span>
                </div>
                <HolographicButton 
                  onClick={() => addNotification(`🎯 Starting ${challenge.title}!`, 'success')}
                  variant="primary"
                  className="w-full"
                >
                  Start Challenge
                </HolographicButton>
              </FloatingCard>
            ))}
          </div>
        </div>

        {/* Active Quests */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {questData.activeQuests.map((quest, index) => (
            <FloatingCard key={quest.id} className="border-purple-400/30 p-6 hover:animate-pulse">
              <div className="flex justify-between items-start mb-4">
                <AnimatedText variant="subtitle" className="text-xl text-purple-200" glowColor="purple">
                  {quest.title}
                </AnimatedText>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  quest.difficulty === 'Legendary' ? 'bg-orange-500/20 text-orange-300 border border-orange-400/30' :
                  quest.difficulty === 'Epic' ? 'bg-purple-500/20 text-purple-300 border border-purple-400/30' :
                  'bg-red-500/20 text-red-300 border border-red-400/30'
                }`}>
                  {quest.difficulty}
                </span>
              </div>

              <p className="text-gray-300 mb-4">{quest.description}</p>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl animate-spin">{instruments[quest.instrument].icon}</span>
                <span className="text-purple-300">{instruments[quest.instrument].name}</span>
              </div>

              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-purple-300">Progress</span>
                  <span className="text-cyan-400 font-bold">{quest.progress}%</span>
                </div>
                <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-400 to-cyan-400 transition-all duration-1000"
                    style={{ width: `${quest.progress}%` }}
                  />
                </div>
              </div>

              <div className="flex justify-between items-center mb-4 text-sm">
                <span className="text-yellow-400 font-bold">+{quest.xpReward} XP</span>
                <span className="text-gray-400">{quest.timeLeft} remaining</span>
              </div>

              <HolographicButton 
                onClick={() => addNotification(`🎯 Continuing ${quest.title}...`, 'info')}
                variant="primary"
                className="w-full hover:animate-pulse"
              >
                Continue Quest
              </HolographicButton>
            </FloatingCard>
          ))}
        </div>
      </div>
    </div>
  );

  // Enhanced Career Page
  const JukwaaPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-red-900 to-yellow-900 p-8">
      <ParticleField density="medium" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <AnimatedText variant="hero" className="text-5xl mb-4" glowColor="yellow">
            JUKWAA
          </AnimatedText>
          <AnimatedText variant="body" className="text-yellow-200 text-lg">
            Professional Career Platform
          </AnimatedText>
        </div>

        {/* Active Gigs */}
        <div className="mb-8">
          <AnimatedText variant="subtitle" className="text-2xl text-yellow-200 mb-4 flex items-center gap-2" glowColor="yellow">
            <Award size={24} />
            Active Contracts & Gigs
          </AnimatedText>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {careerData.activeGigs.map((gig, index) => (
              <FloatingCard key={gig.id} className="border-yellow-400/30 p-6 hover:animate-pulse">
                <div className="flex justify-between items-start mb-4">
                  <AnimatedText variant="subtitle" className="text-lg text-yellow-200" glowColor="yellow">
                    {gig.title}
                  </AnimatedText>
                  <span className="px-2 py-1 rounded-full text-xs font-bold bg-green-500/20 text-green-300 border border-green-400/30">
                    {gig.status}
                  </span>
                </div>

                <div className="text-center mb-4">
                  <div className="text-3xl mb-2 hover:animate-bounce transition-all duration-300">{instruments[gig.instrument].icon}</div>
                  <div className="text-sm text-purple-300">{instruments[gig.instrument].name}</div>
                </div>

                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Building size={14} className="text-orange-400" />
                    <span className="text-gray-300">{gig.type}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign size={14} className="text-green-400" />
                    <span className="text-green-400 font-bold">KSH {gig.earnings.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-blue-400" />
                    <span className="text-gray-300">Next: {gig.nextDate}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-yellow-300">Progress</span>
                    <span className="text-cyan-400 font-bold">{gig.progress}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-yellow-400 to-orange-400 transition-all duration-1000"
                      style={{ width: `${gig.progress}%` }}
                    />
                  </div>
                </div>

                <HolographicButton 
                  onClick={() => addNotification(`👀 Viewing ${gig.title} details...`, 'info')}
                  variant="warning"
                  className="w-full hover:animate-pulse"
                >
                  View Details
                </HolographicButton>
              </FloatingCard>
            ))}
          </div>
        </div>

        {/* Available Opportunities */}
        <div className="mb-8">
          <AnimatedText variant="subtitle" className="text-2xl text-orange-200 mb-4 flex items-center gap-2" glowColor="yellow">
            <Building size={24} />
            Available Opportunities
          </AnimatedText>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {careerData.opportunities.map((opportunity, index) => (
              <FloatingCard key={opportunity.id} className="border-orange-400/20 p-6 hover:animate-pulse">
                <div className="flex justify-between items-start mb-3">
                  <AnimatedText variant="subtitle" className="text-lg text-orange-200" glowColor="yellow">
                    {opportunity.title}
                  </AnimatedText>
                  <span className="px-2 py-1 rounded-full text-xs font-bold bg-yellow-400/20 text-yellow-300 border border-yellow-400/30">
                    {opportunity.prestige}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl hover:animate-spin transition-all duration-300">{instruments[opportunity.instrument].icon}</span>
                  <span className="text-orange-300">{instruments[opportunity.instrument].name}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div className="text-green-400 font-bold">KSH {opportunity.earnings.toLocaleString()}</div>
                  <div className="text-gray-400 text-sm">{opportunity.deadline}</div>
                </div>
                <div className="text-sm text-gray-400 mb-3">{opportunity.location}</div>
                <HolographicButton 
                  onClick={() => addNotification(`📝 Applied to ${opportunity.title}!`, 'success')}
                  variant="warning"
                  className="w-full hover:animate-pulse"
                >
                  Apply Now
                </HolographicButton>
              </FloatingCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Enhanced Navigation
  const Navigation = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-2xl border-t border-white/20 p-4 z-50">
      <div className="flex justify-center gap-4">
        {[
          { id: 'home', icon: Home, label: 'Home', color: 'purple' },
          { id: 'pulse', icon: Activity, label: 'Practice', color: 'emerald' },
          { id: 'safari', icon: Compass, label: 'Quests', color: 'purple' },
          { id: 'jukwaa', icon: Trophy, label: 'Career', color: 'yellow' }
        ].map((item) => (
          <HolographicButton
            key={item.id}
            onClick={() => setCurrentView(item.id)} 
            variant={currentView === item.id ? 'primary' : 'secondary'}
            className={`flex items-center gap-2 hover:animate-bounce ${currentView === item.id ? 'animate-pulse' : ''}`}
          >
            <item.icon size={20} />
            {item.label}
          </HolographicButton>
        ))}
      </div>
    </div>
  );

  // Enhanced Notification Toast
  const NotificationToast = () => (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {notifications.map((notification, index) => (
        <FloatingCard
          key={notification.id}
          className={`p-3 max-w-sm transition-all duration-500 hover:animate-pulse ${
            notification.type === 'success' ? 'border-green-400/30 bg-green-500/10' :
            notification.type === 'warning' ? 'border-yellow-400/30 bg-yellow-500/10' :
            'border-blue-400/30 bg-blue-500/10'
          }`}
        >
          <div className="flex items-center gap-2">
            {notification.type === 'success' && <CheckCircle size={16} className="text-green-400" />}
            {notification.type === 'warning' && <Bell size={16} className="text-yellow-400" />}
            {notification.type === 'info' && <Sparkles size={16} className="text-blue-400" />}
            <span className="text-sm text-white">{notification.message}</span>
          </div>
        </FloatingCard>
      ))}
    </div>
  );

  return (
    <>
      {/* Enhanced CSS with animations */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@100;200;300;400;500;600;700;800;900&family=SF+Pro+Rounded:wght@100;200;300;400;500;600;700;800;900&display=swap');
        
        @keyframes ripple {
          0% { transform: scale(0); opacity: 1; }
          100% { transform: scale(4); opacity: 0; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes glow {
          0%, 100% { filter: brightness(1) saturate(1); }
          50% { filter: brightness(1.2) saturate(1.5); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(34, 211, 238, 0.3); }
          50% { box-shadow: 0 0 40px rgba(34, 211, 238, 0.8); }
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .transform-gpu {
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
        }
        
        .preserve-3d {
          transform-style: preserve-3d;
        }
        
        .rotate-y-2 {
          transform: rotateY(2deg);
        }
        
        * {
          font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        body {
          overflow-x: hidden;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {!isLoggedIn ? (
          <LandingPage />
        ) : (
          <>
            {currentView === 'home' && <HomePage />}
            {currentView === 'pulse' && <PulsePage />}
            {currentView === 'safari' && <SafariPage />}
            {currentView === 'jukwaa' && <JukwaaPage />}
            <Navigation />
          </>
        )}
        <NotificationToast />
      </div>
    </>
  );
};

export default CompleteRPGEcosystem;