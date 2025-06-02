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
  Bot, MessageCircle, Send,
PhoneCall, FileText, TrendingDown, AlertCircle, CheckCircle2
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
  const [agentChatOpen, setAgentChatOpen] = useState(false);
const [agentTyping, setAgentTyping] = useState(false); 

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

  // FIND your playerData and ADD these properties at the end:
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
  },
agentname: 'Araya',
  agentAvatar: '🤖',
  agentStatus: 'active',
  agentActions: {
    todayActions: 7,
    weeklyActions: 42,
    successRate: 94,
    earningsGenerated: 125000,
    opportunitiesFound: 15,
    applicationsSubmitted: 8,
    interviewsSecured: 3
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

  const [agentData, setAgentData] = useState({
  name: "ARAYA",
  status: "Working on your career",
  currentTask: "Analyzing new jazz venue opportunities", 
  lastAction: "Applied to Villa Rosa Kempinski - Piano Lounge",
  confidence: 94,
  workingOn: [
    { task: "Scanning 12 new music venues", progress: 67 },
    { task: "Optimizing practice schedule", progress: 100 },
    { task: "Building network connections", progress: 45 }
  ],
  recentActions: [
    {
      id: 1,
      action: "Applied to Sarova Hotel-Friday Jazz Nights",
      time: "2 hours ago",
      status: "pending", 
      confidence: 92,
      reasoning: "Your jazz piano skills match perfectly (91% compatibility)"
    },
    {
      id: 2,
      action: "Scheduled practice session: Advanced Jazz Theory",
      time: "4 hours ago",
      status: "completed",
      confidence: 98, 
      reasoning: "Optimal learning time based on your energy patterns"
    },
    {
      id: 3,
      action: "Connected with producer James Maina",
      time: "1 day ago",
      status: "interview_scheduled",
      confidence: 87,
      reasoning: "He's worked with artists in your genre and skill range"
    }
  ],
  recommendations: [
    {
      type: "opportunity",
      title: "Villa Rosa Kempinski - Weekend Piano",
      confidence: 96,
      earnings: 80000,
      deadline: "3 days",
      reasoning: "Premium venue, matches your classical-jazz fusion style",
      action: "auto_apply"
    },
    {
      type: "skill_development",
      title: "Focus on Advanced Improvisation", 
      confidence: 89,
      impact: "15% more gig opportunities",
      reasoning: "Market analysis shows high demand for improvisation skills"
    }
  ]
});

const [chatMessages, setChatMessages] = useState([
  {
    id: 1,
    sender: "agent",
    message: "Good morning Alex! I've been working on your career overnight. I found 3 new gig opportunities and applied to the ones that match your goals.",
    time: "8:30 AM",
    actions: ["View Applications", "See Opportunities"]
  },
  {
    id: 2,
    sender: "agent", 
    message: "Your practice session analytics show you perform 23% better in the evenings. I've optimized your schedule accordingly.",
    time: "9:15 AM",
    actions: ["View Schedule"]
  }
]);

  // Add notification
  const addNotification = (message, type = 'info') => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 3000);
  };

  const simulateAgentTyping = () => {
  setAgentTyping(true);
  setTimeout(() => {
    setAgentTyping(false);
    const newMessage = {
      id: Date.now(),
      sender: "agent",
      message: "I've just discovered a new opportunity at the Nairobi National Theatre. The requirements match your skill set perfectly. Should I apply automatically?",
      time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
      actions: ["Auto Apply", "Review First", "Skip"]
    };
    setChatMessages(prev => [...prev, newMessage]);
  }, 2000);
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

const AgentChatInterface = () => (
  <div className={`
    fixed bottom-24 right-4 w-96 h-[500px] z-40 transition-all duration-500
    ${agentChatOpen ? 'transform scale-100 opacity-100' : 'transform scale-95 opacity-0 pointer-events-none'}
  `}>
    <FloatingCard className="h-full flex flex-col border-indigo-400/30 bg-black/90">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Bot className="text-indigo-400" size={24} />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
          </div>
          <div>
            <div className="font-bold text-white">ARIA AI Agent</div>
            <div className="text-xs text-indigo-300">{agentData.status}</div>
          </div>
        </div>
        <button 
          onClick={() => setAgentChatOpen(false)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {chatMessages.map((msg) => (
          <div key={msg.id} className="space-y-2">
            <div className="flex gap-3">
              <Bot className="text-indigo-400 mt-1" size={16} />
              <div className="flex-1">
                <div className="bg-indigo-500/20 p-3 rounded-lg border border-indigo-400/30">
                  <p className="text-sm text-white">{msg.message}</p>
                </div>
                <div className="text-xs text-gray-400 mt-1">{msg.time}</div>
                {msg.actions && (
                  <div className="flex gap-2 mt-2">
                    {msg.actions.map((action, idx) => (
                      <HolographicButton 
                        key={idx}
                        variant="primary" 
                        size="small"
                        onClick={() => addNotification(`Agent action: ${action}`, 'success')}
                      >
                        {action}
                      </HolographicButton>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
        
        {agentTyping && (
          <div className="flex gap-3">
            <Bot className="text-indigo-400 mt-1" size={16} />
            <div className="bg-indigo-500/20 p-3 rounded-lg border border-indigo-400/30">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}} />
                <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}} />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-white/10">
        <div className="flex gap-2">
          <input 
            type="text" 
            placeholder="Ask your AI agent..."
            className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-indigo-400"
          />
          <HolographicButton variant="primary" size="small">
            <Send size={16} />
          </HolographicButton>
        </div>
      </div>
    </FloatingCard>
  </div>
);

// AI Agent Status Widget
const AgentStatusWidget = () => (
  <FloatingCard className="fixed top-4 right-4 w-80 p-4 border-indigo-400/30 z-30">
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-3">
        <div className="relative">
          <Bot className="text-indigo-400" size={20} />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        </div>
        <div>
          <div className="font-bold text-white text-sm">AI Agent Active</div>
          <div className="text-xs text-indigo-300">{agentData.currentTask}</div>
        </div>
      </div>
      <button 
        onClick={() => setAgentChatOpen(!agentChatOpen)}
        className="text-indigo-400 hover:text-white transition-colors"
      >
        <MessageCircle size={18} />
      </button>
    </div>

    <div className="space-y-2">
      {agentData.workingOn.map((task, idx) => (
        <div key={idx} className="text-xs">
          <div className="flex justify-between text-gray-300 mb-1">
            <span>{task.task}</span>
            <span>{task.progress}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-1">
            <div 
              className="bg-indigo-400 h-1 rounded-full transition-all duration-500"
              style={{ width: `${task.progress}%` }}
            />
          </div>
        </div>
      ))}
    </div>

    <div className="mt-3 pt-3 border-t border-white/10">
      <div className="text-xs text-gray-400">Last Action:</div>
      <div className="text-xs text-white">{agentData.lastAction}</div>
    </div>
  </FloatingCard>
);

// Floating AI Agent Button
const FloatingAgentButton = () => (
  <button
    onClick={() => setAgentChatOpen(!agentChatOpen)}
    className="fixed bottom-32 right-4 w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.5)] hover:shadow-[0_0_50px_rgba(99,102,241,0.8)] transition-all duration-300 hover:scale-110 z-50"
  >
    <Bot className="text-white" size={24} />
    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse" />
  </button>
);

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

    const HomePage = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/30 to-indigo-900/30 p-8 pb-32">
    <ParticleField density="low" />
    <div className="max-w-6xl mx-auto relative z-10">
      {/* Welcome Section with Agent Status */}
      <FloatingCard className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 p-8 border-indigo-400/30 mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <AnimatedText variant="title" className="text-4xl mb-2" glowColor="purple">
              Welcome back, <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">{playerData.name}!</span>
            </AnimatedText>
            <AnimatedText variant="body" className="text-gray-300 text-lg">
              Your AI agent has been working on your career while you slept 🤖
            </AnimatedText>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-indigo-400">{playerData.agentActions.todayActions}</div>
            <div className="text-sm text-gray-400">Actions taken today</div>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs text-green-400">Agent Active</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { 
              value: playerData.agentActions.successRate + '%', 
              label: 'Agent Success Rate', 
              color: 'emerald', 
              icon: TrendingUp,
              description: 'AI accuracy in decisions'
            },
            { 
              value: 'KSH ' + playerData.agentActions.earningsGenerated.toLocaleString(), 
              label: 'AI-Generated Earnings', 
              color: 'yellow', 
              icon: DollarSign,
              description: 'Money earned through agent'
            },
            { 
              value: playerData.agentActions.opportunitiesFound, 
              label: 'Opportunities Discovered', 
              color: 'purple', 
              icon: Eye,
              description: 'Gigs found automatically'
            },
            { 
              value: playerData.agentActions.applicationsSubmitted, 
              label: 'Auto Applications', 
              color: 'cyan', 
              icon: Send,
              description: 'Applied without your input'
            }
          ].map((stat, index) => (
            <FloatingCard key={index} className={`p-4 border-${stat.color}-400/30 hover:animate-pulse`}>
              <div className="flex items-center gap-3 mb-2">
                <stat.icon className={`text-${stat.color}-400`} size={24} />
                <AnimatedText variant="subtitle" className={`text-2xl text-${stat.color}-400`} glowColor={stat.color}>
                  {stat.value}
                </AnimatedText>
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.description}</div>
            </FloatingCard>
          ))}
        </div>
      </FloatingCard>

      {/* AI Agent Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <HolographicButton 
          onClick={() => {
            setAgentChatOpen(true);
            addNotification('🤖 Agent chat opened', 'info');
          }}
          variant="primary"
          className="p-8 flex-col h-auto hover:animate-pulse"
        >
          <Bot size={48} className="mb-4" />
          <AnimatedText variant="subtitle" className="text-xl mb-2" glowColor="cyan">
            Talk to ARIA
          </AnimatedText>
          <p className="text-blue-100 text-sm">Chat with your AI career agent</p>
          <div className="flex items-center gap-2 mt-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs text-green-400">Online</span>
          </div>
        </HolographicButton>

        <HolographicButton 
          onClick={() => {
            simulateAgentTyping();
            addNotification('🔍 Agent is finding new opportunities...', 'info');
          }}
          variant="primary"
          className="p-8 flex-col h-auto hover:animate-pulse"
        >
          <Eye size={48} className="mb-4" />
          <AnimatedText variant="subtitle" className="text-xl mb-2" glowColor="purple">
            Find Opportunities
          </AnimatedText>
          <p className="text-purple-100 text-sm">Let AI discover new gigs for you</p>
          <div className="text-xs text-purple-300 mt-1">Last scan: 2 hours ago</div>
        </HolographicButton>

        <HolographicButton 
          onClick={() => {
            addNotification('⚡ Agent optimizing your schedule...', 'success');
          }}
          variant="success"
          className="p-8 flex-col h-auto hover:animate-pulse"
        >
          <Zap size={48} className="mb-4" />
          <AnimatedText variant="subtitle" className="text-xl mb-2" glowColor="emerald">
            Optimize Schedule
          </AnimatedText>
          <p className="text-emerald-100 text-sm">AI-powered practice scheduling</p>
          <div className="text-xs text-emerald-300 mt-1">Next optimization: Evening</div>
        </HolographicButton>
      </div>

      {/* Agent Working Status & Recent Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <FloatingCard className="p-6 border-indigo-400/30">
          <AnimatedText variant="subtitle" className="text-xl mb-4 flex items-center gap-2" glowColor="cyan">
            <Bot size={24} />
            Agent Working On
          </AnimatedText>
          <div className="space-y-4">
            {agentData.workingOn.map((task, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">{task.task}</span>
                  <span className="text-indigo-400 font-bold">{task.progress}%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-indigo-400 to-purple-400 transition-all duration-1000"
                    style={{ width: `${task.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 p-3 bg-indigo-500/10 rounded-lg border border-indigo-400/30">
            <div className="flex items-center gap-2 mb-1">
              <Brain className="text-indigo-400" size={16} />
              <span className="text-sm font-medium text-white">Current Focus</span>
            </div>
            <p className="text-xs text-indigo-300">{agentData.currentTask}</p>
          </div>
        </FloatingCard>

        <FloatingCard className="p-6 border-emerald-400/30">
          <AnimatedText variant="subtitle" className="text-xl mb-4 flex items-center gap-2" glowColor="emerald">
            <CheckCircle size={24} />
            Recent Agent Actions
          </AnimatedText>
          <div className="space-y-3">
            {agentData.recentActions.slice(0, 4).map((action, index) => (
              <div key={index} className={`flex items-start gap-3 p-3 bg-emerald-500/10 rounded-lg border border-emerald-400/20 hover:animate-pulse transition-all duration-300`}>
                <div className={`mt-1 ${
                  action.status === 'completed' ? 'text-emerald-400' :
                  action.status === 'pending' ? 'text-yellow-400' :
                  'text-blue-400'
                }`}>
                  {action.status === 'completed' && <CheckCircle size={16} />}
                  {action.status === 'pending' && <Clock size={16} />}
                  {action.status === 'interview_scheduled' && <Calendar size={16} />}
                </div>
                <div className="flex-1">
                  <div className="text-sm text-white font-medium">{action.action}</div>
                  <div className="text-xs text-gray-400">{action.time}</div>
                  <div className="text-xs text-emerald-300">{action.confidence}% confidence</div>
                </div>
              </div>
            ))}
          </div>
        </FloatingCard>
      </div>

      {/* AI Recommendations */}
      <FloatingCard className="p-6 border-purple-400/30">
        <AnimatedText variant="subtitle" className="text-xl mb-6 flex items-center gap-2" glowColor="purple">
          <Brain size={24} />
          AI Strategic Recommendations
        </AnimatedText>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {agentData.recommendations.map((rec, index) => (
            <div key={index} className="p-4 bg-purple-500/10 rounded-lg border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-white text-sm">{rec.title}</h3>
                <div className="text-purple-400 font-bold text-sm">{rec.confidence}%</div>
              </div>
              <p className="text-xs text-gray-300 mb-3">{rec.reasoning}</p>
              
              {rec.earnings && (
                <div className="text-emerald-400 font-bold mb-3 text-sm">
                  💰 KSH {rec.earnings.toLocaleString()}
                </div>
              )}
              
              {rec.impact && (
                <div className="text-yellow-400 font-bold mb-3 text-xs">
                  📈 {rec.impact}
                </div>
              )}
              
              <div className="flex gap-2">
                {rec.action === 'auto_apply' ? (
                  <HolographicButton 
                    variant="success" 
                    size="small"
                    onClick={() => addNotification('🤖 Agent auto-applying for you!', 'success')}
                  >
                    <Send size={16} />
                    Auto Apply
                  </HolographicButton>
                ) : (
                  <HolographicButton 
                    variant="primary" 
                    size="small"
                    onClick={() => addNotification('⚡ Optimization started!', 'info')}
                  >
                    <Zap size={16} />
                    Optimize
                  </HolographicButton>
                )}
              </div>
            </div>
          ))}
        </div>
      </FloatingCard>
    </div>
  </div>
);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentInstrumentIndex((prev) => (prev + 1) % featuredInstruments.length);
      }, 3000);
      return () => clearInterval(interval);
    }, [featuredInstruments.length]);

    return (
  <>
    {/* Enhanced CSS with UPP.cz-inspired animations */}
    <style jsx>{`
      @import url('https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@100;200;300;400;500;600;700;800;900&family=SF+Pro+Rounded:wght@100;200;300;400;500;600;700;800;900&display=swap');
      
      @keyframes ripple {
        0% { transform: scale(0); opacity: 1; }
        100% { transform: scale(4); opacity: 0; }
      }
      
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
      }
      
      @keyframes breathe {
        0%, 100% { transform: perspective(1000px) rotateY(15deg) scale(1); }
        50% { transform: perspective(1000px) rotateY(15deg) scale(1.05); }
      }
      
      @keyframes rotate3d {
        0% { transform: rotateY(0deg); }
        100% { transform: rotateY(360deg); }
      }
      
      @keyframes shimmer {
        0% { transform: translateX(-100%) skewX(-12deg); }
        100% { transform: translateX(200%) skewX(-12deg); }
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
      
      .animate-float {
        animation: float 8s ease-in-out infinite;
      }
      
      .transform-gpu {
        transform: translateZ(0);
        backface-visibility: hidden;
        perspective: 1000px;
      }
      
      .preserve-3d {
        transform-style: preserve-3d;
      }
      
      .transform-style-preserve-3d {
        transform-style: preserve-3d;
      }
      
      .backface-hidden {
        backface-visibility: hidden;
      }
      
      .rotate-y-180 {
        transform: rotateY(180deg);
      }
      
      .rotate-y-2 {
        transform: rotateY(2deg);
      }
      
      .perspective-1000 {
        perspective: 1000px;
      }
      
      .group:hover .group-hover\\:rotate-y-180 {
        transform: rotateY(180deg);
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
    
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      {!isLoggedIn ? (
        <LandingPage />
      ) : (
        <>
          {currentView === 'home' && <HomePage />}
          
          {/* AI Agent Components */}
          <AgentStatusWidget />
          <AgentChatInterface />
          <FloatingAgentButton />
          
          {/* Navigation */}
          <div className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-xl border-t border-white/20 p-4 z-40">
            <div className="flex justify-center gap-4">
              {[
                { id: 'home', icon: Home, label: 'Home', color: 'indigo' },
                { id: 'practice', icon: Activity, label: 'Practice', color: 'emerald' },
                { id: 'career', icon: Briefcase, label: 'Career', color: 'yellow' },
                { id: 'agent', icon: Bot, label: 'AI Agent', color: 'purple' }
              ].map((item) => (
                <HolographicButton
                  key={item.id}
                  onClick={() => {
                    setCurrentView(item.id);
                    if (item.id === 'agent') simulateAgentTyping();
                  }}
                  variant={currentView === item.id ? 'primary' : 'secondary'}
                  className={`flex items-center gap-2 ${currentView === item.id ? 'animate-pulse' : ''}`}
                >
                  <item.icon size={20} />
                  {item.label}
                </HolographicButton>
              ))}
            </div>
          </div>
        </>
      )}
      
      {/* Notification Toast */}
      <div className="fixed top-20 right-4 z-50 space-y-2">
        {notifications.map((notification) => (
          <FloatingCard
            key={notification.id}
            className={`p-3 max-w-sm transition-all duration-500 ${
              notification.type === 'success' ? 'border-green-400/30 bg-green-500/10' :
              notification.type === 'warning' ? 'border-yellow-400/30 bg-yellow-500/10' :
              'border-blue-400/30 bg-blue-500/10'
            }`}
          >
            <div className="flex items-center gap-2">
              {notification.type === 'success' && <CheckCircle size={16} className="text-green-400" />}
              {notification.type === 'warning' && <Bell size={16} className="text-yellow-400" />}
              {notification.type === 'info' && <Bot size={16} className="text-blue-400" />}
              <span className="text-sm text-white">{notification.message}</span>
            </div>
          </FloatingCard>
        ))}
      </div>
    </div>
  </>
);
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
// REPLACE YOUR ENTIRE HomePage COMPONENT WITH THIS CODE:
const HomePage = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/30 to-indigo-900/30 p-8 pb-32">
    {/* Particle Background Effect */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i}
          className="absolute text-indigo-400/20 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${8 + Math.random() * 6}px`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${6 + Math.random() * 4}s`
          }}
        >
          {['♪', '♫', '♬', '🤖', '⚡', '🎵'][Math.floor(Math.random() * 6)]}
        </div>
      ))}
    </div>

    <div className="max-w-6xl mx-auto relative z-10">
      {/* Welcome Section with Agent Status */}
      <FloatingCard className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 p-8 border-indigo-400/30 mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-4xl font-black text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text mb-2">
              Welcome back, {playerData.name}! 🤖
            </h1>
            <p className="text-gray-300 text-lg">
              Your AI agent has been working on your career while you slept
            </p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-indigo-400">{playerData.agentActions?.todayActions || 7}</div>
            <div className="text-sm text-gray-400">Actions taken today</div>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs text-green-400">Agent Active</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { 
              value: (playerData.agentActions?.successRate || 94) + '%', 
              label: 'Agent Success Rate', 
              color: 'emerald', 
              icon: TrendingUp,
              description: 'AI accuracy in decisions'
            },
            { 
              value: 'KSH ' + (playerData.agentActions?.earningsGenerated || 125000).toLocaleString(), 
              label: 'AI-Generated Earnings', 
              color: 'yellow', 
              icon: DollarSign,
              description: 'Money earned through agent'
            },
            { 
              value: playerData.agentActions?.opportunitiesFound || 15, 
              label: 'Opportunities Discovered', 
              color: 'purple', 
              icon: Eye,
              description: 'Gigs found automatically'
            },
            { 
              value: playerData.agentActions?.applicationsSubmitted || 8, 
              label: 'Auto Applications', 
              color: 'cyan', 
              icon: Send,
              description: 'Applied without your input'
            }
          ].map((stat, index) => (
            <FloatingCard key={index} className={`p-4 border-${stat.color}-400/30 hover:animate-pulse`}>
              <div className="flex items-center gap-3 mb-2">
                <stat.icon className={`text-${stat.color}-400`} size={24} />
                <div className={`text-2xl font-bold text-${stat.color}-400`}>
                  {stat.value}
                </div>
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.description}</div>
            </FloatingCard>
          ))}
        </div>
      </FloatingCard>

      {/* AI Agent Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <HolographicButton 
          onClick={() => {
            addNotification('🤖 Agent chat opened', 'info');
          }}
          variant="primary"
          className="p-8 flex-col h-auto hover:animate-pulse"
        >
          <Bot size={48} className="mb-4" />
          <div className="text-xl font-bold mb-2 text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text">
            Talk to ARIA
          </div>
          <p className="text-indigo-100 text-sm">Chat with your AI career agent</p>
          <div className="flex items-center gap-2 mt-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs text-green-400">Online</span>
          </div>
        </HolographicButton>

        <HolographicButton 
          onClick={() => {
            addNotification('🔍 Agent is finding new opportunities...', 'info');
          }}
          variant="primary"
          className="p-8 flex-col h-auto hover:animate-pulse"
        >
          <Eye size={48} className="mb-4" />
          <div className="text-xl font-bold mb-2 text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
            Find Opportunities
          </div>
          <p className="text-purple-100 text-sm">Let AI discover new gigs for you</p>
          <div className="text-xs text-purple-300 mt-1">Last scan: 2 hours ago</div>
        </HolographicButton>

        <HolographicButton 
          onClick={() => {
            addNotification('⚡ Agent optimizing your schedule...', 'success');
          }}
          variant="success"
          className="p-8 flex-col h-auto hover:animate-pulse"
        >
          <Zap size={48} className="mb-4" />
          <div className="text-xl font-bold mb-2 text-transparent bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text">
            Optimize Schedule
          </div>
          <p className="text-emerald-100 text-sm">AI-powered practice scheduling</p>
          <div className="text-xs text-emerald-300 mt-1">Next optimization: Evening</div>
        </HolographicButton>
      </div>

      {/* Agent Working Status & Recent Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <FloatingCard className="p-6 border-indigo-400/30">
          <div className="flex items-center gap-3 mb-4">
            <Bot className="text-indigo-400" size={24} />
            <h2 className="text-xl font-bold text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text">
              Agent Working On
            </h2>
          </div>
          <div className="space-y-4">
            {[
              { task: "Scanning 12 new music venues", progress: 67 },
              { task: "Optimizing practice schedule", progress: 100 },
              { task: "Building network connections", progress: 45 }
            ].map((task, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">{task.task}</span>
                  <span className="text-indigo-400 font-bold">{task.progress}%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-indigo-400 to-purple-400 transition-all duration-1000"
                    style={{ width: `${task.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 p-3 bg-indigo-500/10 rounded-lg border border-indigo-400/30">
            <div className="flex items-center gap-2 mb-1">
              <Brain className="text-indigo-400" size={16} />
              <span className="text-sm font-medium text-white">Current Focus</span>
            </div>
            <p className="text-xs text-indigo-300">Analyzing new jazz venue opportunities</p>
          </div>
        </FloatingCard>

        <FloatingCard className="p-6 border-emerald-400/30">
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle className="text-emerald-400" size={24} />
            <h2 className="text-xl font-bold text-transparent bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text">
              Recent Agent Actions
            </h2>
          </div>
          <div className="space-y-3">
            {[
              {
                action: "Applied to Serena Hotel Jazz Nights",
                time: "2 hours ago",
                status: "pending",
                confidence: 92
              },
              {
                action: "Scheduled practice session",
                time: "4 hours ago", 
                status: "completed",
                confidence: 98
              },
              {
                action: "Connected with producer James Maina",
                time: "1 day ago",
                status: "interview_scheduled",
                confidence: 87
              }
            ].map((action, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-emerald-500/10 rounded-lg border border-emerald-400/20 hover:animate-pulse transition-all duration-300">
                <div className={`mt-1 ${
                  action.status === 'completed' ? 'text-emerald-400' :
                  action.status === 'pending' ? 'text-yellow-400' :
                  'text-blue-400'
                }`}>
                  {action.status === 'completed' && <CheckCircle size={16} />}
                  {action.status === 'pending' && <Clock size={16} />}
                  {action.status === 'interview_scheduled' && <Calendar size={16} />}
                </div>
                <div className="flex-1">
                  <div className="text-sm text-white font-medium">{action.action}</div>
                  <div className="text-xs text-gray-400">{action.time}</div>
                  <div className="text-xs text-emerald-300">{action.confidence}% confidence</div>
                </div>
              </div>
            ))}
          </div>
        </FloatingCard>
      </div>

      {/* AI Recommendations */}
      <FloatingCard className="p-6 border-purple-400/30">
        <div className="flex items-center gap-3 mb-6">
          <Brain className="text-purple-400" size={24} />
          <h2 className="text-xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
            AI Strategic Recommendations
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Villa Rosa Kempinski - Weekend Piano",
              confidence: 96,
              earnings: 80000,
              reasoning: "Premium venue, matches your classical-jazz fusion style",
              action: "auto_apply"
            },
            {
              title: "Focus on Advanced Improvisation",
              confidence: 89,
              impact: "15% more gig opportunities",
              reasoning: "Market analysis shows high demand for improvisation skills",
              action: "optimize"
            }
          ].map((rec, index) => (
            <div key={index} className="p-4 bg-purple-500/10 rounded-lg border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-white text-sm">{rec.title}</h3>
                <div className="text-purple-400 font-bold text-sm">{rec.confidence}%</div>
              </div>
              <p className="text-xs text-gray-300 mb-3">{rec.reasoning}</p>
              
              {rec.earnings && (
                <div className="text-emerald-400 font-bold mb-3 text-sm">
                  💰 KSH {rec.earnings.toLocaleString()}
                </div>
              )}
              
              {rec.impact && (
                <div className="text-yellow-400 font-bold mb-3 text-xs">
                  📈 {rec.impact}
                </div>
              )}
              
              <div className="flex gap-2">
                {rec.action === 'auto_apply' ? (
                  <HolographicButton 
                    variant="success" 
                    size="small"
                    onClick={() => addNotification('🤖 Agent auto-applying for you!', 'success')}
                  >
                    <Send size={16} />
                    Auto Apply
                  </HolographicButton>
                ) : (
                  <HolographicButton 
                    variant="primary" 
                    size="small"
                    onClick={() => addNotification('⚡ Optimization started!', 'info')}
                  >
                    <Zap size={16} />
                    Optimize
                  </HolographicButton>
                )}
              </div>
            </div>
          ))}
        </div>
      </FloatingCard>
    </div>
  </div>
);

  // Enhanced Practice Page
const PulseSystem = () => {
  const [currentPulseView, setCurrentPulseView] = useState('dashboard');
  const [practiceTimer, setPracticeTimer] = useState({ active: false, duration: 0, startTime: null });
  const [todaysPractice, setTodaysPractice] = useState([]);
  const [practiceGoals, setPracticeGoals] = useState({
    dailyMinutes: 60,
    weeklyGoal: 420, // 7 days * 60 minutes
    currentWeekMinutes: 315
  });

  // Practice session data
  const [activePracticeSession, setActivePracticeSession] = useState({
    instrument: 'guitar',
    exercise: 'Jazz Scales Practice',
    difficulty: 3,
    skills: ['rhythm', 'scales'],
    realTimeMetrics: {
      rhythmAccuracy: 94,
      pitchAccuracy: 87,
      consistency: 91,
      focus: 85,
      bpm: 120
    }
  });

  // Practice history and analytics
  const [practiceAnalytics, setPracticeAnalytics] = useState({
    streak: 23,
    totalXP: 1500,
    level: 12,
    skillProgression: {
      rhythm: { current: 85, change: +5 },
      harmony: { current: 72, change: +3 },
      technique: { current: 91, change: +2 },
      improvisation: { current: 70, change: +1 },
      sightReading: { current: 55, change: 0 }
    },
    weeklyProgress: [45, 60, 30, 75, 90, 45, 20], // Last 7 days
    instrumentBreakdown: {
      guitar: 65,
      piano: 25,
      vocals: 10
    }
  });

  // Practice timer functionality
  useEffect(() => {
    let interval;
    if (practiceTimer.active) {
      interval = setInterval(() => {
        setPracticeTimer(prev => ({
          ...prev,
          duration: prev.duration + 1
        }));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [practiceTimer.active]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const startPractice = () => {
    setPracticeTimer({
      active: true,
      duration: 0,
      startTime: new Date()
    });
    addNotification('🎵 Practice session started! ARIA is monitoring your progress.', 'success');
  };

  const stopPractice = () => {
    const sessionData = {
      duration: practiceTimer.duration,
      instrument: activePracticeSession.instrument,
      exercise: activePracticeSession.exercise,
      xpGained: Math.floor(practiceTimer.duration / 60) * 15,
      timestamp: new Date(),
      metrics: activePracticeSession.realTimeMetrics
    };
    
    setTodaysPractice(prev => [...prev, sessionData]);
    setPracticeTimer({ active: false, duration: 0, startTime: null });
    addNotification(`🎉 Session complete! +${sessionData.xpGained} XP earned!`, 'success');
  };

  // PULSE Dashboard View
  const PulseDashboard = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900/30 to-cyan-900/30 p-8 pb-32">
      <ParticleField density="low" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <AnimatedText variant="title" className="text-4xl mb-2" glowColor="emerald">
              PULSE Practice
            </AnimatedText>
            <AnimatedText variant="body" className="text-gray-300">
              Monday, June 2nd • Day {practiceAnalytics.streak} Streak 🔥
            </AnimatedText>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-emerald-400">Level {practiceAnalytics.level}</div>
            <div className="text-sm text-gray-400">{practiceAnalytics.totalXP} XP</div>
          </div>
        </div>

        {/* Today's Practice Summary */}
        <FloatingCard className="bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 p-8 border-emerald-400/30 mb-8">
          <AnimatedText variant="subtitle" className="text-2xl mb-6" glowColor="emerald">
            Today's Practice Summary
          </AnimatedText>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400">
                {Math.floor(todaysPractice.reduce((acc, session) => acc + session.duration, 0) / 60)}
              </div>
              <div className="text-sm text-gray-400">Minutes Practiced</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">
                {todaysPractice.reduce((acc, session) => acc + session.xpGained, 0)}
              </div>
              <div className="text-sm text-gray-400">XP Gained</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">{todaysPractice.length}</div>
              <div className="text-sm text-gray-400">Sessions</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <span className="text-gray-300">Daily Goal Progress</span>
              <span className="text-emerald-400 font-bold">
                {Math.floor(todaysPractice.reduce((acc, session) => acc + session.duration, 0) / 60)}/{practiceGoals.dailyMinutes} min
              </span>
            </div>
            <div className="h-4 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-1000"
                style={{ 
                  width: `${Math.min(100, (todaysPractice.reduce((acc, session) => acc + session.duration, 0) / 60 / practiceGoals.dailyMinutes) * 100)}%` 
                }}
              />
            </div>
          </div>

          {/* Skill Progress Today */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.entries(practiceAnalytics.skillProgression).slice(0, 3).map(([skill, data]) => (
              <div key={skill} className="bg-black/20 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white capitalize">{skill}</span>
                  <span className="text-emerald-400 font-bold">
                    {data.change > 0 ? '+' : ''}{data.change}
                  </span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600"
                    style={{ width: `${data.current}%` }}
                  />
                </div>
                <div className="text-xs text-gray-400 mt-1">{data.current}% mastery</div>
              </div>
            ))}
          </div>
        </FloatingCard>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <HolographicButton 
            onClick={() => {
              if (practiceTimer.active) {
                stopPractice();
              } else {
                startPractice();
              }
            }}
            variant={practiceTimer.active ? "warning" : "success"}
            className="p-6 flex-col h-auto hover:animate-pulse"
          >
            {practiceTimer.active ? (
              <>
                <Square size={48} className="mb-4" />
                <AnimatedText variant="subtitle" className="text-lg mb-2" glowColor="yellow">
                  Stop Practice
                </AnimatedText>
                <div className="text-xl font-bold text-yellow-400">
                  {formatTime(practiceTimer.duration)}
                </div>
              </>
            ) : (
              <>
                <Play size={48} className="mb-4" />
                <AnimatedText variant="subtitle" className="text-lg mb-2" glowColor="emerald">
                  Start Practice
                </AnimatedText>
                <p className="text-emerald-100 text-sm">Begin your session</p>
              </>
            )}
          </HolographicButton>

          <HolographicButton 
            onClick={() => setCurrentPulseView('log')}
            variant="primary"
            className="p-6 flex-col h-auto hover:animate-pulse"
          >
            <FileText size={48} className="mb-4" />
            <AnimatedText variant="subtitle" className="text-lg mb-2" glowColor="cyan">
              Practice Log
            </AnimatedText>
            <p className="text-cyan-100 text-sm">View your history</p>
          </HolographicButton>

          <HolographicButton 
            onClick={() => setCurrentPulseView('analytics')}
            variant="secondary"
            className="p-6 flex-col h-auto hover:animate-pulse"
          >
            <BarChart3 size={48} className="mb-4" />
            <AnimatedText variant="subtitle" className="text-lg mb-2" glowColor="purple">
              Analytics
            </AnimatedText>
            <p className="text-purple-100 text-sm">Track progress</p>
          </HolographicButton>

          <HolographicButton 
            onClick={() => {
              addNotification('💧 Brain hydration reminder activated!', 'info');
            }}
            variant="primary"
            className="p-6 flex-col h-auto hover:animate-pulse"
          >
            <Coffee size={48} className="mb-4" />
            <AnimatedText variant="subtitle" className="text-lg mb-2" glowColor="cyan">
              Hydrate Brain
            </AnimatedText>
            <p className="text-cyan-100 text-sm">Stay focused</p>
          </HolographicButton>
        </div>

        {/* AI Agent Integration */}
        <FloatingCard className="p-6 border-indigo-400/30 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Bot className="text-indigo-400" size={24} />
            <AnimatedText variant="subtitle" className="text-xl" glowColor="indigo">
              ARIA's Practice Insights
            </AnimatedText>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-indigo-500/10 p-4 rounded-lg border border-indigo-400/30">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="text-emerald-400" size={16} />
                <span className="text-white font-medium">Performance Analysis</span>
              </div>
              <p className="text-sm text-gray-300">
                Your practice efficiency is 23% higher in the evenings. I've optimized your schedule accordingly.
              </p>
            </div>
            
            <div className="bg-indigo-500/10 p-4 rounded-lg border border-indigo-400/30">
              <div className="flex items-center gap-2 mb-2">
                <Target className="text-yellow-400" size={16} />
                <span className="text-white font-medium">Skill Recommendation</span>
              </div>
              <p className="text-sm text-gray-300">
                Focus on Am7 chord transitions - this skill is required for the Serena Hotel audition.
              </p>
            </div>
          </div>
        </FloatingCard>

        {/* Today's Sessions */}
        {todaysPractice.length > 0 && (
          <FloatingCard className="p-6 border-emerald-400/30">
            <AnimatedText variant="subtitle" className="text-xl mb-4" glowColor="emerald">
              Today's Practice Sessions
            </AnimatedText>
            
            <div className="space-y-4">
              {todaysPractice.map((session, index) => (
                <div key={index} className="bg-emerald-500/10 p-4 rounded-lg border border-emerald-400/30">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-white font-medium">{session.exercise}</div>
                      <div className="text-sm text-gray-400">
                        {session.instrument.charAt(0).toUpperCase() + session.instrument.slice(1)} • {Math.floor(session.duration / 60)} minutes
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-emerald-400 font-bold">+{session.xpGained} XP</div>
                      <div className="text-xs text-gray-400">
                        {session.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FloatingCard>
        )}
      </div>
    </div>
  );

  // Practice Analytics View
  const PracticeAnalytics = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/30 to-cyan-900/30 p-8 pb-32">
      <ParticleField density="low" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center justify-between mb-8">
          <AnimatedText variant="title" className="text-4xl" glowColor="purple">
            Practice Analytics
          </AnimatedText>
          <HolographicButton onClick={() => setCurrentPulseView('dashboard')} variant="secondary">
            <Home size={20} />
            Back to Dashboard
          </HolographicButton>
        </div>

        {/* Skill Development Chart */}
        <FloatingCard className="p-8 mb-8 border-purple-400/30">
          <AnimatedText variant="subtitle" className="text-2xl mb-6" glowColor="purple">
            Skill Development (Last 30 Days)
          </AnimatedText>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Progress Breakdown</h3>
              <div className="space-y-4">
                {Object.entries(practiceAnalytics.skillProgression).map(([skill, data]) => (
                  <div key={skill} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300 capitalize">{skill}</span>
                      <span className="text-purple-400 font-bold">{data.current}%</span>
                    </div>
                    <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-400 to-cyan-400 transition-all duration-1000"
                        style={{ width: `${data.current}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Weekly Practice Time</h3>
              <div className="flex items-end gap-2 h-40">
                {practiceAnalytics.weeklyProgress.map((minutes, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <div 
                      className="w-full bg-gradient-to-t from-purple-500 to-cyan-400 rounded-t"
                      style={{ height: `${(minutes / 90) * 100}%` }}
                    />
                    <div className="text-xs text-gray-400">
                      {['M', 'T', 'W', 'T', 'F', 'S', 'S'][index]}
                    </div>
                    <div className="text-xs text-purple-400 font-bold">{minutes}m</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FloatingCard>

        {/* Achievements & Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FloatingCard className="p-6 border-emerald-400/30">
            <div className="text-center">
              <Flame className="text-emerald-400 mx-auto mb-4" size={48} />
              <AnimatedText variant="title" className="text-3xl mb-2" glowColor="emerald">
                {practiceAnalytics.streak}
              </AnimatedText>
              <div className="text-gray-400">Day Streak</div>
            </div>
          </FloatingCard>

          <FloatingCard className="p-6 border-yellow-400/30">
            <div className="text-center">
              <Trophy className="text-yellow-400 mx-auto mb-4" size={48} />
              <AnimatedText variant="title" className="text-3xl mb-2" glowColor="yellow">
                {practiceAnalytics.level}
              </AnimatedText>
              <div className="text-gray-400">Current Level</div>
            </div>
          </FloatingCard>

          <FloatingCard className="p-6 border-cyan-400/30">
            <div className="text-center">
              <Star className="text-cyan-400 mx-auto mb-4" size={48} />
              <AnimatedText variant="title" className="text-3xl mb-2" glowColor="cyan">
                {practiceAnalytics.totalXP}
              </AnimatedText>
              <div className="text-gray-400">Total XP</div>
            </div>
          </FloatingCard>
        </div>
      </div>
    </div>
  );

  // Render appropriate view
  switch (currentPulseView) {
    case 'analytics':
      return <PracticeAnalytics />;
    case 'log':
      return <PulseDashboard />; // For now, we'll enhance this later
    default:
      return <PulseDashboard />;
  }
};

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
  { id: 'home', icon: Home, label: 'Home', color: 'indigo' },
  { id: 'pulse', icon: Activity, label: 'PULSE', color: 'emerald' },
  { id: 'career', icon: Briefcase, label: 'Career', color: 'yellow' },
  { id: 'agent', icon: Bot, label: 'AI Agent', color: 'purple' }
].map((item) => (
  <HolographicButton
    key={item.id}
    onClick={() => {
      setCurrentView(item.id);
      if (item.id === 'agent') simulateAgentTyping();
    }}
    variant={currentView === item.id ? 'primary' : 'secondary'}
    className={`flex items-center gap-2 ${currentView === item.id ? 'animate-pulse' : ''}`}
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
            {currentView === 'pulse' && <PulseSystem />}
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