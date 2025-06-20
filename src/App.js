import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Activity, 
  Target, 
  TrendingUp, 
  BarChart3, 
  Trophy,
  Map, 
  Compass, 
  Briefcase, 
  DollarSign, 
  MapPin, 
  CheckCircle,
  Building, 
  Sparkles, 
  Lock, 
  Bell, 
  Rocket, 
  ArrowRight, 
  ArrowLeft,
  ChevronRight, 
  Bot, 
  MessageCircle, 
  Send, 
  Home, 
  User, 
  X, 
  Star,
  Clock, 
  Calendar, 
  Music, 
  Heart, 
  Award, 
  Users, 
  Zap
} from 'lucide-react';

const CompleteRPGEcosystem = () => {
  const [currentView, setCurrentView] = useState('landing');
  const [practiceActive, setPracticeActive] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [agentChatOpen, setAgentChatOpen] = useState(false);
  const [agentTyping, setAgentTyping] = useState(false);
  
  // Signup process state
  const [showSignup, setShowSignup] = useState(false);
  const [signupStep, setSignupStep] = useState(0);
  const [signupData, setSignupData] = useState({
    name: '',
    age: '',
    location: '',
    goals: [],
    instruments: [],
    skillLevel: '',
    practiceTime: '',
    musicStyle: [],
    experience: '',
    availability: [],
    motivation: ''
  });

  // Enhanced mouse tracking for immersive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Mouse tracking can be used for future features
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

  const [playerData] = useState({
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

  const [practiceSession] = useState({
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

  const [questData] = useState({
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

  const [careerData] = useState({
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

  const [agentData] = useState({
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

  // Signup process data
  const signupSteps = [
    {
      id: 'welcome',
      title: 'Welcome to DOBA',
      subtitle: 'Your AI-Powered Music Career Journey Starts Here'
    },
    {
      id: 'personal',
      title: 'Tell Us About Yourself',
      subtitle: 'Help us personalize your experience'
    },
    {
      id: 'goals',
      title: 'What Are Your Music Goals?',
      subtitle: 'Select all that apply to you'
    },
    {
      id: 'instruments',
      title: 'Which Instruments Do You Play?',
      subtitle: 'Choose your primary instruments'
    },
    {
      id: 'skill-level',
      title: 'What\'s Your Skill Level?',
      subtitle: 'Be honest - we\'ll help you improve'
    },
    {
      id: 'practice-time',
      title: 'How Much Can You Practice?',
      subtitle: 'Help us create your practice schedule'
    },
    {
      id: 'music-style',
      title: 'What Music Styles Interest You?',
      subtitle: 'Select genres you want to explore'
    },
    {
      id: 'availability',
      title: 'When Are You Available for Gigs?',
      subtitle: 'Help ARIA find opportunities that fit your schedule'
    },
    {
      id: 'motivation',
      title: 'What Motivates You Most?',
      subtitle: 'Let us understand what drives your musical journey'
    },
    {
      id: 'complete',
      title: 'You\'re All Set!',
      subtitle: 'ARIA is already finding opportunities for you'
    }
  ];

  const musicGoals = [
    { id: 'professional', icon: '💼', label: 'Become a Professional Musician', desc: 'Make music your career' },
    { id: 'income', icon: '💰', label: 'Generate Extra Income', desc: 'Earn money from music skills' },
    { id: 'skill', icon: '🎯', label: 'Improve My Skills', desc: 'Master new techniques' },
    { id: 'hobby', icon: '❤️', label: 'Play for Personal Joy', desc: 'Music as a passion' },
    { id: 'social', icon: '👥', label: 'Join a Band/Group', desc: 'Collaborate with others' },
    { id: 'performance', icon: '🎤', label: 'Perform on Stage', desc: 'Live performances' }
  ];

  const skillLevels = [
    { id: 'beginner', icon: '🌱', label: 'Beginner', desc: 'Just starting out' },
    { id: 'intermediate', icon: '📈', label: 'Intermediate', desc: 'Have some experience' },
    { id: 'advanced', icon: '🏆', label: 'Advanced', desc: 'Quite skilled' },
    { id: 'professional', icon: '⭐', label: 'Professional', desc: 'Work as a musician' }
  ];

  const practiceTimeOptions = [
    { id: '15min', label: '15-30 minutes daily', icon: '⏱️' },
    { id: '1hour', label: '1 hour daily', icon: '🕐' },
    { id: '2hours', label: '2-3 hours daily', icon: '🕑' },
    { id: 'flexible', label: 'Flexible schedule', icon: '📅' }
  ];

  const musicStyles = [
    { id: 'jazz', icon: '🎷', label: 'Jazz' },
    { id: 'classical', icon: '🎼', label: 'Classical' },
    { id: 'afrobeat', icon: '🥁', label: 'Afrobeat' },
    { id: 'gospel', icon: '⛪', label: 'Gospel' },
    { id: 'pop', icon: '🎵', label: 'Pop' },
    { id: 'rock', icon: '🎸', label: 'Rock' },
    { id: 'traditional', icon: '🪘', label: 'Traditional Kenyan' },
    { id: 'blues', icon: '💙', label: 'Blues' }
  ];

  const availabilityOptions = [
    { id: 'weekends', icon: '📅', label: 'Weekends Only' },
    { id: 'evenings', icon: '🌆', label: 'Weekday Evenings' },
    { id: 'flexible', icon: '⏰', label: 'Flexible Hours' },
    { id: 'fulltime', icon: '🕐', label: 'Full-time Available' }
  ];

  const motivations = [
    { id: 'money', icon: '💰', label: 'Financial Freedom', desc: 'Earn a living from music' },
    { id: 'passion', icon: '❤️', label: 'Pure Passion', desc: 'Love for music itself' },
    { id: 'recognition', icon: '🏆', label: 'Recognition & Fame', desc: 'Be known for my talent' },
    { id: 'growth', icon: '📈', label: 'Personal Growth', desc: 'Constant improvement' }
  ];

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
        // Practice session updates would go here
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [practiceActive]);

  // Signup handlers
  const nextStep = () => {
    if (signupStep < signupSteps.length - 1) {
      setSignupStep(signupStep + 1);
    }
  };

  const prevStep = () => {
    if (signupStep > 0) {
      setSignupStep(signupStep - 1);
    }
  };

  const updateSignupData = (field, value) => {
    setSignupData(prev => ({ ...prev, [field]: value }));
  };

  const toggleArrayValue = (field, value) => {
    setSignupData(prev => ({
      ...prev,
      [field]: prev[field].includes(value) 
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const completeSignup = () => {
    setShowSignup(false);
    setIsLoggedIn(true);
    addNotification('Welcome to DOBA! ARIA is now setting up your profile.', 'success');
  };

  // 3D Holographic Button Component
  const HolographicButton = ({ 
    children, 
    onClick, 
    variant = 'primary', 
    size = 'medium', 
    className = '', 
    glowIntensity = 'medium',
    disabled = false,
    ...props 
  }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isPressed, setIsPressed] = useState(false);
    const [ripples, setRipples] = useState([]);

    const handleClick = (e) => {
      if (disabled) return;
      
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
        disabled={disabled}
        className={`
          relative overflow-hidden font-black tracking-wider transition-all duration-300 ease-out
          transform-gpu cursor-pointer select-none rounded-2xl border-2 backdrop-blur-xl
          bg-gradient-to-br ${isHovered ? currentVariant.hover : currentVariant.base}
          ${currentVariant.glow} ${currentVariant.border}
          ${isHovered ? 'scale-105 rotate-y-2' : 'scale-100'}
          ${isPressed ? 'scale-95' : ''}
          ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
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
            className="absolute rounded-full bg-slate-800/30 animate-ping"
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
    }
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

  // Signup Process Component
  const SignupProcess = () => {
    const currentStep = signupSteps[signupStep];
    const progress = ((signupStep + 1) / signupSteps.length) * 100;

    const renderStepContent = () => {
      switch (currentStep.id) {
        case 'welcome':
          return (
            <div className="text-center space-y-8">
              <div className="text-8xl mb-6">🎵</div>
              <div className="space-y-4">
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  DOBA transforms music education into active career building. Your practice creates professional opportunities through intelligent AI assistance.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="p-4 bg-cyan-500/10 rounded-lg border border-cyan-400/30">
                <Activity className="mx-auto mb-2 text-cyan-400" size={32} />
                <h4 className="font-bold text-white">Practice Analytics</h4>
                <p className="text-sm text-gray-300">Track your progress and unlock new skills</p>
              </div>
              <div className="p-4 bg-yellow-500/10 rounded-lg border border-yellow-400/30">
                <Compass className="mx-auto mb-2 text-yellow-400" size={32} />
                <h4 className="font-bold text-white">Safari XP</h4>
                <p className="text-sm text-gray-300">Turn learning into epic quests and adventures</p>
              </div>
              <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-400/30">
                <Bot className="mx-auto mb-2 text-purple-400" size={32} />
                <h4 className="font-bold text-white">ARIA AI Agent</h4>
                <p className="text-sm text-gray-300">Your 24/7 career manager and gig finder</p>
              </div>
            </div>
          </div>

          {/* Success Stories */}
          <div className="text-center mb-20">
            <AnimatedText variant="title" glowColor="emerald" className="mb-8">
              Real Success Stories
            </AnimatedText>
            <div className="grid md:grid-cols-3 gap-8">
              <FloatingCard className="p-6 border-emerald-400/30">
                <div className="text-4xl mb-4">👨‍🎤</div>
                <h4 className="font-bold text-white mb-2">James Kiprotich</h4>
                <p className="text-emerald-400 font-bold mb-2">From Beginner to KSH 150k/month</p>
                <p className="text-sm text-gray-300">"ARIA found me 3 hotel gigs in my first month. Now I earn more from music than my day job!"</p>
              </FloatingCard>
              
              <FloatingCard className="p-6 border-purple-400/30">
                <div className="text-4xl mb-4">👩‍🎤</div>
                <h4 className="font-bold text-white mb-2">Grace Wanjiku</h4>
                <p className="text-purple-400 font-bold mb-2">Built 5-Person Band Network</p>
                <p className="text-sm text-gray-300">"Safari XP quests connected me with amazing musicians. We now perform at major events!"</p>
              </FloatingCard>
              
              <FloatingCard className="p-6 border-yellow-400/30">
                <div className="text-4xl mb-4">🎸</div>
                <h4 className="font-bold text-white mb-2">Michael Ochieng</h4>
                <p className="text-yellow-400 font-bold mb-2">Mastered 4 Instruments in 6 Months</p>
                <p className="text-sm text-gray-300">"PULSE system made practice addictive. I've never improved so fast in my life!"</p>
              </FloatingCard>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <AnimatedText variant="title" glowColor="cyan" className="mb-6">
              Ready to Transform Your Musical Journey?
            </AnimatedText>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of Kenyan musicians who are turning their passion into profit with DOBA's AI-powered platform.
            </p>
            <HolographicButton
              variant="primary"
              size="xl"
              onClick={() => setShowSignup(true)}
              className="transform hover:scale-110"
            >
              <Star className="mr-3" size={24} />
              Join DOBA Today - It's Free!
            </HolographicButton>
          </div>
        </div>
      </div>
    );
  }

  // Main render
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

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(30, 41, 59, 0.3);
        }
        
        ::-webkit-scrollbar-thumb {
          background: rgba(34, 211, 238, 0.5);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(34, 211, 238, 0.8);
        }
      `}</style>
      
      <div className="min-h-screen bg-slate-900 pb-32 text-white">
        {/* Signup Process Modal */}
        {showSignup && <SignupProcess />}
        
        {!isLoggedIn ? (
          <LandingPage />
        ) : (
          <>
            {currentView === 'home' && <HomePage />}
            {currentView === 'practice' && <PulseSystem />}
            {currentView === 'safari' && <SafariXP />}
            {currentView === 'career' && <Jukwaa />}
            
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
                  { id: 'safari', icon: Compass, label: 'Safari XP', color: 'yellow' },
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
};

/* The misplaced switch/case code for signup steps has been removed.
   All signup step rendering is handled inside the renderStepContent function
   within the SignupProcess component above. */

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
              className="flex-1 bg-slate-800/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-indigo-400"
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

  // Safari XP Component
  const SafariXP = () => {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 p-8">
        <ParticleField density="medium" />
        
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <AnimatedText variant="hero" glowColor="yellow" className="mb-4">
              SAFARI XP
            </AnimatedText>
            <AnimatedText variant="subtitle" glowColor="cyan" className="opacity-80">
              Turn Your Musical Journey Into Epic Adventures
            </AnimatedText>
          </div>

          {/* Active Quests Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Compass className="text-yellow-400" />
              Active Quests
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {questData.activeQuests.map((quest) => (
                <FloatingCard key={quest.id} className="p-6 border-yellow-400/30">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl" role="img" aria-label="Epic quest">
                        {quest.difficulty === 'Epic' && '⚔️'}
                        {quest.difficulty === 'Legendary' && '👑'}
                        {quest.difficulty === 'Master' && '🏆'}
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-lg">{quest.title}</h3>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          quest.difficulty === 'Epic' ? 'bg-purple-500/20 text-purple-300' :
                          quest.difficulty === 'Legendary' ? 'bg-yellow-500/20 text-yellow-300' :
                          'bg-red-500/20 text-red-300'
                        }`}>
                          {quest.difficulty}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4">{quest.description}</p>
                  
                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                      <span>Progress</span>
                      <span>{quest.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${quest.progress}%` }}
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-sm">
                      <div className="text-gray-400">Reward</div>
                      <div className="text-yellow-400 font-bold">{quest.xpReward} XP</div>
                    </div>
                    <div className="text-sm text-right">
                      <div className="text-gray-400">Time Left</div>
                      <div className="text-white font-bold">{quest.timeLeft}</div>
                    </div>
                  </div>
                  
                  <HolographicButton 
                    variant="warning" 
                    className="w-full mt-4"
                    onClick={() => addNotification(`Continuing quest: ${quest.title}`, 'success')}
                  >
                    Continue Quest
                  </HolographicButton>
                </FloatingCard>
              ))}
            </div>
          </div>

          {/* Daily Challenges */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Target className="text-emerald-400" />
              Daily Challenges
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {questData.dailyChallenges.map((challenge, idx) => (
                <FloatingCard key={idx} className="p-6 border-emerald-400/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-2xl" role="img" aria-label={`${challenge.instrument} instrument`}>
                      {instruments[challenge.instrument]?.icon || '🎵'}
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{challenge.title}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        challenge.difficulty === 'Easy' ? 'bg-green-500/20 text-green-300' :
                        challenge.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-300' :
                        'bg-red-500/20 text-red-300'
                      }`}>
                        {challenge.difficulty}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-emerald-400 font-bold text-lg">{challenge.xp} XP</div>
                    <div className="text-sm text-gray-400">{challenge.timeLeft}</div>
                  </div>
                  
                  <HolographicButton 
                    variant="success" 
                    className="w-full"
                    onClick={() => addNotification(`Starting challenge: ${challenge.title}`, 'success')}
                  >
                    Start Challenge
                  </HolographicButton>
                </FloatingCard>
              ))}
            </div>
          </div>

          {/* Quest Map */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Map className="text-purple-400" />
              Nairobi Music Circuit
            </h2>
            
            <FloatingCard className="p-8 border-purple-400/30">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { name: 'Serena Hotel', status: 'completed', icon: '🏨', color: 'green' },
                  { name: 'Alliance Française', status: 'current', icon: '🎭', color: 'yellow' },
                  { name: 'Kenya National Theatre', status: 'locked', icon: '🎪', color: 'gray' },
                  { name: 'Villa Rosa Kempinski', status: 'locked', icon: '🏛️', color: 'gray' }
                ].map((venue, idx) => (
                  <div key={idx} className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center text-2xl ${
                      venue.status === 'completed' ? 'bg-green-500/20 border-2 border-green-400' :
                      venue.status === 'current' ? 'bg-yellow-500/20 border-2 border-yellow-400 animate-pulse' :
                      'bg-gray-500/20 border-2 border-gray-600'
                    }`}>
                      {venue.status === 'locked' ? <Lock className="text-gray-400" /> : venue.icon}
                    </div>
                    <h3 className={`font-bold ${
                      venue.status === 'completed' ? 'text-green-400' :
                      venue.status === 'current' ? 'text-yellow-400' :
                      'text-gray-400'
                    }`}>
                      {venue.name}
                    </h3>
                    <p className="text-xs text-gray-400 capitalize">{venue.status}</p>
                  </div>
                ))}
              </div>
            </FloatingCard>
          </div>
        </div>
      </div>
    );
  };

  // Home Page Component  
  const HomePage = () => {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 p-8">
        <ParticleField density="low" />
        
        <div className="max-w-7xl mx-auto">
          {/* Welcome Header */}
          <div className="text-center mb-12">
            <AnimatedText variant="hero" glowColor="cyan" className="mb-4">
              Welcome Back, {playerData.name}
            </AnimatedText>
            <AnimatedText variant="subtitle" glowColor="purple" className="opacity-80">
              Your AI agent has been working while you were away
            </AnimatedText>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <FloatingCard className="p-6 text-center border-cyan-400/30">
              <div className="text-3xl mb-2" role="img" aria-label="Guitar">🎸</div>
              <div className="text-2xl font-bold text-cyan-400">Level {playerData.level}</div>
              <div className="text-gray-400">Current Level</div>
            </FloatingCard>
            
            <FloatingCard className="p-6 text-center border-purple-400/30">
              <div className="text-3xl mb-2" role="img" aria-label="Lightning">⚡</div>
              <div className="text-2xl font-bold text-purple-400">{playerData.xp}</div>
              <div className="text-gray-400">Total XP</div>
            </FloatingCard>
            
            <FloatingCard className="p-6 text-center border-emerald-400/30">
              <div className="text-3xl mb-2" role="img" aria-label="Fire">🔥</div>
              <div className="text-2xl font-bold text-emerald-400">{playerData.currentStreak}</div>
              <div className="text-gray-400">Day Streak</div>
            </FloatingCard>
            
            <FloatingCard className="p-6 text-center border-yellow-400/30">
              <div className="text-3xl mb-2" role="img" aria-label="Money">💰</div>
              <div className="text-2xl font-bold text-yellow-400">KSH {playerData.totalEarnings.toLocaleString()}</div>
              <div className="text-gray-400">Total Earnings</div>
            </FloatingCard>
          </div>

          {/* Recent Activity */}
          <div className="grid md:grid-cols-2 gap-8">
            <FloatingCard className="p-6 border-indigo-400/30">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Bot className="text-indigo-400" />
                AI Agent Activity
              </h3>
              <div className="space-y-3">
                {agentData.recentActions.slice(0, 3).map((action) => (
                  <div key={action.id} className="flex items-center gap-3 p-3 bg-indigo-500/10 rounded-lg">
                    <div className={`w-2 h-2 rounded-full ${
                      action.status === 'completed' ? 'bg-green-400' :
                      action.status === 'pending' ? 'bg-yellow-400' :
                      'bg-blue-400'
                    }`} />
                    <div className="flex-1">
                      <div className="text-sm text-white">{action.action}</div>
                      <div className="text-xs text-gray-400">{action.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </FloatingCard>

            <FloatingCard className="p-6 border-emerald-400/30">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Target className="text-emerald-400" />
                Active Goals
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white">Weekly Practice Goal</span>
                    <span className="text-emerald-400">{playerData.weeklyGoal.current}/{playerData.weeklyGoal.target} hours</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-emerald-400 h-2 rounded-full"
                      style={{ width: `${(playerData.weeklyGoal.current / playerData.weeklyGoal.target) * 100}%` }}
                    />
                  </div>
                </div>
                
                <div className="text-sm text-gray-300">
                  {questData.activeQuests.length} active quests • {careerData.activeGigs.length} paying gigs
                </div>
              </div>
            </FloatingCard>
          </div>
        </div>
      </div>
    );
  };

  // Jukwaa (Career Marketplace) Component
  const Jukwaa = () => {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900/20 to-slate-900 p-8">
        <ParticleField density="medium" />
        
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <AnimatedText variant="hero" glowColor="yellow" className="mb-4">
              JUKWAA
            </AnimatedText>
            <AnimatedText variant="subtitle" glowColor="cyan" className="opacity-80">
              Career Marketplace - Where Skills Meet Opportunities
            </AnimatedText>
          </div>

          {/* Active Gigs */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Briefcase className="text-green-400" />
              Active Gigs
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {careerData.activeGigs.map((gig) => (
                <FloatingCard key={gig.id} className="p-6 border-green-400/30">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-white text-lg">{gig.title}</h3>
                      <p className="text-gray-300 text-sm">{gig.client}</p>
                      <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-300">
                        {gig.type}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-400">KSH {gig.earnings.toLocaleString()}</div>
                      <div className="text-xs text-gray-400">per month</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                      <span>Contract Progress</span>
                      <span>{gig.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-green-400 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${gig.progress}%` }}
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm">
                    <div>
                      <div className="text-gray-400">Next Performance</div>
                      <div className="text-white font-bold">{gig.nextDate}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-gray-400">Venue</div>
                      <div className="text-white font-bold">{gig.venue}</div>
                    </div>
                  </div>
                </FloatingCard>
              ))}
            </div>
          </div>

          {/* New Opportunities */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Sparkles className="text-yellow-400" />
              New Opportunities
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-6">
              {careerData.opportunities.map((opp) => (
                <FloatingCard key={opp.id} className="p-6 border-yellow-400/30">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-white text-lg">{opp.title}</h3>
                      <p className="text-gray-300 text-sm">{opp.client}</p>
                      <div className="flex gap-2 mt-2">
                        <span className="text-xs px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-300">
                          {opp.type}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          opp.prestige === 'Elite' ? 'bg-purple-500/20 text-purple-300' : 'bg-blue-500/20 text-blue-300'
                        }`}>
                          {opp.prestige}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-yellow-400">KSH {opp.earnings.toLocaleString()}</div>
                      <div className="text-xs text-gray-400">potential earnings</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm text-gray-300 mb-2">{opp.schedule || opp.audience}</div>
                    <div className="text-xs text-gray-400 flex items-center gap-2">
                      <MapPin size={12} />
                      {opp.location}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-sm">
                      <div className="text-gray-400">Deadline</div>
                      <div className="text-white font-bold">{opp.deadline}</div>
                    </div>
                    <div className="text-sm text-right">
                      <div className="text-gray-400">Competition</div>
                      <div className={`font-bold ${
                        opp.competition === 'Low' ? 'text-green-400' :
                        opp.competition === 'Medium' ? 'text-yellow-400' :
                        'text-red-400'
                      }`}>
                        {opp.competition}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <HolographicButton 
                      variant="warning" 
                      className="flex-1"
                      onClick={() => addNotification(`ARIA is applying to ${opp.title}`, 'success')}
                    >
                      <Bot size={16} className="mr-2" />
                      Auto Apply
                    </HolographicButton>
                    <HolographicButton 
                      variant="secondary" 
                      className="flex-1"
                      onClick={() => addNotification(`Reviewing ${opp.title}`, 'info')}
                    >
                      Review Details
                    </HolographicButton>
                  </div>
                </FloatingCard>
              ))}
            </div>
          </div>

          {/* Market Intelligence */}
          <div className="grid md:grid-cols-2 gap-8">
            <FloatingCard className="p-6 border-purple-400/30">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <BarChart3 className="text-purple-400" />
                Market Trends
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-purple-500/10 rounded-lg">
                  <div>
                    <div className="text-white font-bold">Jazz Piano</div>
                    <div className="text-xs text-gray-400">High Demand</div>
                  </div>
                  <div className="text-right">
                    <div className="text-purple-400 font-bold">KSH 60k-120k</div>
                    <div className="text-xs text-gray-400">avg. monthly</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-green-500/10 rounded-lg">
                  <div>
                    <div className="text-white font-bold">Wedding Guitar</div>
                    <div className="text-xs text-gray-400">Growing</div>
                  </div>
                  <div className="text-right">
                    <div className="text-green-400 font-bold">KSH 15k-25k</div>
                    <div className="text-xs text-gray-400">per event</div>
                  </div>
                </div>

                <div className="flex justify-between items-center p-3 bg-yellow-500/10 rounded-lg">
                  <div>
                    <div className="text-white font-bold">Traditional Drums</div>
                    <div className="text-xs text-gray-400">Emerging</div>
                  </div>
                  <div className="text-right">
                    <div className="text-yellow-400 font-bold">KSH 40k-80k</div>
                    <div className="text-xs text-gray-400">cultural events</div>
                  </div>
                </div>
              </div>
            </FloatingCard>

            <FloatingCard className="p-6 border-cyan-400/30">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Trophy className="text-cyan-400" />
                Skill Verification
              </h3>
              <div className="space-y-4">
                {Object.entries(playerData.skills).slice(0, 5).map(([skill, level]) => (
                  <div key={skill} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${
                        level >= 80 ? 'bg-green-400' :
                        level >= 60 ? 'bg-yellow-400' :
                        'bg-gray-400'
                      }`} />
                      <span className="text-white capitalize">{skill}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-cyan-400 font-bold">{level}%</div>
                      {level >= 80 && <CheckCircle size={16} className="text-green-400" />}
                    </div>
                  </div>
                ))}
                
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="text-sm text-gray-400 mb-2">Verification Status</div>
                  <div className="text-green-400 font-bold">5 Skills Verified ✓</div>
                  <div className="text-xs text-gray-400">Ready for professional opportunities</div>
                </div>
              </div>
            </FloatingCard>
          </div>
        </div>
      </div>
    );
  };

  // Pulse System Component
  const PulseSystem = () => {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900/20 to-slate-900 p-8">
        <ParticleField density="medium" />
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <AnimatedText variant="hero" glowColor="emerald" className="mb-4">
              PULSE SYSTEM
            </AnimatedText>
            <AnimatedText variant="subtitle" glowColor="cyan" className="opacity-80">
              Track Your Musical Journey Like Never Before
            </AnimatedText>
          </div>

          {/* Practice Session */}
          <div className="mb-12">
            <FloatingCard className="p-8 border-emerald-400/30">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Current Practice Session</h2>
                <HolographicButton
                  variant={practiceActive ? "warning" : "success"}
                  onClick={() => setPracticeActive(!practiceActive)}
                >
                  {practiceActive ? <Pause size={20} /> : <Play size={20} />}
                  {practiceActive ? 'Pause' : 'Start Practice'}
                </HolographicButton>
              </div>
              
              {practiceActive && (
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-emerald-400 mb-2">
                      {Math.floor(practiceSession.duration / 60)}:{(practiceSession.duration % 60).toString().padStart(2, '0')}
                    </div>
                    <div className="text-gray-400">Time Practiced</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-400 mb-2">
                      {practiceSession.sessionXP}
                    </div>
                    <div className="text-gray-400">XP Earned</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl mb-2">🎸</div>
                    <div className="text-white font-bold">{practiceSession.exercise}</div>
                    <div className="text-gray-400">{practiceSession.difficulty}</div>
                  </div>
                </div>
              )}
            </FloatingCard>
          </div>

          {/* Skills Overview */}
          <div className="grid md:grid-cols-2 gap-8">
            <FloatingCard className="p-6 border-cyan-400/30">
              <h3 className="text-xl font-bold text-white mb-6">Skill Progress</h3>
              <div className="space-y-4">
                {Object.entries(playerData.skills).slice(0, 5).map(([skill, level]) => (
                  <div key={skill}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-white capitalize">{skill}</span>
                      <span className="text-cyan-400">{level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-cyan-400 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </FloatingCard>

            <FloatingCard className="p-6 border-yellow-400/30">
              <h3 className="text-xl font-bold text-white mb-6">Instruments Mastered</h3>
              <div className="grid grid-cols-3 gap-4">
                {playerData.instruments.map((instrumentId) => (
                  <div key={instrumentId} className="text-center p-3 bg-yellow-500/10 rounded-lg">
                    <div className="text-2xl mb-2">{instruments[instrumentId]?.icon}</div>
                    <div className="text-xs text-yellow-400">{instruments[instrumentId]?.name}</div>
                  </div>
                ))}
              </div>
            </FloatingCard>
          </div>
        </div>
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
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-white overflow-hidden relative">
        <ParticleField density="high" />
        
        {/* Hero Section */}
        <div className="relative z-10 container mx-auto px-8 py-20">
          <div className="text-center mb-20">
            <div className="mb-8">
              <AnimatedText variant="hero" glowColor="cyan" className="mb-6">
                DOBA
              </AnimatedText>
              <AnimatedText variant="subtitle" glowColor="purple" className="mb-8">
                AI-Powered Music Career Platform
              </AnimatedText>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Turn your practice into professional opportunities with Kenya's first AI music agent. 
                ARIA works 24/7 to find gigs, build your network, and advance your music career.
              </p>
            </div>

            {/* Rotating Instrument Display */}
            <div className="mb-12">
              <div className="text-8xl mb-4 transition-all duration-1000 transform">
                {featuredInstruments[currentInstrumentIndex].icon}
              </div>
              <AnimatedText variant="title" glowColor="yellow" className="mb-4">
                Master {featuredInstruments[currentInstrumentIndex].name}
              </AnimatedText>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <HolographicButton
                variant="primary"
                size="xl"
                onClick={() => setShowSignup(true)}
                className="transform hover:scale-110"
              >
                <Rocket className="mr-3" size={24} />
                Start Your Journey
              </HolographicButton>
              
              <HolographicButton
                variant="secondary"
                size="xl"
                onClick={() => addNotification('Demo coming soon!', 'info')}
              >
                <Play className="mr-3" size={24} />
                Watch Demo
              </HolographicButton>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <FloatingCard className="p-8 text-center border-emerald-400/30">
              <Activity className="mx-auto mb-4 text-emerald-400" size={48} />
              <h3 className="text-2xl font-bold mb-4 text-emerald-400">PULSE System</h3>
              <p className="text-gray-300">Track your practice like a fitness app. Build verified skills that employers trust.</p>
            </FloatingCard>
            
            <FloatingCard className="p-8 text-center border-yellow-400/30">
              <Compass className="mx-auto mb-4 text-yellow-400" size={48} />
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">Safari XP</h3>
              <p className="text-gray-300">Turn learning into epic adventures. Complete quests that prepare you for real gigs.</p>
            </FloatingCard>
            
            <FloatingCard className="p-8 text-center border-purple-400/30">
              <Bot className="mx-auto mb-4 text-purple-400" size={48} />
              <h3 className="text-2xl font-bold mb-4 text-purple-400">ARIA AI Agent</h3>
              <p className="text-gray-300">Your 24/7 career manager. Finds opportunities, applies to gigs, and builds your network.</p>
            </FloatingCard>
          </div>

          {/* Kenyan Music Scene */}
          <div className="text-center mb-20">
            <AnimatedText variant="title" glowColor="cyan" className="mb-8">
              Built for Kenya's Music Scene
            </AnimatedText>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Serena Hotel', icon: '🏨' },
                { name: 'Alliance Française', icon: '🎭' },
                { name: 'Kenya National Theatre', icon: '🎪' },
                { name: 'Villa Rosa Kempinski', icon: '🏛️' }
              ].map((venue, idx) => (
                              <FloatingCard key={idx} className="p-6 text-center">
                                <div className="text-4xl mb-3">{venue.icon}</div>
                                <h4 className="font-bold text-white mb-2">{venue.name}</h4>
                              </FloatingCard>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                };