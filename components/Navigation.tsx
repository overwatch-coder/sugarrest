"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Leaf, ShoppingCart, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Products", href: "/#products" },
    { name: "Our Bar", href: "/bar" },
    { name: "Investment", href: "/investment" },
    { name: "Contact", href: "/#contact" },
  ];

  const actionItems = [
    { name: "Order Now", href: "/order", icon: ShoppingCart, primary: true },
    { name: "Delivery", href: "/delivery", icon: MapPin, primary: false },
  ];

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-xl border-b border-green-100"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/">
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="relative">
                <Leaf
                  className={`h-8 w-8 ${scrolled ? "text-green-600" : "text-white"} `}
                />
                <motion.div
                  className="absolute inset-0 bg-green-400/20 rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
              <span
                className={`text-2xl font-bold ${
                  scrolled ? "text-green-800" : "text-white"
                } font-playfair`}
              >
                Sugarret
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div key={item.name}>
                <Link
                  href={item.href}
                  className={`text-sm font-semibold transition-colors relative group ${
                    scrolled
                      ? "text-gray-700 hover:text-green-600"
                      : "text-white/90 hover:text-white/90"
                  }`}
                >
                  {item.name}
                  <motion.div
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                      scrolled ? "bg-green-600" : "bg-white"
                    }`}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {actionItems.map((action) => {
              const Icon = action.icon;
              return (
                <Link key={action.name} href={action.href}>
                  <Button
                    className={
                      action.primary
                        ? "bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                        : ` ${
                            scrolled
                              ? "bg-transparent border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                              : "border-white text-green-600 hover:bg-white hover:text-green-700 bg-white"
                          } border-2 px-6 py-2 rounded-full font-semibold transition-all duration-300`
                    }
                    size="sm"
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {action.name}
                  </Button>
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className={`${
                scrolled ? "text-gray-700" : "text-white"
              } hover:bg-white/10`}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={"md:hidden absolute top-full left-0 right-0 bg-white/90 backdrop-blur-lg shadow-2xl border-b border-green-100"}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block text-gray-700 font-semibold hover:text-green-600 transition-colors py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                <div className="pt-4 flex flex-col gap-4">
                  {actionItems.map((action, index) => {
                    const Icon = action.icon;
                    return (
                      <Link key={action.name} href={action.href}>
                        <Button
                          className={`w-full ${
                            action.primary
                              ? "bg-green-600 hover:bg-green-700 text-white"
                              : "bg-transparent border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                          } rounded-full font-semibold`}
                          onClick={() => setIsOpen(false)}
                        >
                          <Icon className="w-4 h-4 mr-2" />
                          {action.name}
                        </Button>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navigation;
