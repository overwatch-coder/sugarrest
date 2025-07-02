'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { TrendingUp, DollarSign, Users, Target, Calculator, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

type ReturnDetails = {
  yearlyProfit: number;
  yearlyReturn: number;
  actualReturn: number;
};


const InvestmentSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [investmentAmount, setInvestmentAmount] = useState(5000);

  const calculateReturns = (amount: number, years: number): ReturnDetails => {
    // Profit rates for years 1–5
    const profitRates = [0.12, 0.14, 0.16, 0.18, 0.2];

    // Use only the first `years` rates or extend with last rate if > 5
    const applicableRates = Array.from({ length: years }, (_, i) =>
      i < profitRates.length
        ? profitRates[i]
        : profitRates[profitRates.length - 1]
    );

    const profit = applicableRates.reduce(
      (sum, rate) => sum + amount * rate,
      0
    );
    const annualReturn = profit + amount;
    const yearlyProfit = applicableRates[years - 1] * amount;
    const yearlyReturn = yearlyProfit + amount;

    return {
      yearlyProfit,
      yearlyReturn,
      actualReturn: annualReturn,
    };
  };

  const calculateROI = (investment: number, years: number): number => {
    const { actualReturn } = calculateReturns(investment, years);
    return ((actualReturn - investment) / investment) * 100;
  };

  const stats = [
    {
      icon: TrendingUp,
      title: '12% Annual Return',
      description: 'Guaranteed minimum return on your investment',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: DollarSign,
      title: 'GHS 5,000 Minimum',
      description: 'Low entry point for premium investment opportunity',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Growing Market',
      description: 'Expanding customer base across Ghana',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: Target,
      title: 'Strategic Growth',
      description: 'Planned expansion into premium spirits market',
      color: 'from-orange-400 to-red-500'
    }
  ];

  const benefits = [
    'Quarterly dividend payments',
    'Optional reinvestment program',
    'Priority access to new products',
    'Exclusive investor events',
    'Transparent financial reporting',
    'Exit strategy after multiple years'
  ];

  return (
    <section
      id="investment"
      className="py-10 lg:py-20 bg-gradient-to-b from-green-50 via-white to-green-50"
    >
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
            Investment Opportunity
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-playfair">
            Invest in the Future
            <span className="block text-green-600">of Premium Beverages</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join us in revolutionizing Ghana's beverage industry. Be part of our
            growth story with attractive returns and exclusive benefits.
          </p>
        </motion.div>

        {/* Investment Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <CardContent className="p-6">
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {stat.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{stat.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* ROI Calculator */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Calculator className="w-6 h-6 mr-3 text-green-600" />
                  ROI Calculator
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Investment Amount (GHS)
                  </label>
                  <Input
                    type="number"
                    value={investmentAmount}
                    onChange={(e) =>
                      setInvestmentAmount(Number(e.target.value))
                    }
                    min={5000}
                    step={1000}
                    className="text-lg font-semibold"
                  />
                </div>

                <div className="space-y-4">
                  {[
                    { years: 1, profit: 0.12 },
                    { years: 2, profit: 0.14 },
                    { years: 3, profit: 0.16 },
                  ].map(({ years, profit }) => (
                    <div
                      key={years}
                      className="flex justify-between items-center p-4 bg-green-50 rounded-lg"
                    >
                      <span className="font-semibold text-gray-700">
                        Year {years}
                      </span>
                      <div className="text-right">
                        <div className="text-xl font-bold text-green-600">
                          ₵
                          {calculateReturns(
                            investmentAmount,
                            years
                          ).actualReturn.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-500">
                          +₵
                          {calculateReturns(
                            investmentAmount,
                            years
                          ).yearlyProfit.toLocaleString()}{" "}
                          profit ({(profit * 100).toFixed(1)}%)
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg text-white text-center">
                  <p className="font-semibold">
                    Total 3-Year ROI:{" "}
                    {`${calculateROI(investmentAmount, 3).toFixed(1)}%`}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Investment Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Card className="h-full border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Investor Benefits
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      className="flex items-center"
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-4 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">
                        {benefit}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">
                    Why Invest in Sugarret?
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We're positioned at the intersection of Ghana's growing
                    beverage market and the global trend toward premium, natural
                    products. Our 30-year family legacy provides stability,
                    while our innovation roadmap promises exciting growth.
                  </p>
                </div>

                <Link href="/investment">
                  <Button
                    size="lg"
                    className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold py-4"
                    // whileHover={{ scale: 1.02 }}
                    // whileTap={{ scale: 0.98 }}
                  >
                    Start Your Investment Journey
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Investment Process */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <Card className="border-0 shadow-xl bg-gradient-to-r from-gray-900 via-green-900 to-gray-900 text-white overflow-hidden">
            <CardContent className="p-12 relative">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjIiIGZpbGw9IiMwMDAiIG9wYWNpdHk9IjAuMSIvPjwvZz48L3N2Zz4=')] opacity-20" />

              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6 font-playfair">
                  Ready to Invest?
                </h3>
                <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                  Join our growing community of investors and be part of
                  Sugarret's success story. Contact us today to learn more about
                  this exciting opportunity.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/meeting">
                    <Button
                      size="lg"
                      className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold"
                      // whileHover={{ scale: 1.05 }}
                      // whileTap={{ scale: 0.95 }}
                    >
                      Schedule a Meeting
                    </Button>
                  </Link>
                  <Link href="/prospectus">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-full font-semibold bg-green-600"
                      // whileHover={{ scale: 1.05 }}
                      // whileTap={{ scale: 0.95 }}
                    >
                      Download Prospectus
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestmentSection;