'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Truck, Clock, MapPin, Phone, CheckCircle, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import Link from 'next/link';

export default function DeliveryPage() {
  const [address, setAddress] = useState('');
  const [deliveryInfo, setDeliveryInfo] = useState<{
    available: boolean;
    time: string;
    fee: number;
    zone: string;
  } | null>(null);

  const deliveryZones = [
    { name: 'Zone 1', areas: ['Spintex', 'Tema Station', 'Baatsona'], fee: 5, time: '20-30 mins' },
    { name: 'Zone 2', areas: ['East Legon', 'Airport', 'Cantonments'], fee: 8, time: '30-45 mins' },
    { name: 'Zone 3', areas: ['Osu', 'Labone', 'Dzorwulu'], fee: 10, time: '45-60 mins' },
    { name: 'Zone 4', areas: ['Adabraka', 'Ring Road', 'Asylum Down'], fee: 12, time: '50-70 mins' },
  ];

  const features = [
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'Fresh juices delivered within 20-70 minutes',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: Truck,
      title: 'Temperature Controlled',
      description: 'Insulated bags keep your drinks perfectly chilled',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: CheckCircle,
      title: 'Quality Guaranteed',
      description: 'Fresh preparation right before delivery',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: Phone,
      title: 'Real-time Tracking',
      description: 'Track your order from preparation to delivery',
      color: 'from-orange-400 to-red-500'
    }
  ];

  const checkDelivery = () => {
    if (!address.trim()) {
      toast.error('Please enter your address');
      return;
    }

    // Simulate address checking
    const randomZone = deliveryZones[Math.floor(Math.random() * deliveryZones.length)];
    const isAvailable = Math.random() > 0.2; // 80% chance of availability

    if (isAvailable) {
      setDeliveryInfo({
        available: true,
        time: randomZone.time,
        fee: randomZone.fee,
        zone: randomZone.name
      });
      toast.success('Delivery available to your area!');
    } else {
      setDeliveryInfo({
        available: false,
        time: '',
        fee: 0,
        zone: ''
      });
      toast.error('Sorry, we don\'t deliver to this area yet.');
    }
  };

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
                Fresh Delivery
              </h1>
              <p className="text-xl text-green-100 max-w-2xl mx-auto mb-8">
                Get your favorite Sugarret beverages delivered fresh to your doorstep
              </p>
              <Link href="/order">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                <Truck className="w-5 h-5 mr-2" />
                Order Now
              </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Address Checker */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-2xl">Check Delivery Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Input
                    placeholder="Enter your delivery address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="flex-1"
                  />
                  <Button onClick={checkDelivery} className="bg-green-600 hover:bg-green-700">
                    Check
                  </Button>
                </div>

                {deliveryInfo && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6"
                  >
                    {deliveryInfo.available ? (
                      <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex items-center mb-3">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                          <span className="font-semibold text-green-800">Delivery Available!</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="text-gray-600">Delivery Time:</span>
                            <p className="font-semibold">{deliveryInfo.time}</p>
                          </div>
                          <div>
                            <span className="text-gray-600">Delivery Fee:</span>
                            <p className="font-semibold">₵{deliveryInfo.fee}</p>
                          </div>
                          <div>
                            <span className="text-gray-600">Zone:</span>
                            <p className="font-semibold">{deliveryInfo.zone}</p>
                          </div>
                        </div>
                        <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
                          Proceed to Order
                        </Button>
                      </div>
                    ) : (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                        <div className="flex items-center mb-2">
                          <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
                          <span className="font-semibold text-red-800">Not Available</span>
                        </div>
                        <p className="text-red-700 text-sm mb-3">
                          We don&apos;t currently deliver to this area, but we&apos;re expanding soon!
                        </p>
                        <Button variant="outline" className="w-full">
                          Get Notified When Available
                        </Button>
                      </div>
                    )}
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Delivery Zones */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Delivery Zones</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {deliveryZones.map((zone, index) => (
                  <motion.div
                    key={zone.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-4 border border-gray-200 rounded-lg hover:border-green-300 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-lg">{zone.name}</h3>
                      <Badge variant="outline">₵{zone.fee}</Badge>
                    </div>
                    <div className="space-y-2 mb-3">
                      {zone.areas.map((area) => (
                        <p key={area} className="text-sm text-gray-600">• {area}</p>
                      ))}
                    </div>
                    <div className="flex items-center text-sm text-green-600">
                      <Clock className="w-4 h-4 mr-1" />
                      {zone.time}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* How It Works */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">How Delivery Works</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { step: 1, title: 'Order Online', description: 'Browse our menu and place your order' },
                  { step: 2, title: 'Fresh Preparation', description: 'We prepare your drinks fresh to order' },
                  { step: 3, title: 'Quality Packaging', description: 'Carefully packed in insulated containers' },
                  { step: 4, title: 'Fast Delivery', description: 'Delivered fresh to your doorstep' }
                ].map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                      {item.step}
                    </div>
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}