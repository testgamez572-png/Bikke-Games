import React, { useState, useEffect } from 'react';
import { ImageWithFallback } from './components/UI/figma/ImageWithFallback';
import { Button } from './components/UI/button';  //done-1
import { Card } from './components/UI/card'; //done-1
import { Badge } from './components/UI/badge'; //done-1
import { Menu, X, Download, Mail, Phone, MapPin, ChevronDown, ChevronRight, Star, Users, Trophy, Gamepad2, TowerControl } from 'lucide-react'; //done
import exampleImage from './assets/bikke.png';
import logo from "./assets/logo.png";
import clashroyal from "./assets/clash-royale.jpg";
import geometry from "./assets/geometry-dash-the-tower5.jpg";
import mecharena from "./assets/Mech-Arena_1920x1080.jpg";
import slotgameimg from "./assets/Slot-Gameplay-2.png";
import syPlace from "./assets/sy.jpg";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';



export default function App() {



  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const navigationItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'games', label: 'Games', icon: '🎮' },
    { id: 'about', label: 'About Us', icon: '👥' },
    { id: 'support', label: 'Support', icon: '🎧' },

  ];

  const footerlink = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'games', label: 'Games', icon: '🎮' },
    { id: 'about', label: 'About Us', icon: '👥' },
    { id: 'support', label: 'Support', icon: '🎧' },
    { id: 'download', label: 'Download', icon: '📱' },

    { id: 'faq', label: 'FAQ', icon: '❓' },
    { id: 'legal', label: 'Legal', icon: '📄' },
    { id: 'news', label: 'News', icon: '📰' }

  ]

  const ImageWithFallback = ({ src, alt, className }) => (
    <img src={src} alt={alt} className={className} />
  );


  const images = [geometry, mecharena, slotgameimg, clashroyal];

  const [current, setCurrent] = useState(0);

  // Auto-play logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "How do I download your games?",
      answer: "You can download our games from the Download section above, or visit your device's app store and search for our company name."
    },
    {
      question: "Are your games free to play?",
      answer: "Most of our games are free to download and play, with optional in-app purchases for enhanced gaming experiences."
    },
    {
      question: "What platforms do you support?",
      answer: "We develop games for iOS, Android, and web platforms to ensure maximum accessibility for all players."
    },
    {
      question: "How can I report a bug or issue?",
      answer: "Please use our Contact/Support section to report any bugs or issues. Our team responds within 24 hours."
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes, we provide comprehensive customer support through email, live chat, and our support portal."
    }
  ];

  const gameFeatures = [
    { icon: '🎨', title: 'Rich Graphics', description: 'Stunning visuals and immersive art design' },
    { icon: '🎵', title: 'Dynamic Audio', description: 'Engaging soundtracks and sound effects' },
    { icon: '🏆', title: 'Achievements', description: 'Unlock rewards and compete with friends' },
    { icon: '📱', title: 'Cross-Platform', description: 'Play seamlessly across all devices' }
  ];


  const newsUpdates = [
    {
      date: 'September 25, 2025',
      title: 'New Game Release: Culinary Quest',
      summary: 'Experience the ultimate cooking adventure with our latest game featuring innovative gameplay mechanics.'
    },
    {
      date: 'September 20, 2025',
      title: 'Summer Tournament Results',
      summary: 'Congratulations to all participants in our summer gaming tournament. Check out the winners and highlights.'
    },
    {
      date: 'September 15, 2025',
      title: 'Platform Update v2.1',
      summary: 'Enhanced performance, new features, and improved user experience across all our games.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-100 to-blue-200">
      {/* Navigation Header */}
      <header className="fixed top-0 w-full z-50 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-700 shadow-2xl border-b-4 border-cyan-300">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg border-2 border-cyan-300 bg-white/10 backdrop-blur-sm">
                <ImageWithFallback
                  src={logo}
                  alt="Bikke Games Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-xl font-black text-white tracking-wide" style={{
                textShadow: '2px 2px 0px #e879f9, -2px -2px 0px #e879f9, 2px -2px 0px #e879f9, -2px 2px 0px #e879f9, 2px 0px 0px #e879f9, -2px 0px 0px #e879f9, 0px 2px 0px #e879f9, 0px -2px 0px #e879f9'
              }}>Bikke Games</div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 text-sm font-medium ${activeSection === item.id
                    ? 'bg-cyan-300 text-purple-700 shadow-lg scale-105'
                    : 'text-white hover:bg-cyan-400 hover:text-purple-700 hover:scale-105'
                    }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-cyan-300 text-purple-700 hover:bg-cyan-200 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-cyan-300">
              <div className="flex flex-col space-y-2">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-3 rounded-lg transition-all duration-300 flex items-center space-x-3 text-left ${activeSection === item.id
                      ? 'bg-cyan-300 text-purple-700'
                      : 'text-white hover:bg-cyan-400 hover:text-purple-700'
                      }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {/* Home Section */}
        <section id="home" className="min-h-screen relative ">
          {/* Background with bright gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-400 to-purple-500">
            <div className="absolute inset-0 opacity-30 bg-gradient-to-tr from-cyan-300 to-blue-300" />
          </div>

          <div className="relative z-10 container mx-auto px-4 py-20 ">
            <div className="grid md:grid-cols-2 gap-12 items-center min-h-[80vh]">
              <div className="space-y-8 ">
                <div className="space-y-4 ">

                  <h1 className=" text-5xl md:text-7xl font-black text-white leading-tight " style={{
                    textShadow: '3px 3px 0px #e879f9, -3px -3px 0px #e879f9, 3px -3px 0px #e879f9, -3px 3px 0px #e879f9, 3px 0px 0px #e879f9, -3px 0px 0px #e879f9, 0px 3px 0px #e879f9, 0px -3px 0px #e879f9'
                  }}>
                    Welcome to
                    <span className="block ">Bikke Games</span>
                  </h1>
                  <p className="text-xl text-white leading-relaxed max-w-lg">
                    Immerse yourself in beautifully crafted games that blend stunning visuals,
                    engaging gameplay, and unforgettable experiences. Welcome to Bikke Games.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() => scrollToSection('download')}
                    className="bg-cyan-300 hover:bg-cyan-200 text-purple-700 px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:scale-105 transition-all duration-300"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Play Now
                  </Button>

                  <Button
                    onClick={() => scrollToSection('games')}
                    variant="outline"
                    className="border-2 border-cyan-300 text-white hover:bg-cyan-300 hover:text-purple-700 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
                  >
                    <Gamepad2 className="w-5 h-5 mr-2" />
                    Explore Games
                  </Button>
                </div>

                <div className="grid grid-cols-3  pt-8">
                  <div className="">
                    <div className="text-3xl font-black text-cyan-200">1M+</div>
                    <div className="text-white text-sm">Active Players</div>
                  </div>
                  <div className="">
                    <div className="text-3xl font-black text-cyan-200">50+</div>
                    <div className="text-white text-sm">Game Titles</div>
                  </div>
                  <div className="">
                    <div className="text-3xl font-black text-cyan-200">4.8★</div>
                    <div className="text-white text-sm">User Rating</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-6 px-4 sm:px-6">
                {/* Carousel Container */}
                <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg overflow-hidden rounded-2xl">
                  {/* Sliding Wrapper */}
                  <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${current * 100}%)` }}
                  >
                    {images.map((img, index) => (
                      <div key={index} className="flex-shrink-0 w-full relative">
                        {/* Blurred Background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl blur-2xl opacity-50"></div>

                        {/* Image */}
                        <ImageWithFallback
                          src={img}
                          alt={`Slide ${index + 1}`}
                          className="relative z-10 w-full aspect-[4/3] object-fill rounded-2xl shadow-2xl border-4 border-cyan-300"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Navigation Buttons */}
                  <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-3 transform -translate-y-1/2  hover:bg-purple-700 text-white rounded-full p-3 shadow-lg transition-all duration-300"
                  >
                    <FaChevronLeft size={25} />
                  </button>

                  <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-3 transform -translate-y-1/2  hover:bg-purple-700 text-white rounded-full p-3 shadow-lg transition-all duration-300"
                  >
                    <FaChevronRight size={25} />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Games Section */}
        <section id="games" className="py-20 bg-gradient-to-b from-cyan-100 to-blue-200">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="bg-purple-500 text-white px-4 py-2 mb-4 tracking-wider">
                🎮 Our Games
              </Badge>
              <h2 className="text-4xl md:text-5xl font-black text-purple-700 mb-6">
                Discover Amazing Games
              </h2>
              <p className="text-xl text-purple-600 max-w-3xl mx-auto">
                From casual puzzles to intense adventures, our diverse portfolio offers something for every gamer.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {gameFeatures.map((feature, index) => (
                <Card key={index} className="p-6 bg-white/90 backdrop-blur-sm border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="text-center">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-black text-purple-700 mb-3">{feature.title}</h3>
                    <p className="text-purple-600">{feature.description}</p>
                  </div>
                </Card>
              ))}
            </div>


            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center shadow-2xl">
              <h3 className="text-3xl font-black text-white mb-4" style={{
                textShadow: '2px 2px 0px #22d3ee, -2px -2px 0px #22d3ee, 2px -2px 0px #22d3ee, -2px 2px 0px #22d3ee'
              }}>Featured Game: Adventure Quest</h3>
              <p className="text-cyan-100 text-lg mb-6 max-w-2xl mx-auto">
                Embark on an epic adventure in this exciting quest that combines strategy, creativity, and thrilling challenges!
              </p>
              <Button
                onClick={() => scrollToSection('download')}
                className="bg-cyan-300 hover:bg-cyan-200 text-purple-700 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
              >
                Play Adventure Quest
              </Button>
            </div>
          </div>
        </section>

        {/* About Us Section */}

        <section id="about" class="py-20">
          <div class="container mx-auto px-4">


            <div class="text-center mb-16">
              {/* <div class="inline-block bg-pink-500 text-white px-4 py-2 rounded-full mb-4">
                👥  About Us
              </div> */}
              <Badge className="bg-pink-500 text-white px-4 py-2 mb-4 tracking-wider">
                👥  About Us
              </Badge>
              <h2 class="text-4xl md:text-5xl font-black text-purple-700 mb-6">
                Welcome to Bikkie Gmaes
              </h2>
            </div>


            <div class="grid md:grid-cols-3 gap-8">

              <div class="p-8 bg-white/90 backdrop-blur-sm border-2 border-purple-200 text-center rounded-lg hover:border-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div class="text-cyan-400 text-4xl mb-4">🏆</div>
                <h3 class="text-2xl font-black text-purple-700 mb-2">Our Mission</h3>
                <p class="text-purple-600">
                  Creating innovative games that inspire creativity and bring people together through shared adventures.
                </p>
              </div>


              <div class="p-8 bg-white/90 backdrop-blur-sm border-2 border-purple-200 text-center rounded-lg hover:border-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div class="text-cyan-400 text-4xl mb-4">⭐</div>
                <h3 class="text-2xl font-black text-purple-700 mb-2">Our Vision</h3>
                <p class="text-purple-600">
                  To be the leading studio in crafting immersive gaming experiences that resonate with players globally.
                </p>
              </div>


              <div class="p-8 bg-white/90 backdrop-blur-sm border-2 border-purple-200 text-center rounded-lg hover:border-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div class="text-cyan-400 text-4xl mb-4">🎮</div>
                <h3 class="text-2xl font-black text-purple-700 mb-2">Our Values</h3>
                <p class="text-purple-600">
                  Innovation, quality, community, and putting player experience at the heart of everything we do.
                </p>
              </div>
            </div>


            {/* <div class="mt-20 bg-gradient-to-r from-blue-100 to-purple-100 p-8 rounded-xl flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-12">


              <div class="flex flex-col md:flex-row items-center justify-center gap-8">


                <div class="max-w-md text-left">
                  <h2 class="text-3xl font-extrabold text-purple-800 drop-shadow-md mb-4 ">Bikkie Studio</h2>
                  <p class="text-pink-600 text-md leading-relaxed text-left">
                    Based in Sydney, Australia, we specialize in creating custom mobile games tailored to your vision.
                    From concept to launch, our team crafts engaging, high-quality games designed to captivate players
                    and bring your ideas to life.
                  </p>
                </div>

                <div class="flex-shrink-0 rounded-lg overflow-hidden border-4 border-white shadow-lg">
                  <img src={exampleImage}
                    alt="Sydney Opera House illustration"
                    class="w-80 h-auto object-cover" />
                </div>

              </div>

            </div> */}

            <div class="mt-20 p-8 rounded-xl flex flex-col md:flex-row items-start justify-between space-y-10 md:space-y-0 md:space-x-12">

              <div class="max-w-md text-left">
                <h2 class="text-3xl font-extrabold text-purple-800 drop-shadow-md mb-4">Bikkie Studio</h2>
                <p class="text-pink-600 text-md leading-relaxed text-left">
                  Based in Sydney, Australia, we specialize in creating custom mobile games tailored to your vision.
                  From concept to launch, our team crafts engaging, high-quality games designed to captivate players
                  and bring your ideas to life.
                </p>
              </div>

              <div class="flex-shrink-0 rounded-lg overflow-hidden border-4 border-white shadow-lg">
                <img src={syPlace}
                  alt="Sydney Opera House illustration"
                  class="w-80 h-auto object-cover" />
              </div>

            </div>

          </div>
        </section>

        {/* Download Section */}
        <section className="py-20 bg-blue-100">
          <div className="container mx-auto px-6">
            {/* Title Section */}
            <div className="text-center mb-16">
              {/* <button className="bg-purple-600 text-white px-6 py-2 rounded-full mb-4">
                🎮 Our Games
              </button> */}
              <Badge className="bg-purple-600 text-white px-4 py-2 mb-4 tracking-wider">
                🎮 Our Games
              </Badge>
              <h2 className="text-4xl md:text-5xl font-extrabold text-purple-700 mb-6">
                Tailored Game Design
              </h2>
              <p className="text-lg md:text-xl text-purple-600 max-w-3xl mx-auto">
                From concept to creation, we build unique games tailored to your needs.
                Whether it’s strategy, adventure, or action, we turn your ideas into playable realities.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16 ">
              <div className="p-6 bg-white/90 rounded-xl shadow-md text-center hover:border-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-xl" >
                <div className="text-4xl mb-3">🎨</div>
                <h3 className="font-bold text-purple-700 mb-2 ">Rich Graphics</h3>
                <p className="text-sm text-purple-600">Stunning visuals and immersive art design</p>
              </div>

              <div className="p-6 bg-white/90 rounded-xl shadow-md text-center hover:border-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="text-4xl mb-3">🎵</div>
                <h3 className="font-bold text-purple-700 mb-2">Dynamic Audio</h3>
                <p className="text-sm text-purple-600">Engaging soundtracks and sound effects</p>
              </div>

              <div className="p-6 bg-white/90 rounded-xl shadow-md text-center hover:border-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="text-4xl mb-3">🏆</div>
                <h3 className="font-bold text-purple-700 mb-2">Achievements</h3>
                <p className="text-sm text-purple-600">Unlock rewards and compete with friends</p>
              </div>

              <div className="p-6 bg-white/90 rounded-xl shadow-md text-center hover:border-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="text-4xl mb-3">💻</div>
                <h3 className="font-bold text-purple-700 mb-2">Cross-Platform</h3>
                <p className="text-sm text-purple-600">Play seamlessly across all devices</p>
              </div>

            </div>

            {/* Game Blocks */}

            {/* Game Blocks */}
            <div className="space-y-16">

              {/* === Game 1 === Left IMG, Right TEXT === */}
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
                <img
                  src={slotgameimg}
                  alt="Fortune Street Bites"
                  className="w-full max-w-sm md:max-w-md lg:max-w-xl  h-64 md:h-72 lg:h-80 object-fill rounded-2xl shadow-lg mx-auto"
                />
                <div className="flex flex-col items-center md:items-start text-center md:text-left px-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-purple-700 mb-3">
                    Fortune Street Bites
                  </h3>
                  <p className="text-purple-600 mb-4">
                    A fun slot game featuring popular Philippines street foods, with exciting bonus rounds and dynamic win lines.
                  </p>
                  <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition">
                    Download
                  </button>
                </div>
              </div>

              {/* === Game 2 === Left TEXT, Right IMG === */}
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
                <div className="flex flex-col items-center md:items-start text-center md:text-left px-6 order-2 md:order-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-purple-700 mb-3">
                    Clash Royale
                  </h3>
                  <p className="text-purple-600 mb-4">
                    Real-time strategy experiences where players battle head-to-head, collect units, and climb competitive ranks.
                  </p>
                  <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition">
                    Download
                  </button>
                </div>
                <img
                  src={clashroyal}
                  alt="Clash Royale"
                  className="w-full max-w-sm md:max-w-md lg:max-w-xl h-64 md:h-72 lg:h-80 object-fill rounded-2xl shadow-lg mx-auto order-1 md:order-2"
                />
              </div>

              {/* === Game 3 === Left IMG, Right TEXT === */}
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
                <img
                  src={geometry}
                  alt="Tower Dash"
                  className="w-full max-w-sm md:max-w-md lg:max-w-xl h-64 md:h-72 lg:h-80 object-fill rounded-2xl shadow-lg mx-auto"
                />
                <div className="flex flex-col items-center md:items-start text-center md:text-left px-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-purple-700 mb-3">
                    Tower Dash
                  </h3>
                  <p className="text-purple-600 mb-4">
                    Fast-paced mobile game where players climb towers, avoid obstacles, and compete for high scores.
                  </p>
                  <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition">
                    Download
                  </button>
                </div>
              </div>

              {/* === Game 4 === Left TEXT, Right IMG === */}
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
                <div className="flex flex-col items-center md:items-start text-center md:text-left px-6 order-2 md:order-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-purple-700 mb-3">
                    Mecha Arena
                  </h3>
                  <p className="text-purple-600 mb-4">
                    PvP arena battles with customizable mecha units. Compete in real-time matches, upgrade your mechs, and climb leaderboards.
                  </p>
                  <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition">
                    Download
                  </button>
                </div>
                <img
                  src={mecharena}
                  alt="Mecha Arena"
                  className="w-full max-w-sm md:max-w-md lg:max-w-xl h-64 md:h-72 lg:h-80 object-fill rounded-2xl shadow-lg mx-auto order-1 md:order-2"
                />
              </div>

            </div>







          </div>
        </section>


        {/* Support Section */}
        <section id="support" className="py-20 bg-gradient-to-b from-pink-200 to-cyan-200">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="bg-blue-500 text-white px-4 py-2 mb-4">
                🎧 Support
              </Badge>
              <h2 className="text-4xl md:text-5xl font-black text-amber-900 mb-6">
                Contact & Support
              </h2>
              <p className="text-xl text-amber-700 max-w-3xl mx-auto">
                Need help? Our dedicated support team is here to assist you with any questions or issues.
              </p>
            </div>


            <div className="flex justify-center items-center">
              <Card className="p-8 bg-white/90 backdrop-blur-sm border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-xl text-center">
                <Mail className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-2xl font-black text-amber-900 mb-4">Email Support</h3>
                <p className="text-amber-700 mb-4">Get help via email with detailed responses</p>
                <p className="text-blue-600 font-semibold">support@gamecraftstudios.com</p>
                <p className="text-amber-600 text-sm mt-2">Response within 24 hours</p>
              </Card>
            </div>







          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-gradient-to-b from-blue-200 to-indigo-200">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="bg-indigo-500 text-white px-4 py-2 mb-4">
                ❓ FAQ
              </Badge>
              <h2 className="text-4xl md:text-5xl font-black text-amber-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-amber-700 max-w-3xl mx-auto">
                Find quick answers to common questions about our games and services.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              {faqData.map((faq, index) => (
                <Card key={index} className="mb-4 bg-white/90 backdrop-blur-sm border-2 border-indigo-200 overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-indigo-50 transition-colors"
                  >
                    <h3 className="text-lg font-black text-amber-900">{faq.question}</h3>
                    {expandedFaq === index ? (
                      <ChevronDown className="w-5 h-5 text-indigo-500" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-indigo-500" />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-amber-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-amber-700 mb-4">Can't find what you're looking for?</p>
              <Button
                onClick={() => scrollToSection('support')}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3"
              >
                Contact Support
              </Button>
            </div>
          </div>
        </section>

        {/* Legal Section */}
        <section id="legal" className="py-20 bg-gradient-to-b from-indigo-200 to-gray-200">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="bg-gray-600 text-white px-4 py-2 mb-4">
                📄 Legal
              </Badge>
              <h2 className="text-4xl md:text-5xl font-black text-amber-900 mb-6">
                Terms & Privacy
              </h2>
              <p className="text-xl text-amber-700 max-w-3xl mx-auto">
                Important information about our terms of service and privacy policies.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="p-8 bg-white/90 backdrop-blur-sm border-2 border-gray-200 hover:border-gray-400 transition-all duration-300">
                <h3 className="text-2xl font-black text-amber-900 mb-6">Terms & Conditions</h3>
                <div className="space-y-4 text-amber-700">
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-2">User Agreement</h4>
                    <p className="text-sm">By using our games and services, you agree to comply with our terms of service and acceptable use policies.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-2">Account Responsibility</h4>
                    <p className="text-sm">Users are responsible for maintaining account security and all activities under their account.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-2">Intellectual Property</h4>
                    <p className="text-sm">All game content, designs, and materials are protected by copyright and trademark laws.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-2">Fair Play Policy</h4>
                    <p className="text-sm">We maintain strict anti-cheating policies to ensure fair gameplay for all users.</p>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-gray-600 hover:bg-gray-700 text-white">
                  Read Full Terms
                </Button>
              </Card>

              <Card className="p-8 bg-white/90 backdrop-blur-sm border-2 border-gray-200 hover:border-gray-400 transition-all duration-300">
                <h3 className="text-2xl font-black text-amber-900 mb-6">Privacy Policy</h3>
                <div className="space-y-4 text-amber-700">
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-2">Data Collection</h4>
                    <p className="text-sm">We collect only necessary data to provide and improve our gaming services and user experience.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-2">Data Protection</h4>
                    <p className="text-sm">Your personal information is protected using industry-standard security measures and encryption.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-2">Third-Party Services</h4>
                    <p className="text-sm">We may use trusted third-party services for analytics and advertising, subject to their privacy policies.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-2">User Rights</h4>
                    <p className="text-sm">You have the right to access, modify, or delete your personal data at any time.</p>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-gray-600 hover:bg-gray-700 text-white">
                  Read Full Policy
                </Button>
              </Card>
            </div>

            <div className="text-center mt-12">
              <p className="text-amber-700 text-sm">
                Last updated: September 29, 2025 | For questions about our legal policies, please contact our legal team at legal@gamecraftstudios.com
              </p>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section id="news" className="py-20 bg-gradient-to-b from-gray-200 to-slate-200">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="bg-slate-600 text-white px-4 py-2 mb-4">
                📰 News
              </Badge>
              <h2 className="text-4xl md:text-5xl font-black text-amber-900 mb-6">
                Latest Updates
              </h2>
              <p className="text-xl text-amber-700 max-w-3xl mx-auto">
                Stay updated with our latest game releases, features, and company news.
              </p>
            </div>

            <div className="space-y-6 max-w-4xl mx-auto">
              {newsUpdates.map((news, index) => (
                <Card key={index} className="p-8 bg-white/90 backdrop-blur-sm border-2 border-slate-200 hover:border-slate-400 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-black text-amber-900 mb-2 md:mb-0">{news.title}</h3>
                    <Badge className="bg-slate-600 text-white px-3 py-1 text-sm w-fit">
                      {news.date}
                    </Badge>
                  </div>
                  <p className="text-amber-700 leading-relaxed">{news.summary}</p>
                  <Button className="mt-4 bg-slate-600 hover:bg-slate-700 text-white">
                    Read More
                  </Button>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button className="bg-slate-600 hover:bg-slate-700 text-white px-8 py-3">
                View All News
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-700  text-yellow-200 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Gamepad2 className="w-4 h-4 text-amber-900" />
                </div>
                <div className="font-black text-lg">GameCraft Studios</div>
              </div>
              <p className="text-yellow-300 text-sm leading-relaxed">
                Creating immersive gaming experiences that inspire and entertain players around the world.
              </p>
            </div>

            <div>
              <h4 className="font-black text-yellow-200 mb-4">Quick Links</h4>
              <div className="space-y-2">
                {footerlink.slice(0, 4).map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block text-yellow-300 hover:text-yellow-100 transition-colors text-sm"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-black text-yellow-200 mb-4">Support</h4>
              <div className="space-y-2">
                {footerlink.slice(4).map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block text-yellow-300 hover:text-yellow-100 transition-colors text-sm"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-black text-yellow-200 mb-4">Connect</h4>
              <div className="space-y-2 text-sm">
                <p className="text-yellow-300">📧 info@gamecraftstudios.com</p>
                <p className="text-yellow-300">📞 (555) 123-GAME</p>
                <p className="text-yellow-300">📍 123 Game Street, Tech City</p>
                {/* <div className="flex space-x-4 mt-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-yellow-400 transition-colors">
                    <span className="text-amber-900 text-sm">f</span>
                  </div>
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-yellow-400 transition-colors">
                    <span className="text-amber-900 text-sm">t</span>
                  </div>
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-yellow-400 transition-colors">
                    <span className="text-amber-900 text-sm">i</span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          <div className="border-t border-yellow-600 pt-8 text-center">
            <p className="text-yellow-300 text-sm">
              © 2025 GameCraft Studios. All rights reserved. | Crafted with ❤️ for gamers worldwide
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}