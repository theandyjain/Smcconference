import { useEffect, useRef, useState } from "react";
import { InlineWidget } from "react-calendly";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { motion } from "motion/react";
import { StockMarketAnimation } from "./components/StockMarketAnimation";
import { FadeInWhenVisible, ScaleInWhenVisible, SlideInWhenVisible, StaggerChildren, StaggerItem } from "./components/AnimationWrappers";
import { RotatingText } from "./components/RotatingText";
import { 
  TrendingUp, 
  Users, 
  Video, 
  Target, 
  CheckCircle2,
  ArrowRight,
  Sparkles,
  BarChart3,
  Shield,
  Zap,
  Globe
} from "lucide-react";
import { Button } from "./components/ui/button";

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCalendly = () => {
    document.getElementById('calendly-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#05050f] text-white overflow-x-hidden">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full bg-[#05050f]/80 backdrop-blur-xl border-b border-cyan-500/20 z-50"
        style={{
          boxShadow: scrollY > 50 ? '0 4px 30px rgba(0, 255, 255, 0.1)' : 'none'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
                animate={{ x: ['-200%', '200%'] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                style={{ opacity: 0.3 }}
              />
              <Sparkles className="w-5 h-5 text-white relative z-10" />
            </div>
            <span className="font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Smart Money Circle
            </span>
          </motion.div>
          
          <motion.button
            onClick={scrollToCalendly}
            className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white transition-all duration-300 border-0 relative overflow-hidden px-4 py-2 rounded-md font-medium text-sm"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 255, 255, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Request an Invite</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500"
              initial={{ x: '100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Animated Background */}
        <StockMarketAnimation />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#05050f]/50 to-[#05050f] pointer-events-none z-10"></div>

        {/* Grid Overlay */}
        <div className="absolute inset-0 z-10" style={{
          backgroundImage: 'linear-gradient(rgba(0, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full mb-8 border border-cyan-500/30 backdrop-blur-sm"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Shield className="w-4 h-4 text-cyan-400" />
              </motion.div>
              <span className="text-sm bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Exclusive Network for Public Company CEOs
              </span>
            </motion.div>
            
            <motion.h1 
              className="mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="block text-5xl sm:text-6xl lg:text-7xl mb-2">
                The Investors Who Move
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                <RotatingText 
                  words={['Small', 'Mid', 'Large']}
                  staticSuffix="-Cap Stocks Are Already Talking."
                />
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-2xl sm:text-3xl mb-8 text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              The Question Is — Are They Talking About{" "}
              <span className="text-cyan-400">Your Company?</span>
            </motion.p>

            <motion.p 
              className="text-lg sm:text-xl mb-6 text-gray-400 max-w-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Smart Money Circle connects select public company CEOs with a network of independent RIAs, 
              money managers, and family offices actively allocating capital into emerging public companies.
            </motion.p>

            <motion.div 
              className="flex items-center gap-3 mb-10 p-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg border border-cyan-500/20 backdrop-blur-sm relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent"
                animate={{ x: ['-200%', '200%'] }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              />
              <BarChart3 className="w-6 h-6 text-cyan-400 relative z-10" />
              <p className="text-lg text-gray-300 relative z-10">
                Our network represents over{" "}
                <span className="text-cyan-400 font-semibold">$1.2 trillion</span> in managed assets 
                and specializes in discovering sub-$10B opportunities before the broader market catches on.
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.button
                onClick={scrollToCalendly}
                className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white transition-all duration-300 text-lg px-8 py-6 border-0 relative overflow-hidden rounded-md font-medium inline-flex items-center justify-center gap-2 h-auto"
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0, 255, 255, 0.6)' }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Request an Invite
                  <ArrowRight className="w-5 h-5" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>

            <motion.p 
              className="mt-6 text-sm text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              For CEOs of public companies seeking institutional investor visibility.
            </motion.p>
          </div>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </section>

      {/* Visibility Gap Section */}
      <section className="py-20 bg-gradient-to-b from-[#05050f] to-[#0a0a1e] relative">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(138, 43, 226, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(0, 255, 255, 0.15) 0%, transparent 50%)'
        }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeInWhenVisible direction="left">
              <div>
                <h2 className="text-4xl sm:text-5xl mb-6">
                  Most Public Companies Aren't Discovered by 
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> the Investors Who Matter</span>
                </h2>
                
                <StaggerChildren>
                  <div className="space-y-4 mb-8">
                    {[
                      "Institutional investors never hear the full story",
                      "Smaller companies struggle to reach the right investor network",
                      "Investor discovery is dominated by large-cap coverage"
                    ].map((text, idx) => (
                      <StaggerItem key={idx}>
                        <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-lg border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300 group">
                          <motion.div
                            className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                          />
                          <p className="text-gray-300 group-hover:text-white transition-colors">{text}</p>
                        </div>
                      </StaggerItem>
                    ))}
                  </div>
                </StaggerChildren>

                <motion.div 
                  className="p-6 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-lg border border-cyan-500/30 backdrop-blur-sm relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"
                    animate={{ x: ['-200%', '200%'] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                  />
                  <Zap className="w-6 h-6 text-cyan-400 mb-3 relative z-10" />
                  <p className="text-xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent italic relative z-10">
                    "The difference between an overlooked stock and a recognized opportunity is investor visibility."
                  </p>
                </motion.div>
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible direction="right">
              <div className="relative">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-lg blur-3xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                ></motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBkYXRhJTIwY2hhcnRzJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc3MjcxMjY0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Financial Analytics"
                    className="rounded-lg shadow-2xl relative z-10 border border-cyan-500/30"
                  />
                </motion.div>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* Network Section */}
      <section className="py-20 bg-[#0a0a1e] relative overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(0, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.02) 1px, transparent 1px)',
          backgroundSize: '100px 100px'
        }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeInWhenVisible>
            <div className="text-center mb-16">
              <motion.div
                className="inline-block"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Globe className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              </motion.div>
              <h2 className="text-4xl sm:text-5xl mb-6">
                A Global Network of <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Professional Investors</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Smart Money Circle connects CEOs with a curated ecosystem of professional investors
              </p>
            </div>
          </FadeInWhenVisible>

          <StaggerChildren>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { icon: Users, title: "Independent RIAs", desc: "Registered Investment Advisors seeking high-potential opportunities" },
                { icon: TrendingUp, title: "Money Managers", desc: "Institutional managers actively allocating capital" },
                { icon: Shield, title: "Family Offices", desc: "High-net-worth investors with long-term horizons" }
              ].map((item, idx) => (
                <StaggerItem key={idx}>
                  <motion.div 
                    className="p-8 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-lg border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300 group relative overflow-hidden"
                    whileHover={{ y: -10, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <item.icon className="w-12 h-12 text-cyan-400 mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-2xl mb-3 relative z-10">{item.title}</h3>
                    <p className="text-gray-400 relative z-10 group-hover:text-gray-300 transition-colors">
                      {item.desc}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </div>
          </StaggerChildren>

          <FadeInWhenVisible delay={0.4}>
            <motion.div 
              className="text-center p-8 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-lg border border-cyan-500/30 backdrop-blur-sm relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"
                animate={{ x: ['-200%', '200%'] }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              />
              <p className="text-2xl mb-2 relative z-10">
                Collectively managing over <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-semibold">$1.2 trillion</span> in assets
              </p>
              <p className="text-gray-400 relative z-10">
                These investors specialize in identifying high-potential public companies before the market catches up.
              </p>
            </motion.div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Show Section */}
      <section className="py-20 bg-gradient-to-b from-[#0a0a1e] to-[#05050f] relative">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(0, 255, 255, 0.15) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(138, 43, 226, 0.15) 0%, transparent 50%)'
        }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <SlideInWhenVisible from="left">
              <div className="relative order-2 md:order-1">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-tl from-purple-500/20 to-cyan-500/20 rounded-lg blur-3xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                ></motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, rotateY: -5 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1660675588067-13ecd2c19de4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHBvZGNhc3QlMjBpbnRlcnZpZXclMjBzdHVkaW98ZW58MXx8fHwxNzcyNzEyNjQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Podcast Studio"
                    className="rounded-lg shadow-2xl relative z-10 border border-cyan-500/30"
                  />
                </motion.div>
              </div>
            </SlideInWhenVisible>

            <SlideInWhenVisible from="right">
              <div className="order-1 md:order-2">
                <motion.div 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full mb-6 border border-purple-500/30 backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  <Video className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-purple-400">Smart Money Circle Show</span>
                </motion.div>

                <h2 className="text-4xl sm:text-5xl mb-6">
                  Where CEOs Introduce Their Companies to 
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> the Investment Community</span>
                </h2>

                <p className="text-lg text-gray-400 mb-6">
                  Selected CEOs are invited to appear on the Smart Money Circle Show to present their 
                  company's story directly to investors.
                </p>

                <div className="mb-8">
                  <h4 className="text-xl mb-4 text-cyan-400">Interview topics include:</h4>
                  <StaggerChildren>
                    <div className="space-y-3">
                      {[
                        "Market opportunity",
                        "Strategic growth plans",
                        "Competitive positioning",
                        "Long-term vision"
                      ].map((topic, idx) => (
                        <StaggerItem key={idx}>
                          <motion.div 
                            className="flex items-center gap-3 group"
                            whileHover={{ x: 10 }}
                            transition={{ duration: 0.2 }}
                          >
                            <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 group-hover:text-purple-400 transition-colors" />
                            <span className="text-gray-300 group-hover:text-white transition-colors">{topic}</span>
                          </motion.div>
                        </StaggerItem>
                      ))}
                    </div>
                  </StaggerChildren>
                </div>

                <motion.div 
                  className="p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/30 backdrop-blur-sm"
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="mb-2">
                    <span className="text-purple-400">Distribution reaches:</span>
                  </p>
                  <p className="text-gray-400">
                    RIAs • Portfolio Managers • Institutional Investors • Family Offices
                  </p>
                </motion.div>
              </div>
            </SlideInWhenVisible>
          </div>
        </div>
      </section>

      {/* Investor Intelligence Section */}
      <section className="py-20 bg-[#05050f] relative">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(138, 43, 226, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(138, 43, 226, 0.02) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeInWhenVisible>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Investor Intelligence</span> for Public Companies
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Smart Money Circle helps identify which investors are most likely to invest in companies like yours.
              </p>
            </div>
          </FadeInWhenVisible>

          <StaggerChildren>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Target, title: "Investor Targeting Insights", desc: "Identify the right investors for your story", color: "cyan" },
                { icon: TrendingUp, title: "Capital Allocation Patterns", desc: "Understand where money is flowing", color: "purple" },
                { icon: BarChart3, title: "Market Positioning Intelligence", desc: "Position your company effectively", color: "pink" },
                { icon: Users, title: "Institutional Visibility", desc: "Increase awareness among key decision makers", color: "cyan" }
              ].map((item, idx) => (
                <StaggerItem key={idx}>
                  <motion.div 
                    className="p-6 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-lg border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300 group relative overflow-hidden h-full"
                    whileHover={{ y: -10, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${
                        item.color === 'cyan' ? 'from-cyan-500/10 to-transparent' :
                        item.color === 'purple' ? 'from-purple-500/10 to-transparent' :
                        'from-pink-500/10 to-transparent'
                      }`}
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <item.icon className={`w-10 h-10 mb-4 relative z-10 ${
                      item.color === 'cyan' ? 'text-cyan-400' :
                      item.color === 'purple' ? 'text-purple-400' :
                      'text-pink-400'
                    }`} />
                    <h4 className="text-lg mb-2 relative z-10">{item.title}</h4>
                    <p className="text-sm text-gray-400 relative z-10 group-hover:text-gray-300 transition-colors">{item.desc}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </div>
          </StaggerChildren>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="py-20 bg-gradient-to-b from-[#05050f] to-[#0a0a1e] relative">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(0, 255, 255, 0.1) 0%, transparent 50%)'
        }}></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeInWhenVisible>
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl mb-6">
                Companies That Typically <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Participate</span>
              </h2>
            </div>
          </FadeInWhenVisible>

          <StaggerChildren>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: BarChart3, text: "Public companies under $10B market cap" },
                { icon: TrendingUp, text: "Growth stage companies seeking investor visibility" },
                { icon: Users, text: "CEOs expanding their institutional investor base" }
              ].map((item, idx) => (
                <StaggerItem key={idx}>
                  <motion.div 
                    className="p-8 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-lg border border-cyan-500/20 backdrop-blur-sm text-center group hover:border-cyan-500/40 transition-all duration-300 relative overflow-hidden"
                    whileHover={{ y: -10, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                      <item.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <p className="text-lg text-gray-300 group-hover:text-white transition-colors relative z-10">
                      {item.text}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </div>
          </StaggerChildren>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-[#0a0a1e] relative">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(0, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.02) 1px, transparent 1px)',
          backgroundSize: '100px 100px'
        }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeInWhenVisible>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl mb-6">
                How It <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Works</span>
              </h2>
            </div>
          </FadeInWhenVisible>

          <StaggerChildren>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { num: 1, title: "Eligibility Review", desc: "We review your company to determine if it fits our investor network.", color: "from-cyan-500" },
                { num: 2, title: "CEO Invitation", desc: "Qualified CEOs are invited to appear on the Smart Money Circle Show.", color: "from-purple-500" },
                { num: 3, title: "Investor Exposure", desc: "Your company is introduced to relevant investors across our network.", color: "from-pink-500" }
              ].map((item, idx) => (
                <StaggerItem key={idx}>
                  <motion.div 
                    className="relative h-full"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className={`absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br ${item.color} to-transparent rounded-full flex items-center justify-center text-2xl text-white shadow-lg z-20`}
                      animate={{ 
                        boxShadow: [
                          '0 0 20px rgba(0, 255, 255, 0.5)',
                          '0 0 40px rgba(138, 43, 226, 0.5)',
                          '0 0 20px rgba(0, 255, 255, 0.5)'
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      {item.num}
                    </motion.div>
                    <div className="p-8 pt-12 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-lg border border-cyan-500/20 backdrop-blur-sm h-full hover:border-cyan-500/40 transition-all duration-300 relative overflow-hidden group">
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${item.color}/10 to-transparent`}
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <h3 className="text-2xl mb-4 relative z-10">{item.title}</h3>
                      <p className="text-gray-400 relative z-10 group-hover:text-gray-300 transition-colors">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </div>
          </StaggerChildren>
        </div>
      </section>

      {/* Calendly CTA Section */}
      <section 
        id="calendly-section"
        className="py-20 bg-gradient-to-b from-[#0a0a1e] to-[#05050f] relative"
      >
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(0, 255, 255, 0.2) 0%, transparent 50%), radial-gradient(circle at 50% 100%, rgba(138, 43, 226, 0.2) 0%, transparent 50%)'
        }}></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeInWhenVisible>
            <div className="text-center mb-12">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              </motion.div>
              <h2 className="text-4xl sm:text-5xl mb-6">
                Request Your <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Invitation</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-2">
                Schedule a short call to see if your company qualifies to be introduced to our investor network.
              </p>
              <p className="text-sm text-gray-500">
                This is a brief 15-minute qualification call to determine if your company fits the Smart Money Circle investor network.
              </p>
            </div>
          </FadeInWhenVisible>

          <ScaleInWhenVisible delay={0.3}>
            <motion.div 
              className="bg-white rounded-lg overflow-hidden shadow-2xl border-2 border-cyan-500/30 relative"
              whileHover={{ 
                boxShadow: '0 0 60px rgba(0, 255, 255, 0.3)',
                borderColor: 'rgba(0, 255, 255, 0.6)'
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <InlineWidget 
                url="https://calendly.com/your-calendly-link"
                styles={{
                  height: '700px',
                  minWidth: '100%'
                }}
              />
            </motion.div>
          </ScaleInWhenVisible>

          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-sm text-gray-500">
              By scheduling a call, you agree to our terms of service and privacy policy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#05050f] border-t border-cyan-500/20 py-12 relative">
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
                  animate={{ x: ['-200%', '200%'] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  style={{ opacity: 0.3 }}
                />
                <Sparkles className="w-5 h-5 text-white relative z-10" />
              </div>
              <span className="font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Smart Money Circle
              </span>
            </motion.div>
            
            <p className="text-sm text-gray-500">
              © 2026 Smart Money Circle. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm text-gray-400">
              <motion.a 
                href="#" 
                className="hover:text-cyan-400 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                href="#" 
                className="hover:text-cyan-400 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
