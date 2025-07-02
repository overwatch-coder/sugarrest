"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Droplet, Sparkles, Clock, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeCategory, setActiveCategory] = useState("current");

  const currentProducts = [
    {
      name: "Pure Sugarcane Juice",
      description:
        "Freshly pressed from premium Ghanaian sugarcane, served chilled with a hint of lime",
      price: "From ₵15",
      image:
        "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["100% Natural", "No Additives", "Rich in Minerals"],
      gradient: "from-green-400 to-emerald-500",
    },
    {
      name: "Tropical Blend",
      description:
        "Signature mix of sugarcane juice with tropical fruits - pineapple, mango, and passion fruit",
      price: "From ₵22",
      image:
        "https://images.pexels.com/photos/1002543/pexels-photo-1002543.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Exotic Fruits", "Refreshing", "Vitamin Rich"],
      gradient: "from-orange-400 to-pink-500",
    },
    {
      name: "Mint Cooler",
      description:
        "Refreshing sugarcane juice infused with fresh mint leaves and cucumber",
      price: "From ₵18",
      image:
        "https://images.pexels.com/photos/1346347/pexels-photo-1346347.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Ultra Refreshing", "Natural Mint", "Perfect for Hot Days"],
      gradient: "from-teal-400 to-cyan-500",
    },
    {
      name: "Ginger Spice",
      description:
        "Bold blend of sugarcane juice with fresh ginger and a touch of honey",
      price: "From ₵20",
      image:
        "https://images.pexels.com/photos/1435747/pexels-photo-1435747.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Immune Boost", "Natural Energy", "Spicy Kick"],
      gradient: "from-yellow-400 to-orange-500",
    },
  ];

  const upcomingProducts = [
    {
      name: "Sugarret Premium Rum",
      description:
        "Artisanal rum distilled from our finest sugarcane, aged to perfection",
      status: "Coming 2025",
      features: ["Small Batch", "Aged 3 Years", "Premium Quality"],
      gradient: "from-amber-500 to-brown-600",
    },
    {
      name: "Heritage Wine Collection",
      description:
        "Unique wine made from fermented sugarcane with traditional Ghanaian spices",
      status: "In Development",
      features: ["Traditional Recipe", "Limited Edition", "Collector's Item"],
      gradient: "from-purple-500 to-indigo-600",
    },
    {
      name: "Craft Beer Series",
      description:
        "Innovative beer brewing using sugarcane as a base with local botanicals",
      status: "Research Phase",
      features: ["Innovation", "Local Botanicals", "Unique Flavor"],
      gradient: "from-yellow-600 to-amber-700",
    },
  ];

  return (
    <section
      id="products"
      className="py-10 lg:py-20 bg-gradient-to-b from-white to-green-50"
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
            Our Products
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-playfair">
            Crafted with
            <span className="block text-green-600">Passion & Tradition</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From refreshing daily beverages to premium spirits, every product
            embodies our commitment to quality and innovation.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg">
            <button
              onClick={() => setActiveCategory("current")}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === "current"
                  ? "bg-green-600 text-white shadow-lg"
                  : "text-gray-600 hover:text-green-600"
              }`}
            >
              Available Now
            </button>
            <button
              onClick={() => setActiveCategory("upcoming")}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === "upcoming"
                  ? "bg-green-600 text-white shadow-lg"
                  : "text-gray-600 hover:text-green-600"
              }`}
            >
              Coming Soon
            </button>
          </div>
        </div>

        {/* Current Products */}
        {activeCategory === "current" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {currentProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white/90 backdrop-blur-sm">
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${product.gradient} opacity-80`}
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/90 text-gray-800 font-semibold">
                        {product.price}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {product.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.map((feature) => (
                        <Badge
                          key={feature}
                          variant="secondary"
                          className="text-xs"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    <Button
                      className="w-full hidden bg-green-600 hover:bg-green-700 text-white rounded-full group"
                      // whileHover={{ scale: 1.02 }}
                      // whileTap={{ scale: 0.98 }}
                    >
                      Order Now
                      <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Upcoming Products */}
        {activeCategory === "upcoming" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {upcomingProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <div
                    className={`h-48 bg-gradient-to-br ${product.gradient} relative`}
                  >
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/90 text-gray-800 font-semibold">
                        {product.status}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <Clock className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {product.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.map((feature) => (
                        <Badge
                          key={feature}
                          variant="outline"
                          className="text-xs"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-full"
                      // whileHover={{ scale: 1.02 }}
                      // whileTap={{ scale: 0.98 }}
                    >
                      Get Notified
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-3xl p-12 text-white"
        >
          <Droplet className="w-16 h-16 mx-auto mb-6 text-white/80" />
          <h3 className="text-3xl font-bold mb-6 font-playfair">
            Taste the Future
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience the perfect blend of tradition and innovation. Visit our
            bar or order delivery to taste what makes Sugarret special.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={"/bar"}>
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold"
                // whileHover={{ scale: 1.05 }}
                // whileTap={{ scale: 0.95 }}
              >
                Visit Our Bar
              </Button>
            </Link>
            <Link href={"/delivery"}>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-full font-semibold bg-green-600"
                // whileHover={{ scale: 1.05 }}
                // whileTap={{ scale: 0.95 }}
              >
                Order Delivery
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
