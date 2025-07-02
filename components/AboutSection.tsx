'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock, Heart, Leaf, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const milestones = [
    {
      year: `${new Date().getFullYear() - 30}`,
      event: "Family bar established in Ghana",
      icon: Clock,
    },
    { year: "2024", event: "Sugarret vision born", icon: Heart },
    { year: "2025", event: "Premium juice bar launched", icon: Leaf },
    { year: "2027", event: "Expanding across Ghana", icon: Users },
  ];

  const values = [
    {
      title: 'Heritage',
      description: 'Three decades of family tradition in beverage craftsmanship',
      gradient: 'from-amber-400 to-orange-500'
    },
    {
      title: 'Quality',
      description: 'Premium sugarcane sourced from the finest Ghanaian farms',
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      title: 'Innovation',
      description: 'Blending traditional methods with modern techniques',
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      title: 'Community',
      description: 'Empowering local farmers and creating opportunities',
      gradient: 'from-purple-400 to-pink-500'
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-to-b from-white via-green-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Our Story
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-playfair">
            From Family Legacy
            <span className="block text-green-600">To Premium Innovation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Born from a 30-year family tradition of crafting exceptional beverages, 
            Sugarret represents the evolution of authentic Ghanaian craftsmanship 
            into a premium lifestyle brand.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12 text-gray-800">Our Journey</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-6 text-center">
                      <motion.div
                        className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <h4 className="text-2xl font-bold text-green-600 mb-2">{milestone.year}</h4>
                      <p className="text-gray-600 font-medium">{milestone.event}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardContent className="p-8">
                  <div className={`w-full h-2 bg-gradient-to-r ${value.gradient} rounded-full mb-6`} />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-6 font-playfair">Our Mission</h3>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto">
            To transform the beverage industry by creating premium, natural, and sustainable 
            sugarcane-based products that celebrate Ghanaian heritage while meeting the 
            sophisticated tastes of modern consumers.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;