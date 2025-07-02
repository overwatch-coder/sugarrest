"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  TrendingUp,
  DollarSign,
  Users,
  Target,
  Calculator,
  Download,
  Calendar,
  FileText,
  BarChart3,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import Link from "next/link";

type ReturnDetails = {
  yearlyProfit: number;
  yearlyReturn: number;
  actualReturn: number;
};

export default function InvestmentPage() {
  const [investmentAmount, setInvestmentAmount] = useState(5000);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
    message: "",
  });

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

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(
      "Investment inquiry submitted! We'll contact you within 24 hours."
    );
    setContactForm({ name: "", email: "", phone: "", amount: "", message: "" });
  };

  const keyMetrics = [
    { label: "Minimum Investment", value: "₵5,000", icon: DollarSign },
    { label: "First Annual Return", value: "12%", icon: TrendingUp },
    { label: "Investment Term", value: "1 Year Min", icon: Calendar },
    { label: "Current Investors", value: "50+", icon: Users },
  ];

  const investmentHighlights = [
    {
      title: "Proven Market Demand",
      description:
        "Growing health-conscious consumer base in Ghana with increasing demand for natural beverages",
      icon: Target,
    },
    {
      title: "Established Operations",
      description:
        "30-year family legacy with existing customer base and operational infrastructure",
      icon: BarChart3,
    },
    {
      title: "Expansion Ready",
      description:
        "Clear roadmap for scaling operations and introducing premium product lines",
      icon: TrendingUp,
    },
    {
      title: "Sustainable Returns",
      description:
        "Diversified revenue streams with plans for premium spirits and export markets",
      icon: DollarSign,
    },
  ];

  const financialProjections = [
    { year: "Year 1", revenue: "₵2.5M", growth: "25%", investors: "₵300K" },
    { year: "Year 2", revenue: "₵3.8M", growth: "52%", investors: "₵456K" },
    { year: "Year 3", revenue: "₵5.2M", growth: "37%", investors: "₵624K" },
  ];

  return (
    <div className="min-h-screen">
      <div>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center pt-12"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-playfair">
                Investment Opportunity
              </h1>
              <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
                Join us in revolutionizing Ghana&apos;s beverage industry with
                guaranteed returns and exclusive investor benefits
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/prospectus">
                  <Button
                    size="lg"
                    className="bg-white text-green-600 hover:bg-gray-100"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Prospectus
                  </Button>
                </Link>
                <Link href="/meeting">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white bg-green-600 text-white hover:bg-white hover:text-green-600"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Meeting
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {keyMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <Icon className="w-8 h-8 text-green-600 mx-auto mb-3" />
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {metric.value}
                      </h3>
                      <p className="text-gray-600 text-sm">{metric.label}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
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
                    Investment Calculator
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

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Get Investment Details
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        placeholder="Full Name"
                        value={contactForm.name}
                        onChange={(e) =>
                          setContactForm((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                        required
                      />
                      <Input
                        type="email"
                        placeholder="Email Address"
                        value={contactForm.email}
                        onChange={(e) =>
                          setContactForm((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        placeholder="Phone Number"
                        value={contactForm.phone}
                        onChange={(e) =>
                          setContactForm((prev) => ({
                            ...prev,
                            phone: e.target.value,
                          }))
                        }
                        required
                      />
                      <Input
                        placeholder="Investment Amount (₵)"
                        value={contactForm.amount}
                        onChange={(e) =>
                          setContactForm((prev) => ({
                            ...prev,
                            amount: e.target.value,
                          }))
                        }
                        required
                      />
                    </div>
                    <Textarea
                      placeholder="Tell us about your investment goals and any questions you have..."
                      value={contactForm.message}
                      onChange={(e) =>
                        setContactForm((prev) => ({
                          ...prev,
                          message: e.target.value,
                        }))
                      }
                      rows={4}
                    />
                    <Button
                      type="submit"
                      className="w-full bg-green-600 hover:bg-green-700"
                      size="lg"
                    >
                      Submit Investment Inquiry
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Investment Highlights */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Why Invest in Sugarret?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {investmentHighlights.map((highlight, index) => {
                  const Icon = highlight.icon;
                  return (
                    <motion.div
                      key={highlight.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">
                          {highlight.title}
                        </h3>
                        <p className="text-gray-600">{highlight.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Financial Projections */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Financial Projections
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Year</th>
                      <th className="text-left py-3 px-4">Projected Revenue</th>
                      <th className="text-left py-3 px-4">Growth Rate</th>
                      <th className="text-left py-3 px-4">Investor Returns</th>
                    </tr>
                  </thead>
                  <tbody>
                    {financialProjections.map((projection, index) => (
                      <motion.tr
                        key={projection.year}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="border-b hover:bg-gray-50"
                      >
                        <td className="py-3 px-4 font-semibold">
                          {projection.year}
                        </td>
                        <td className="py-3 px-4">{projection.revenue}</td>
                        <td className="py-3 px-4">
                          <Badge variant="outline" className="text-green-600">
                            +{projection.growth}
                          </Badge>
                        </td>
                        <td className="py-3 px-4 font-semibold text-green-600">
                          {projection.investors}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-gradient-to-r from-gray-900 to-green-900 text-white">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold mb-6 font-playfair">
                  Ready to Invest?
                </h2>
                <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                  Join our growing community of investors and be part of
                  Sugarret&apos;s success story. Download our detailed
                  prospectus or schedule a meeting with our investment team.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/prospectus">
                    <Button
                      size="lg"
                      className="bg-white text-green-600 hover:bg-gray-100"
                    >
                      <FileText className="w-5 h-5 mr-2" />
                      Download Full Prospectus
                    </Button>
                  </Link>
                  <Link href="/meeting">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-white bg-green-600 hover:bg-white hover:text-green-600"
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Investment Meeting
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
