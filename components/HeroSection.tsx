'use client';

import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { ChevronDown, Sparkles, Droplet, ArrowRight, Play, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #064e3b 0%, #065f46 25%, #047857 50%, #059669 75%, #10b981 100%)'
      }}
    >
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute inset-0"
        style={{ y, opacity }}
      >
        {/* Sugarcane Stalks */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-10"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 2) * 30}%`,
            }}
            animate={{
              rotate: [0, 8, -8, 0],
              scale: [1, 1.1, 0.9, 1],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.2,
            }}
          >
            <div className="w-8 h-32 bg-gradient-to-b from-green-300 to-green-600 rounded-full transform rotate-12" />
          </motion.div>
        ))}

        {/* Juice Drops */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`drop-${i}`}
            className="absolute rounded-full bg-yellow-300/30"
            style={{
              width: `${12 + i * 2}px`,
              height: `${12 + i * 2}px`,
              left: `${15 + i * 10}%`,
              top: `${25 + i * 8}%`,
            }}
            animate={{
              y: [-20, -80, -20],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}
      </motion.div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-28">
        {/* Heritage Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <Badge className="bg-white/20 backdrop-blur-md text-white border-white/30 px-6 py-3 text-sm font-semibold tracking-wider hover:bg-white/30 transition-all duration-300">
            <Sparkles className="w-4 h-4 mr-2" />
            EST. {new Date().getFullYear() - 30} • 30 YEARS OF EXCELLENCE
          </Badge>
        </motion.div>

        {/* Main Brand Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-4 font-playfair leading-none tracking-tight">
            Sugarret
          </h1>
          
          <motion.div
            className="text-2xl md:text-3xl lg:text-4xl text-yellow-300 font-light mb-6 tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Nature's Freshest High
          </motion.div>
        </motion.div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-12"
        >
          <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed font-medium">
            Premium sugarcane beverages crafted from Ghana's finest ingredients. 
            <span className="text-yellow-200 font-semibold"> From fresh juices to future spirits</span> — 
            experience tradition reimagined.
          </p>
        </motion.div>

        {/* Primary Actions */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Link href="/order">
            <Button
              size="lg"
              className="bg-white text-green-800 hover:bg-green-50 px-12 py-6 rounded-full text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 group border-2 border-transparent hover:border-green-200"
            >
              <Droplet className="w-6 h-6 mr-3 group-hover:animate-bounce" />
              Order Fresh Now
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          
          <Link href="/investment">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-green-900 px-12 py-6 rounded-full text-xl font-bold bg-transparent backdrop-blur-sm group transition-all duration-300"
            >
              <TrendingUp className="w-6 h-6 mr-3" />
              Invest with Us
            </Button>
          </Link>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          {[
            { number: '30+', label: 'Years of Heritage', icon: '🏆', color: 'from-yellow-400 to-orange-500' },
            { number: '12%', label: 'First Annual Return', icon: '📈', color: 'from-green-400 to-emerald-500' },
            { number: '100%', label: 'Natural & Fresh', icon: '🌱', color: 'from-blue-400 to-cyan-500' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="relative group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="bg-white/15 backdrop-blur-md rounded-2xl p-8 border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 text-2xl`}>
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-green-200 font-semibold text-lg">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Secondary Actions */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 -mt-10 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <Link href="/bar">
            <Button variant="ghost" className="text-white hover:bg-white/10 px-6 py-3 rounded-full font-semibold">
              Visit Our Bar
            </Button>
          </Link>
          <Link href="/delivery">
            <Button variant="ghost" className="text-white hover:bg-white/10 px-6 py-3 rounded-full font-semibold">
              Order Delivery
            </Button>
          </Link>
          <Link href="/prospectus">
            <Button variant="ghost" className="text-white hover:bg-white/10 px-6 py-3 rounded-full font-semibold">
              Download Prospectus
            </Button>
          </Link>
          <Link href="/meeting">
            <Button variant="ghost" className="text-white hover:bg-white/10 px-6 py-3 rounded-full font-semibold">
              Schedule Meeting
            </Button>
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="hidden md:block absolute bottom-4 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center text-white/70">
            <span className="text-sm font-medium mb-2 tracking-wide text-center">DISCOVER MORE</span>
            <ChevronDown className="w-6 h-6" />
          </div>
        </motion.div>
      </div>

      {/* 3D Bottle Visualization */}
      <motion.div
        className="absolute right-12 top-1/2 transform -translate-y-1/2 hidden xl:block"
        initial={{ opacity: 0, x: 100, rotateY: -20 }}
        animate={{ opacity: 1, x: 0, rotateY: 0 }}
        transition={{ delay: 1.6, duration: 1.2 }}
      >
        <motion.div
          className="relative"
          whileHover={{ 
            rotateY: 10,
            scale: 1.05,
          }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {/* Main Bottle */}
          <div className="w-24 h-80 bg-gradient-to-b from-green-400 via-green-500 to-green-700 rounded-t-full rounded-b-xl shadow-2xl relative overflow-hidden">
            {/* Liquid Animation */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-yellow-300 via-green-300 to-transparent rounded-b-xl"
              animate={{ height: ['65%', '85%', '65%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Bottle Highlight */}
            <div className="absolute top-8 left-4 w-3 h-24 bg-white/40 rounded-full" />
            
            {/* Brand Label */}
            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 bg-white/95 rounded-lg px-4 py-2 shadow-lg">
              <span className="text-green-800 font-bold text-sm">SUGARRET</span>
            </div>
          </div>

          {/* Floating Particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-yellow-300/70 rounded-full"
              style={{
                left: `${-20 + i * 15}px`,
                top: `${50 + i * 25}px`,
              }}
              animate={{
                y: [-15, -40, -15],
                opacity: [0.4, 0.9, 0.4],
                scale: [1, 1.4, 1],
              }}
              transition={{
                duration: 3 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;