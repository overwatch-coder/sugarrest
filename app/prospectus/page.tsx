'use client';

import { motion } from 'framer-motion';
import { Download, FileText, BarChart3, Target, Users, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default function ProspectusPage() {
  const sections = [
    {
      title: 'Executive Summary',
      description: 'Overview of Sugarret\'s business model, market opportunity, and investment proposition',
      pages: '2-5',
      icon: FileText
    },
    {
      title: 'Market Analysis',
      description: 'Comprehensive analysis of Ghana\'s beverage market and growth opportunities',
      pages: '6-12',
      icon: BarChart3
    },
    {
      title: 'Business Strategy',
      description: 'Our expansion plans, product roadmap, and competitive advantages',
      pages: '13-18',
      icon: Target
    },
    {
      title: 'Financial Projections',
      description: 'Detailed financial forecasts, revenue models, and return projections',
      pages: '19-25',
      icon: TrendingUp
    },
    {
      title: 'Management Team',
      description: 'Leadership profiles and organizational structure',
      pages: '26-28',
      icon: Users
    }
  ];

  const keyHighlights = [
    '30-year family legacy in beverage industry',
    'Minimum investment of ₵5,000 with 12% annual returns',
    'Established customer base and operational infrastructure',
    'Clear expansion roadmap into premium spirits market',
    'Growing health-conscious consumer demand in Ghana',
    'Experienced management team with proven track record'
  ];

  return (
    <div className="min-h-screen">
      <div>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center pt-10"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-playfair">
                Investment Prospectus
              </h1>
              <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
                Comprehensive investment documentation for Sugarret&apos;s
                growth opportunity
              </p>
              <Link href="/prospectus.pdf" target="_blank">
                <Button
                  size="lg"
                  className="bg-white text-green-600 hover:bg-gray-100"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Full Prospectus (PDF)
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Document Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  Prospectus Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      28
                    </div>
                    <p className="text-gray-600">Pages</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      5
                    </div>
                    <p className="text-gray-600">Key Sections</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      2025
                    </div>
                    <p className="text-gray-600">Latest Version</p>
                  </div>
                </div>
                <p className="text-gray-600 text-center leading-relaxed">
                  Our comprehensive investment prospectus provides detailed
                  insights into Sugarret&apos;s business model, market
                  opportunity, financial projections, and growth strategy. This
                  document is essential reading for potential investors.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Document Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Document Sections</h2>
              <div className="space-y-4">
                {sections.map((section, index) => {
                  const Icon = section.icon;
                  return (
                    <motion.div
                      key={section.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-4">
                          <div className="flex items-start space-x-4">
                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Icon className="w-5 h-5 text-green-600" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h3 className="font-bold">{section.title}</h3>
                                <Badge variant="outline">
                                  Pages {section.pages}
                                </Badge>
                              </div>
                              <p className="text-gray-600 text-sm">
                                {section.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Key Highlights</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {keyHighlights.map((highlight, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-gray-700">{highlight}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6 bg-green-50">
                <CardContent className="p-6">
                  <h3 className="font-bold text-green-800 mb-3">
                    Investment Summary
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Minimum Investment:</span>
                      <span className="font-semibold">₵5,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Expected Annual Return:</span>
                      <span className="font-semibold">12%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Investment Term:</span>
                      <span className="font-semibold">1 Year Minimum</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Projected ROI:</span>
                      <span className="font-semibold text-green-600">
                        42% (after 3 years)
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Download Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-gradient-to-r from-gray-900 to-green-900 text-white">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold mb-6 font-playfair">
                  Download Prospectus
                </h2>
                <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                  Get instant access to our complete investment prospectus with
                  detailed financial projections, market analysis, and business
                  strategy.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/prospectus.pdf" target="_blank">
                  <Button
                    size="lg"
                    className="bg-white text-green-600 hover:bg-gray-100"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download PDF (0.29 MB)
                  </Button>
                </Link>

                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-green-600 bg-green-600"
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    Request Printed Copy
                  </Button>
                </div>
                <p className="text-sm text-gray-300 mt-6">
                  By downloading this prospectus, you agree to our terms and
                  conditions. This document contains confidential information.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}